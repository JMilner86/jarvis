// Requirements for router to work and communicate with the server
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
//const tasksRoutes = require('./task-routes');
// Declaration that requires the router to use these files and routes
router.use('/users', userRoutes);
//router.use('/tasks', tasksRoutes);


module.exports = router;
