const jwt = require('jsonwebtoken');

// Validate JWT_SECRET is configured
if (!process.env.JWT_SECRET || process.env.JWT_SECRET === 'change-me-to-a-64-char-random-string') {
    if (process.env.NODE_ENV === 'production') {
        console.error('❌ FATAL: JWT_SECRET is not configured for production. Set a strong secret in .env');
        process.exit(1);
    } else {
        console.warn('⚠️  WARNING: Using default JWT_SECRET. Set a strong secret in .env before deploying.');
    }
}

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = authMiddleware;
