'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        sourceKey: 'userId',
      });
    }
  }
  Posts.init(
    {
      postId: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'userId',
        },
        onDelete: 'cascade',
      },
      nickname: DataTypes.STRING,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      like: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Posts',
    }
  );
  return Posts;
};
