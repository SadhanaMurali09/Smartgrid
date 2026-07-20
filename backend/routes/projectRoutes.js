const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/auth');

// @route   GET /api/projects
// @desc    Get all projects (public)
router.get('/', projectController.getProjects);

// @route   GET /api/projects/:id
// @desc    Get project by ID (public)
router.get('/:id', projectController.getProjectById);

// @route   POST /api/projects
// @desc    Create a new project (admin only)
router.post('/', authMiddleware, projectController.createProject);

// @route   PUT /api/projects/:id
// @desc    Update a project (admin only)
router.put('/:id', authMiddleware, projectController.updateProject);

// @route   DELETE /api/projects/:id
// @desc    Delete a project (admin only)
router.delete('/:id', authMiddleware, projectController.deleteProject);

module.exports = router;
