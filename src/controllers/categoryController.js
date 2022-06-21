const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.createCategory(name);
  res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};