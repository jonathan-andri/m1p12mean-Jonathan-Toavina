const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: 'Not authorized' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Not authorized' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Token not valid' });
    }
};

module.exports = authMiddleware;