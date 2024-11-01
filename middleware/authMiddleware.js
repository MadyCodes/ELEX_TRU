// middleware/authMiddleware.js
const jwt = require('jsonwebtoken'); // Assume you're using JWT for auth

// Middleware to protect routes
exports.protect = (req, res, next) => {
    // Here, you would typically extract the token from headers and verify it
    const token = req.headers.authorization && req.headers.authorization.startsWith('Bearer')
        ? req.headers.authorization.split(' ')[1]
        : null;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token is not valid' });
        }
        req.user = decoded; // Assuming decoded contains user info
        next();
    });
};

// Middleware to restrict access to admin users
exports.adminOnly = (req, res, next) => {
    // Assuming req.user.role contains the user's role
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied, admin only' });
    }
    next();
};
