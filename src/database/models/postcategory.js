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

  return postCategory;
};

module.exports = postCategory;