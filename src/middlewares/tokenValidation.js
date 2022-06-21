const { authenticateToken } = require('../utils/authenticateToken');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;

  const user = await authenticateToken(token);

  if (!user) {
    const error = { status: 401, message: 'Expired or invalid token' };
    throw error;
  }
  res.locals.user = user;

  next();
};

module.exports = tokenValidation;