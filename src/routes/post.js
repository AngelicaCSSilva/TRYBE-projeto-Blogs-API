const express = require('express');
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const { fieldsValidation, updateValidation } = require('../middlewares/postValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', tokenValidation, fieldsValidation, createPost);
routers.get('/', tokenValidation, getPosts);
routers.get('/:id', tokenValidation, getPostById);
routers.put('/:id', tokenValidation, updateValidation, updatePost);
routers.delete('/:id', tokenValidation, deletePost);

module.exports = routers;