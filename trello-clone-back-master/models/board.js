const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'id',
        as: 'users',
      });
      this.hasMany(models.Column, {
        foreignKey: 'board_id',
      });
      this.belongsToMany(models.User, {
        through: {
          model: 'BoardSubscribers',
          unique: false,
        },
        foreignKey: 'board_id',
        as: 'subscribers',
      });
    }
  }

  Board.init({
    owner_id: DataTypes.INTEGER,
    columns_order: DataTypes.ARRAY(DataTypes.INTEGER),
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 20],
      },
    },
  }, {
    sequelize,
    modelName: 'Board',
  });

  return Board;
};
