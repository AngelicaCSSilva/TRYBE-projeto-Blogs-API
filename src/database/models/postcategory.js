'use strict';
const postCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    timestamps: false,
  });

  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
  };
  return postCategory;
};

module.exports = postCategory;