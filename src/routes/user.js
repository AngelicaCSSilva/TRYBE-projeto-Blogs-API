const express = require('express');
const {
  creteUser,
  getUsers,
  getUserById,
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

module.exports = routers;