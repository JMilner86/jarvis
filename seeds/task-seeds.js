const { Task } = require('../models');

const taskData = [
    {
        title: 'Oil Change',
        task_info: 'Change oil in 3000 miles',
        id: 1,
        task_id: 1
    },
    {
        title: 'Dishes',
        task_info: 'Complete dishes everynight',
        id: 1,
        task_id: 2
    },
    {
        title: 'Furnace filter',
        task_info: 'Change furnace filter in 1 month',
        id: 2,
        task_id: 3
    },
    {
        title: 'Tire rotation',
        task_info: 'Rotate tires in 3 months',
        id: 2,
        task_id: 4
    },
    {
        title: 'Smoke alarm batteries',
        task_info: 'Is the smoke alarm beeping? Change the batteries',
        id: 2,
        task_id: 5
    },
    {
        title: 'Moon Knight',
        task_info: 'Watch Moon Knight',
        id: 2,
        task_id: 6
    }
];

const seedsTask = () => Task.bulkCreate(taskData);

module.exports =  seedsTask;