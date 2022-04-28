const sequelize = require('../config/connection');
const { User, Tasks } = require('../models');

const userData = [
    {
        email:'jason@gmail.com',
        password: 'jason'
    },
    {
        email:'jordan@gmail.com',
        password: 'jason'
    },
    {
        email:'jonah@gmail.com',
        password: 'jason'
    },
    {
        email:'emily@gmail.com',
        password: 'jason'
    },
    {
        email:'jackson@gmail.com',
        password: 'jason'
    },
    {
        email:'jarvis@gmail.com',
        password: 'jason'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;