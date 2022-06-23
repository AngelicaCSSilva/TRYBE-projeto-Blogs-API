const express = require('express');
const {
  creteUser,
  getUsers,
  getUserById,
  deleteUser,
} = require('../controllers/userController');
const {
  nameValidation,
  emailValidation,
  passwordValidation,
  } = require('../middlewares/userValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', nameValidation, emailValidation, passwordValidation, creteUser);
routers.get('/', tokenValidation, getUsers);
routers.get('/:id', tokenValidation, getUserById);
routers.delete('/me', tokenValidation, deleteUser);

module.exports = routers;