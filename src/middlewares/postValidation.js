const fieldsValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds || categoryIds.length < 1) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    }); 
  }
  next();
};

module.exports = {
  fieldsValidation,
};