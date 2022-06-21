const userService = require('../services/user.service.');

const creteUser = async (req, res) => {
    const token = await userService.createUser(req.body);
    res.status(201).json({ token });
};

});

module.exports = {
  creteUser,
};