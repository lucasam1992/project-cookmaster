const rescue = require('express-rescue');

module.exports = rescue(async (req, res, next) => {
    const { role } = req.payload; 

    if (role !== 'admin') {
        return res.status(403).json({ message: 'Only admins can register new admins' });
    }

    next();
});