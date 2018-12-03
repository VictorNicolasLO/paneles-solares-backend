const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../../config');
const User = require('../../schemas/User');

async function login(req, res) {
  try {
    const loginForm = req.body;
    const user = await User.findOne({
      email: loginForm.email
    });

    const passwordIsValid = bcrypt.compareSync(
      loginForm.password,
      user.password
    );

    if (!passwordIsValid)
      return res.status(401).send({ success: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 * 20
    });

    return res.status(200).send({ success: true, token: token });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}

async function firstSignUp(req, res) {
  try {
    const userCount = await User.count({
      role: 1
    });
    if (userCount > 0) {
      return res.status(400).json({
        message: 'There are a master admin right now'
      });
    }
    const user = req.body;
    const userCreated = await User.create(user);
    return res.status(200).json({
      message: 'user created',
      data: userCreated,
      success: true
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}

async function forgotPassword(req, res) {
  try {
    const user = req.body;
    const userCreated = await User.create(user);
    return res.status(200).json({
      message: 'user created',
      data: userCreated,
      success: true
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}

module.exports = {
  login,
  forgotPassword,
  firstSignUp
};
