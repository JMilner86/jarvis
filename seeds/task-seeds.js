const { Tasks } = require('../models');

const taskdata = [
    {
        title: 'Oil Change',
        task_info: 'Change oil in 3000 miles',
        user_id: 1,
        task_timer: ''
    },
    {
        title: 'Dishes',
        task_info: 'Complete dishes everynight',
        user_id: 2,
        task_timer: ''
    },
    {
        title: 'Furnace filter',
        task_info: 'Change furnace filter in 1 month',
        user_id: 3,
        task_timer: ''
    },
    {
        title: 'Tire rotation',
        task_info: 'Rotate tires in 3 months',
        user_id: 4,
        task_timer: ''
    },
    {
        title: 'Smoke alarm batteries',
        task_info: 'Is the smoke alarm beeping? Change the batteries',
        user_id: 5,
        task_timer: ''
    },
    {
        title: 'Moon Knight',
        task_info: 'Watch Moon Knight',
        user_id: 6,
        task_timer: ''
    }
];

const seedsTasks = () => Tasks.bulkCreate(taskdata);

module.exports =  seedsTasks;