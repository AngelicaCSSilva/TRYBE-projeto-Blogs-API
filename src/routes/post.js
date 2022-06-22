const express = require('express');
const { createPost } = require('../controllers/postController');
const { fieldsValidation } = require('../middlewares/postValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', tokenValidation, fieldsValidation, createPost);

module.exports = routers;