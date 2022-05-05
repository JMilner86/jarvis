const sequelize = require('../config/connection');
const { User, Task } = require('../models');

const userData = [
    {
        email:'jason@gmail.com',
        password: 'jason',
        id: 1
    },
    {
        email:'jordan@gmail.com',
        password: 'jason',
        id: 2
    },
    {
        email:'jonah@gmail.com',
        password: 'jason',
        id: 3,
    },
    {
        email:'emily@gmail.com',
        password: 'jason',
        id: 4
    },
    {
        email:'jackson@gmail.com',
        password: 'jason',
        id: 5
    },
    {
        email:'jarvis@gmail.com',
        password: 'jason',
        id: 6
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;