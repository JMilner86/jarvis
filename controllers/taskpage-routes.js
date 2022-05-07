const { Task } = require("../models");
const withAuth = require("../utils/auth");
const router = require("express").Router();

// Retrieves all the Task associated with the logged in user. (Thats what it's supposed to do)
router.get("/", (req, res) => {
  console.log("==============");
  Task.findAll({
    attributes: [
      "title",
      "task_info"
    ],
  })
    .then((dbTaskData) => {
      const task = dbTaskData.map((task) => task.get({ plain: true }));
      res.render("task", { task, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/tasks", withAuth, (req, res) => {
  Task.create({
    title: req.body.title,
    task_info: req.body.task_info
  })
    .then((dbTaskData) => res.json(dbTaskData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
