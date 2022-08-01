const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      models.Comment.belongsTo(models.Task, {
        foreignKey: 'id',
      });
    }
  }

  Comment.init({
    task_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER,
    text: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
