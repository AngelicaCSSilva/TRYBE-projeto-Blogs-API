const express = require('express');
const { createCategory } = require('../controllers/categoryController');
const { nameValidation } = require('../middlewares/categoryValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', tokenValidation, nameValidation, createCategory);

module.exports = routers;