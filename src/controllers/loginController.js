const rescue = require('express-rescue');
const loginService = require('../services/loginService');

const logIn = rescue(async (req, res) => {
    const { email, password } = req.body;
    
    const login = await loginService.logIn(email, password);
  
    if (login.message) {
        return res.status(401).json(login);
    }
    
    return res.status(200).json(login);
});

module.exports = {
    logIn,
};