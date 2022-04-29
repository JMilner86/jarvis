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
      'task_timer',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;