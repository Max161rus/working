const { Model } = require('sequelize');
const config = require('../config');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Board, {
        foreignKey: 'owner_id',
      });
      this.belongsToMany(models.Board, {
        through: 'BoardSubscribers',
        foreignKey: 'user_id',
        as: 'boards',
      });
    }
  }

  User.init({
    fullName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
      notNull: true,
    },
    password: {
      type: DataTypes.STRING,
      notNull: true,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    role: {
      type: DataTypes.ENUM,
      values: ['client', 'admin'],
      defaultValue: 'client',
      notNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      get() {
        const rawAvatar = this.getDataValue('avatar');
        return rawAvatar ? `${config.domain}/${rawAvatar}` : null;
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
  });

  return User;
};
