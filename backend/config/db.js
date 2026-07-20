const Database = require('better-sqlite3');
const path = require('path');

// Use DB_PATH from env, falling back to default location
const dbPath = process.env.DB_PATH
    ? path.resolve(__dirname, '..', process.env.DB_PATH)
    : path.join(__dirname, '..', 'senson_grid.db');

const db = new Database(dbPath);

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL');

// Create tables if they don't exist
db.exec(`
    CREATE TABLE IF NOT EXISTS client_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        contact_number TEXT NOT NULL,
        service_category TEXT NOT NULL CHECK(service_category IN ('Software', 'IoT', 'Designing')),
        project_type TEXT NOT NULL,
        project_title TEXT NOT NULL,
        project_description TEXT NOT NULL,
        submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS admin_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS previous_projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL CHECK(category IN ('Software', 'IoT', 'Designing')),
        description TEXT NOT NULL,
        technologies TEXT NOT NULL,
        image_url TEXT DEFAULT NULL,
        live_url TEXT DEFAULT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);

module.exports = db;
