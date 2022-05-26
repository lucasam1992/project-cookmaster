const jwt = require('jsonwebtoken');
const loginSchema = require('../schemas/loginSchema');
const userModel = require('../models/usersModel');

const secret = 'naoconteparaninguem';

const logIn = async (email, password) => {
    const validate = await loginSchema.validateAll(email, password);
    
    if (validate) return validate; 

    const jwtConfig = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };

    const getUser = await userModel.getLoginByEmail(email);

    const token = jwt.sign({ data: getUser }, secret, jwtConfig);

    return { token };
};

module.exports = {
    logIn,
};
