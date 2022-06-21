const { Category } = require('../database/models');

const createCategory = async (name) => {
  const previousCreatedCategory = await Category.findOne({ where: { name } });
  if (previousCreatedCategory) return previousCreatedCategory;

  return Category.create({ name });
};

const getCategories = async () => Category.findAll();

module.exports = {
  createCategory,
  getCategories,
};