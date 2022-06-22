const express = require('express');
const { createPost, getPosts, getPostById } = require('../controllers/postController');
const { fieldsValidation } = require('../middlewares/postValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', tokenValidation, fieldsValidation, createPost);
routers.get('/', tokenValidation, getPosts);
routers.get('/:id', tokenValidation, getPostById);

module.exports = routers;