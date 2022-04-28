
const Tasks = require('../../models/Tasks');
const User  = require('../../models/User');
const router = require('express').Router();

router.get('/', (req, res) => {
  
    User.findAll({
      attributes: [
      'id',
      'email',
      'password'
      ],
      include: [
        {
      model: Tasks,
      attributes: [
        'id',
        'title',
        'task_info',
        'task_timer'
      ]
    }
  ]
    })
    .then(
      dbUserData => res.json(dbUserData)
    ).catch(err=> {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router