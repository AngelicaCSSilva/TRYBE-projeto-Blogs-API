const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/generateJWTToken');

const authenticate = async (userEmail, password) => {
  if (!userEmail || !password) {
    const error = { status: 400, message: 'Some required fields are missing' };
    throw error;
  }

  const authUser = await User.findOne({
    where: { email: userEmail, password },
  });

  if (!authUser) { 
    const error = { status: 400, message: 'Invalid fields' };
    throw error;
  }

  const { id, email } = authUser;
  return generateJWTToken({ id, email });
};

module.exports = { authenticate };