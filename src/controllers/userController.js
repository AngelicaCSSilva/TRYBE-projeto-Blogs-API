const express = require('express');
const userService = require('../services/user.service.');
const {
  nameValidation,
  emailValidation,
  passwordValidation,
  } = require('../middlewares/userValidation');

const userRouter = express.Router();

userRouter.post('/',
  nameValidation,
  emailValidation,
  passwordValidation,
  async (req, res) => {
    const token = await userService.createUser(req.body);
    res.status(201).json({ token });
});

module.exports = userRouter;