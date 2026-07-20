const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

async function initDB() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            multipleStatements: true
        });

        const sqlScript = fs.readFileSync(path.join(__dirname, '../database.sql'), 'utf8');
        const queries = sqlScript.split(';').filter(q => q.trim().length > 0);

        for (let query of queries) {
            await connection.query(query);
        }
        
        console.log("✅ Database initialized successfully!");
        console.log("   Tables: client_requests, admin_users, previous_projects");
        process.exit(0);
    } catch (err) {
        console.error("❌ Failed to initialize database:", err.message);
        process.exit(1);
    }
}

initDB();
