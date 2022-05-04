// Routes for the login page
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Task } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(req.session.id);
    console.log('======================');
    Task.findAll({
    where: {
        user_id: req.session.id
    },
    attributes: [
        'id',
        'title',
        'task_info',
        // 'task_timer'
    ]
    })
    .then(dbTaskData => {
        console.log(dbTaskData);
        const task = dbTaskData.map(task => task.get({ plain: true }));
        res.render('dashboard', { task, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// router.get('/Task', withAuth, (req, res) => {
    // Post.findByPk(req.params.id, {
    // attributes: [
    //     'id',
    //     'post_url',
    //     'title',
    //     'created_at',
    //     [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    // ],
    // include: [
    //     {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //         model: User,
    //         attributes: ['username']
    //     }
    //     },
    //     {
    //     model: User,
    //     attributes: ['username']
    //     }
    // ]
    // })
    // .then(dbPostData => {
    //     if (dbPostData) {
    //     const post = dbPostData.get({ plain: true });
        
    //     res.render('edit-post', {
    //         post,
    //         loggedIn: true
    //     });
    //     } else {
    //     res.status(404).end();
    //     }
    // })
    // .catch(err => {
    //     res.status(500).json(err);
    // });
//});

module.exports = router;