const express = require('express');
const { createCategory, getCategories } = require('../controllers/categoryController');
const { nameValidation } = require('../middlewares/categoryValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', tokenValidation, nameValidation, createCategory);
routers.get('/', tokenValidation, getCategories);

module.exports = routers;