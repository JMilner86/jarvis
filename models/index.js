const Task = require('./Task');
const User = require('./User');

User.hasMany(Task);
Task.belongsTo(User);


module.exports = {Task, User};