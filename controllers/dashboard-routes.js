// Routes for the login page
const router = require("express").Router();
const { append } = require("express/lib/response");
const sequelize = require("../config/connection");
const { User, Task } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  console.log(req.session.userId);
  console.log("======================");
  Task.findAll({
    where: {
      user_id: req.session.userId,
    },
    attributes: [
      "title",
      "task_info"
    ],
  })
    .then((dbTaskData) => {
      const task = dbTaskData.map((task) => task.get({ plain: true }));
      res.render("dashboard", { task, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
