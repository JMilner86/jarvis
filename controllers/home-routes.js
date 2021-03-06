// Routes for the login page
const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Task } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("login");
});

router.get("/", withAuth, (req, res) => {
  console.log(req.session.id);
  console.log("======================");
  Task.findAll({
    attributes: [
      "id",
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

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
