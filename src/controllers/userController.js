const userService = require('../services/user.service.');

const creteUser = async (req, res) => {
    const token = await userService.createUser(req.body);
    res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

module.exports = {
  creteUser,
  getUsers,
};