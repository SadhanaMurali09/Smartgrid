const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const requestController = require('../controllers/requestController');
const authMiddleware = require('../middleware/auth');

// @route   POST /api/requests
// @desc    Submit a new client request (public)
router.post(
    '/',
    [
        check('full_name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('contact_number', 'Contact number is required').not().isEmpty(),
        check('service_category', 'Service category is required').not().isEmpty(),
        check('project_type', 'Project type is required').not().isEmpty(),
        check('project_title', 'Project title is required').not().isEmpty(),
        check('project_description', 'Project description is required').not().isEmpty()
    ],
    requestController.createRequest
);

// @route   GET /api/requests
// @desc    Get all client requests (Admin Dashboard - protected)
router.get('/', authMiddleware, requestController.getRequests);

// @route   DELETE /api/requests/:id
// @desc    Delete a request by ID (Admin Dashboard - protected)
router.delete('/:id', authMiddleware, requestController.deleteRequest);

module.exports = router;
