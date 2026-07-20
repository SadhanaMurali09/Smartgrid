const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

// @route   POST /api/auth/login
// @desc    Authenticate admin and get token
router.post('/login', authController.login);

// @route   GET /api/auth/verify
// @desc    Verify if current token is valid
router.get('/verify', authMiddleware, authController.verifyToken);

module.exports = router;
