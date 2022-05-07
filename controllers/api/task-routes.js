const connection = require("../../config/connection");
const { Task, User } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

// Retrieves all the Task associated with the logged in user. (Thats what it's supposed to do)
router.get("/:user", withAuth, (req, res) => {
  console.log("==============");
  Task.findAll({
    where: {
      id: req.params.user,
    },
    attributes: [
      "id",
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

router.post("/", withAuth, (req, res) => {
  Task.create({
    title: req.body.title,
    task_info: req.body.task_info,
    user_id: req.session.userId,
  })
    .then((dbTaskData) => res.json(dbTaskData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
