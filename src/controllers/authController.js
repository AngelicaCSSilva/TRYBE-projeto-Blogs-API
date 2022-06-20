const express = require('express');
const authService = require('../services/auth.service');

const authRouter = express.Router();

authRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const token = await authService.authenticate(email, password);
  res.status(200).json({ token });
});

module.exports = authRouter;