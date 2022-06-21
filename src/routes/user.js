const express = require('express');
const { creteUser, getUsers } = require('../controllers/userController');
const {
  nameValidation,
  emailValidation,
  passwordValidation,
  } = require('../middlewares/userValidation');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', nameValidation, emailValidation, passwordValidation, creteUser);
routers.get('/', tokenValidation, getUsers);

module.exports = routers;