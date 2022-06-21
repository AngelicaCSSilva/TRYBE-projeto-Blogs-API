const { User } = require('../database/models');
const { authenticate } = require('./auth.service');

const createUser = async ({ displayName, email, password, image }) => {
  const userRegistered = await User.findOne({ where: { email } });
  if (userRegistered) {
    const error = { status: 409, message: 'User already registered' };
    throw error;
  }
  await User.create({ displayName, email, password, image });
  return authenticate(email, password);
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
