'use strict';
const categorySchema = (sequelize, DataTypes) => {
  const category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    timestamps: false,
  });
  return category;
};

module.exports = categorySchema;