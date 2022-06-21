const userService = require('../services/user.service.');

const creteUser = async (req, res) => {
    const token = await userService.createUser(req.body);
    res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  res.status(200).json(user);
};

module.exports = {
  creteUser,
  getUsers,
  getUserById,
};