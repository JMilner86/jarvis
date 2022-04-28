const Tasks = require('../../models/Tasks');

const router = require('express').Router();


router.get('/', (req, res) => {
  
    Tasks.findAll({
      attributes: [
      'id',
      'title',
      'task_info',
      'task_timer'
      ]
    })
    .then(
      dbTasksData => res.json(dbTasksData)
    ).catch(err=> {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router