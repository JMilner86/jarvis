// Routes for the login page
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Tasks } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  Tasks.findAll({
    attributes: [
      'id',
      'title',
      'task_info',
      'task_timer'
    ],
    include: [
      {
        model: User,
        attributes: ['email']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('login', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
