const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// ─── Security Headers ───
app.use(helmet({
    contentSecurityPolicy: false, // Let Nginx/CDN handle CSP in production
    crossOriginEmbedderPolicy: false
}));

// ─── CORS Configuration ───
const allowedOrigins = [
    process.env.CORS_ORIGIN_PUBLIC,
    process.env.CORS_ORIGIN_ADMIN
].filter(Boolean);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (server-to-server, curl, mobile apps)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(`Origin ${origin} not allowed by CORS`));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// ─── Request Logging ───
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// ─── Body Parsing ───
app.use(express.json());

// ─── API Routes ───
const requestRoutes = require('./routes/requestRoutes');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');

app.use('/api/requests', requestRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// ─── Health Check ───
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
    });
});

// ─── Serve Static Files in Production ───
// This is a fallback for single-server deployments.
// In production, use Nginx to serve static files instead.
if (process.env.NODE_ENV === 'production') {
    const publicDistPath = path.join(__dirname, '..', 'frontend', 'dist-public');
    const adminDistPath = path.join(__dirname, '..', 'frontend', 'dist-admin');

    // Serve admin panel on /admin-static (optional, for single-server setups)
    app.use('/admin-static', express.static(adminDistPath));

    // Serve public site as default
    app.use(express.static(publicDistPath));

    // SPA fallback for public site — serve index.html for unmatched routes
    app.get('*', (req, res) => {
        // Don't serve SPA fallback for API routes
        if (req.path.startsWith('/api')) {
            return res.status(404).json({ message: 'API route not found' });
        }
        res.sendFile(path.join(publicDistPath, 'index.html'));
    });
}

// Base route (development only)
if (process.env.NODE_ENV !== 'production') {
    app.get('/', (req, res) => {
        res.send('Senson Grid API is running');
    });
}

// ─── Start Server ───
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT} [${process.env.NODE_ENV || 'development'}]`);
    console.log(`   CORS origins: ${allowedOrigins.join(', ') || 'NONE (all blocked)'}`);
});
