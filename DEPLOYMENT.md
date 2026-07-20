# Senson Grid — Production Deployment Guide

This guide explains how to deploy Senson Grid with the public website at `https://sensongrid.com` and the admin panel at `https://admin.sensongrid.com`.

---

## Architecture Overview

```
sensongrid.com          →  Nginx  →  frontend/dist-public/  (static files)
admin.sensongrid.com    →  Nginx  →  frontend/dist-admin/   (static files)
sensongrid.com/api/*    →  Nginx  →  Express backend :5000  (reverse proxy)
```

- **Public website**: Static React SPA served from `dist-public/`
- **Admin panel**: Separate static React SPA served from `dist-admin/`
- **API server**: Express.js backend running on port 5000

The admin code is **physically absent** from the public build — it's not just hidden behind routes.

---

## Prerequisites

- Node.js 18+ and npm 9+
- Nginx (or another reverse proxy)
- SSL certificates (Let's Encrypt / Certbot recommended)
- A Linux server (Ubuntu 22.04+ recommended)

---

## Step 1: Clone & Install

```bash
git clone <your-repo-url> /var/www/sensongrid
cd /var/www/sensongrid
npm run install-all
```

---

## Step 2: Configure Environment

### Backend (`backend/.env`)

```bash
cp backend/.env.production.example backend/.env
```

Edit `backend/.env`:

```env
NODE_ENV=production
PORT=5000

# IMPORTANT: Generate a strong secret!
# Run: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
JWT_SECRET=<paste-64-char-hex-here>
JWT_EXPIRES_IN=8h

CORS_ORIGIN_PUBLIC=https://sensongrid.com
CORS_ORIGIN_ADMIN=https://admin.sensongrid.com

ADMIN_USERNAME=admin
ADMIN_PASSWORD=<strong-password>

DB_PATH=./data/senson_grid.db
```

### Frontend (`.env.production`)

```bash
cp frontend/.env.production.example frontend/.env.production
```

Edit `frontend/.env.production`:

```env
VITE_API_URL=https://sensongrid.com/api
```

---

## Step 3: Initialize Database & Seed Admin

```bash
# Create the data directory
mkdir -p backend/data

# The database tables are auto-created on first startup.
# Seed the admin user:
cd backend
npm run seed
cd ..
```

---

## Step 4: Build Frontend

```bash
npm run build
```

This creates:
- `frontend/dist-public/` — Public website files
- `frontend/dist-admin/` — Admin panel files

---

## Step 5: Start the Backend

Using PM2 (recommended for production):

```bash
npm install -g pm2
cd backend
pm2 start server.js --name "sensongrid-api"
pm2 save
pm2 startup
```

Or using systemd:

```ini
# /etc/systemd/system/sensongrid.service
[Unit]
Description=Senson Grid API
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/sensongrid/backend
ExecStart=/usr/bin/node server.js
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable sensongrid
sudo systemctl start sensongrid
```

---

## Step 6: Configure Nginx

### Public Website — `sensongrid.com`

```nginx
server {
    listen 443 ssl http2;
    server_name sensongrid.com www.sensongrid.com;

    ssl_certificate     /etc/letsencrypt/live/sensongrid.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/sensongrid.com/privkey.pem;

    root /var/www/sensongrid/frontend/dist-public;
    index index-public.html;

    # API reverse proxy
    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static assets with caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback — serve index.html for all non-file routes
    location / {
        try_files $uri $uri/ /index-public.html;
    }
}

# HTTP → HTTPS redirect
server {
    listen 80;
    server_name sensongrid.com www.sensongrid.com;
    return 301 https://$host$request_uri;
}
```

### Admin Panel — `admin.sensongrid.com`

```nginx
server {
    listen 443 ssl http2;
    server_name admin.sensongrid.com;

    ssl_certificate     /etc/letsencrypt/live/admin.sensongrid.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/admin.sensongrid.com/privkey.pem;

    root /var/www/sensongrid/frontend/dist-admin;
    index index-admin.html;

    # API reverse proxy (admin also needs API access)
    location /api/ {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index-admin.html;
    }

    # Optional: IP whitelist for extra security
    # allow 203.0.113.0/24;  # Your office IP
    # deny all;
}

# HTTP → HTTPS redirect
server {
    listen 80;
    server_name admin.sensongrid.com;
    return 301 https://$host$request_uri;
}
```

### Enable the sites

```bash
sudo ln -s /etc/nginx/sites-available/sensongrid.conf /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/admin.sensongrid.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Step 7: SSL with Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d sensongrid.com -d www.sensongrid.com
sudo certbot --nginx -d admin.sensongrid.com
```

---

## DNS Configuration

Add these DNS records for your domain:

| Type  | Host    | Value              |
|-------|---------|--------------------|
| A     | @       | `<server-ip>`      |
| A     | www     | `<server-ip>`      |
| A     | admin   | `<server-ip>`      |

---

## Development Workflow

For local development, the unified app (with both public and admin routes) still works:

```bash
npm run dev
```

This starts:
- Backend on `http://localhost:5000`
- Frontend on `http://localhost:5173` (with Vite proxy to backend)

All routes (`/`, `/services`, `/admin/login`, `/admin/dashboard`) work in development.

---

## Security Checklist

- [ ] Strong `JWT_SECRET` generated and set (64+ character hex)
- [ ] `ADMIN_PASSWORD` changed from the default
- [ ] `.env` file is NOT committed to git
- [ ] CORS origins match your exact domains (no wildcards)
- [ ] SSL/TLS enabled on both domains
- [ ] Admin panel optionally IP-whitelisted in Nginx
- [ ] `noindex, nofollow` meta tag on admin HTML (already included)
- [ ] SQLite database file is NOT in the web root
