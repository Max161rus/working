const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Column extends Model {
    static associate(models) {
      this.belongsTo(models.Board, {
        foreignKey: 'id',
      });
      this.hasMany(models.Task, {
        foreignKey: 'column_id',
      });
    }
  }

  Column.init({
    board_id: DataTypes.INTEGER,
    tasks_order: DataTypes.ARRAY(DataTypes.INTEGER),
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 20],
      },
    },
  }, {
    sequelize,
    modelName: 'Column',
  });
  return Column;
};
