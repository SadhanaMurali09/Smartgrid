const db = require('../config/db');

// Get all projects (public)
exports.getProjects = async (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM previous_projects ORDER BY created_at DESC').all();
        const projects = rows.map(row => ({
            ...row,
            technologies: typeof row.technologies === 'string'
                ? JSON.parse(row.technologies)
                : row.technologies
        }));
        res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Server error while fetching projects.' });
    }
};

// Get single project (public)
exports.getProjectById = async (req, res) => {
    const { id } = req.params;
    try {
        const row = db.prepare('SELECT * FROM previous_projects WHERE id = ?').get(id);
        if (!row) {
            return res.status(404).json({ message: 'Project not found.' });
        }
        const project = {
            ...row,
            technologies: typeof row.technologies === 'string'
                ? JSON.parse(row.technologies)
                : row.technologies
        };
        res.status(200).json(project);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'Server error while fetching project.' });
    }
};

// Create project (admin only)
exports.createProject = async (req, res) => {
    const { name, category, description, technologies, image_url, live_url } = req.body;

    if (!name || !category || !description || !technologies) {
        return res.status(400).json({ message: 'Name, category, description, and technologies are required.' });
    }

    try {
        const techJson = JSON.stringify(technologies);
        const result = db.prepare(
            `INSERT INTO previous_projects (name, category, description, technologies, image_url, live_url)
             VALUES (?, ?, ?, ?, ?, ?)`
        ).run(name, category, description, techJson, image_url || null, live_url || null);

        res.status(201).json({
            message: 'Project created successfully',
            id: result.lastInsertRowid
        });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ message: 'Server error while creating project.' });
    }
};

// Update project (admin only)
exports.updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, category, description, technologies, image_url, live_url } = req.body;

    if (!name || !category || !description || !technologies) {
        return res.status(400).json({ message: 'Name, category, description, and technologies are required.' });
    }

    try {
        const techJson = JSON.stringify(technologies);
        const result = db.prepare(
            `UPDATE previous_projects
             SET name = ?, category = ?, description = ?, technologies = ?, image_url = ?, live_url = ?, updated_at = CURRENT_TIMESTAMP
             WHERE id = ?`
        ).run(name, category, description, techJson, image_url || null, live_url || null, id);

        if (result.changes === 0) {
            return res.status(404).json({ message: 'Project not found.' });
        }

        res.status(200).json({ message: 'Project updated successfully' });
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ message: 'Server error while updating project.' });
    }
};

// Delete project (admin only)
exports.deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const result = db.prepare('DELETE FROM previous_projects WHERE id = ?').run(id);

        if (result.changes === 0) {
            return res.status(404).json({ message: 'Project not found.' });
        }

        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ message: 'Server error while deleting project.' });
    }
};
