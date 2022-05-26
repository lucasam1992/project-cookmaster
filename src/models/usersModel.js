// const connect = require('mongodb');
const connection = require('./connection');

const create = async (name, email, password) => {
    const db = await connection();
    const users = await db.collection('users').insertOne({ name, email, password, role: 'user' });
    return { user: {
                name,
                email,
                role: 'user',
                _id: users.insertedId,
            } };
};

const createAdmin = async (name, email, password) => {
    const db = await connection();
    const users = await db.collection('users').insertOne({ name, email, password, role: 'admin' });

    return { user: {
                name,
                email,
                role: 'admin',
                _id: users.insertedId,
            } };
};

const getAll = async () => {
    const db = await connection();
    const users = await db.collection('users').find().toArray();

    return users;
};

const getLoginByEmail = async (email) => {
    const db = await connection();
    const loginUser = await db.collection('users').findOne({ email });
    return loginUser;
};

module.exports = {
    create,
    createAdmin,
    getAll,
    getLoginByEmail,
};