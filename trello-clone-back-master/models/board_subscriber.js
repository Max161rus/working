const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BoardSubscriber extends Model {}

  BoardSubscriber.init({
    user_id: DataTypes.INTEGER,
    board_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BoardSubscriber',
  });

  return BoardSubscriber;
};
