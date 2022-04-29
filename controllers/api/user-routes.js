
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


// POST route to create user

router.post('/', (req, res) => {
  
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// PUT route to update existing data


router.put('/:id', (req, res) => {
  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// DELETE route to delete


router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router