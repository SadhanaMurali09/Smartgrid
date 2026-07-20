const { validationResult } = require('express-validator');
const db = require('../config/db');

// Create a new client request
exports.createRequest = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        full_name,
        email,
        contact_number,
        service_category,
        project_type,
        project_title,
        project_description
    } = req.body;

    try {
        const stmt = db.prepare(`
            INSERT INTO client_requests 
            (full_name, email, contact_number, service_category, project_type, project_title, project_description) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `);
        const result = stmt.run(
            full_name,
            email,
            contact_number,
            service_category,
            project_type,
            project_title,
            project_description
        );

        res.status(201).json({
            message: 'Request submitted successfully',
            id: result.lastInsertRowid
        });
    } catch (error) {
        console.error('Error saving request:', error);
        res.status(500).json({ message: 'Server error while submitting request' });
    }
};

// Get all client requests
exports.getRequests = async (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM client_requests ORDER BY submitted_at DESC').all();
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching requests:', error);
        res.status(500).json({ message: 'Server error while fetching requests' });
    }
};

// Delete a client request
exports.deleteRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const result = db.prepare('DELETE FROM client_requests WHERE id = ?').run(id);

        if (result.changes === 0) {
            return res.status(404).json({ message: 'Request not found' });
        }

        res.status(200).json({ message: 'Request deleted successfully' });
    } catch (error) {
        console.error('Error deleting request:', error);
        res.status(500).json({ message: 'Server error while deleting request' });
    }
};
