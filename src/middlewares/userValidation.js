const nameValidation = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    }); 
  }
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = {
  nameValidation,
  emailValidation,
};