const rescue = require('express-rescue');
const usersService = require('../services/usersService');

const create = rescue(async (req, res) => {
    const { name, email, password } = req.body;

    const user = await usersService.create(name, email, password);

    if (user.message) {
        if (user.message === 'Email already registered') {
            return res.status(409).json(user);
        }
        return res.status(400).json(user);
    }

    res.status(201).json(user);
});

const createAdmin = rescue(async (req, res) => {
    const { name, email, password } = req.body;
    const { role } = req.payload; 

    // console.log(req);

    if (role !== 'admin') {
        return res.status(403).json({ message: 'Only admins can register new admins' });
    }

    const user = await usersService.createAdmin(name, email, password);

    if (user.message) {
        if (user.message === 'Email already registered') {
            return res.status(409).json(user);
        }
        return res.status(400).json(user);
    }

    res.status(201).json(user);
});

module.exports = {
    create,
    createAdmin,
};