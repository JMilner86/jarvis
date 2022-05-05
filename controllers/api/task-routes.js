const connection = require('../../config/connection');
const { Task, User } = require('../../models');
// const User = require('../../models/User');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

// Retrieves all the Task associated with the logged in user. (Thats what it's supposed to do)
router.get('/', withAuth, (req, res) => {
  console.log('==============')
    Task.findAll({
      where: {
        id: req.params.User
      },
      attributes: [
      'id',
      'title',
      'task_info',
      // 'task_timer'
      ]
    })
    .then(dbTaskData => {
      const task = dbTaskData.map(task => task.get({ plain: true }));
      res.render('task', { task, loggedIn: true });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.post('/', withAuth, (req, res) => {
  Task.create({
    title: req.body.title,
    task_info: req.body.task_info,
    // task_timer: req.session.task_timer
  })
    .then(dbTaskData => {
      req.session.save(() => {
        req.session.id = dbTaskData.id;
        req.session.loggedIn = true;

        res.json(dbTaskData);
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post('/', (req, res) => {
//   User.create({
//     email: req.body.email,
//     password: req.body.password
//   })
//     .then(dbUserData => {
//       req.session.save(() => {
//         req.session.id = dbUserData.id;
//         req.session.loggedIn = true;
  
//         res.json(dbUserData);
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });



module.exports = router