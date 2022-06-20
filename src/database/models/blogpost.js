'use strict';
const blogPostsSchema = (sequelize, DataTypes) => {
  const blogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  blogPost.associate = (models) => {
    blogPost.belongsto(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
  };
  return blogPost;
};

module.exports = blogPostsSchema;