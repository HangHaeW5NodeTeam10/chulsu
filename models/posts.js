'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //  static associate(models) {
    //   // define association here 
    //     this.hasMany(models.likes, {
    //       as: 'likes',
    //       foreignKey: 'postId',
    //     });
    // }
  }
  posts.init(
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
      },
      nickname: DataTypes.STRING, 
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      like: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "posts",
    }
  );
  return posts;
};