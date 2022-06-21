const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const authenticateToken = async (token) => {
  if (!token) {
    const error = { status: 401, message: 'Token not found' };
    throw error;
  }

  try {
    const validate = jwt.verify(token, TOKEN_SECRET);
    return validate;
  } catch (error) {
    console.log(error);
  }
};
 
module.exports = { authenticateToken };