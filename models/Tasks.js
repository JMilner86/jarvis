const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Tasks extends Model {}

Tasks.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        task_info: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          }
        },
        // task_timer: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // }
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'tasks'
      }
    );
    
    module.exports = Tasks;

