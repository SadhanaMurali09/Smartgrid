const bcrypt = require('bcryptjs');
const db = require('../config/db');
const dotenv = require('dotenv');

dotenv.config();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

async function seedAdmin() {
    if (!ADMIN_PASSWORD) {
        console.error('❌ ADMIN_PASSWORD environment variable is required.');
        console.error('   Set it in your .env file before running this script.');
        process.exit(1);
    }

    if (ADMIN_PASSWORD.length < 8) {
        console.error('❌ ADMIN_PASSWORD must be at least 8 characters long.');
        process.exit(1);
    }

    try {
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, salt);

        // Check if admin already exists
        const existing = db.prepare('SELECT id FROM admin_users WHERE username = ?').get(ADMIN_USERNAME);

        if (existing) {
            db.prepare('UPDATE admin_users SET password_hash = ? WHERE username = ?').run(passwordHash, ADMIN_USERNAME);
            console.log('✅ Admin user updated successfully!');
        } else {
            db.prepare('INSERT INTO admin_users (username, password_hash) VALUES (?, ?)').run(ADMIN_USERNAME, passwordHash);
            console.log('✅ Admin user created successfully!');
        }

        console.log(`   Username: ${ADMIN_USERNAME}`);
        console.log(`   Password: ${'*'.repeat(ADMIN_PASSWORD.length)}`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Failed to seed admin user:', error.message);
        process.exit(1);
    }
}

seedAdmin();
