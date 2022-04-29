const sequelize = require("../config/connection");
const taskSeed = require("./task-seeds");
const userSeed = require("./user-seeds");

sequelize.sync({ force: true }).then(() => {
  userSeed().then(() => {
    taskSeed();
  });
});
