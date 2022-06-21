const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.createCategory(name);
  res.status(201).json(newCategory);
};

const getCategories = async (_req, res) => {
  const categories = await categoryService.getCategories();
  res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getCategories,
};