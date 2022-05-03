// Routes for the login page
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Task } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  Task.findAll({
    attributes: [
      'id',
      'title',
      'task_info',
      // 'task_timer'
    ],
    include: [
      {
        model: User,
        attributes: ['email']
      }
    ]
  })
    .then(dbTaskData => {
      const task = dbTaskData.map(task => task.get({ plain: true }));

      res.render('login', { task });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
