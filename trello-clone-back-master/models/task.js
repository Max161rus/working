const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      models.Task.belongsTo(models.Column, {
        foreignKey: 'id',
      });
      this.hasMany(models.Comment, {
        foreignKey: 'task_id',
      });
    }
  }

  Task.init({
    column_id: DataTypes.INTEGER,
    title: {
      type: DataTypes.STRING,
    },
    desc: DataTypes.TEXT,
    comments: DataTypes.ARRAY(DataTypes.INTEGER),
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
