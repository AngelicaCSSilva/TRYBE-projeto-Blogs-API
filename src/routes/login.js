const express = require('express');
const { login } = require('../controllers/authController');

const routers = express.Router();

routers.post('/', login);

module.exports = routers;