const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15h',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign(payload, TOKEN_SECRET, jwtConfig);
 
module.exports = { generateJWTToken };