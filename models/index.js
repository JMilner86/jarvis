const Tasks = require('./Tasks');
const User = require('./User');

User.hasMany(Tasks);
Tasks.belongsTo(User);


module.exports = {Tasks, User};