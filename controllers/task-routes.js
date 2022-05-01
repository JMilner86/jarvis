const { Tasks } = require('../models');
//const User = require('../../models/User');
const withAuth = require('../utils/auth');
const router = require('express').Router();

// Retrieves all the Tasks associated with the logged in user. (Thats what it's supposed to do)
router.get('/', (req, res) => {
  console.log('==============')
    Tasks.findAll({
      // where: {
      //   id: req.params.User
      // },
      attributes: [
      'id',
      'title',
      'task_info',
      // 'task_timer'
      ]
    })
    .then(dbTaskData => {
      const tasks = dbTaskData.map(tasks => tasks.get({ plain: true }));
      res.render('task', { tasks, loggedIn: true });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.post('/', withAuth, (req, res) => {
  Tasks.create({
    title: req.body.title,
    task_info: req.body.task_info,
    // task_timer: req.session.task_timer
  })
    .then(dbTasksData => res.json(dbTasksData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router