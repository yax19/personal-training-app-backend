const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ msg: 'User created', user });
  } catch (err) {
    res.status(400).json({ msg: 'Signup error', err });
  }
};

//remember no easy hits for hackers so "invaid credentials" and not spcify which one is wrong
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }


  const token = jwt.sign({ id: user._id }, 'secret');
  res.json({ msg: 'Login successful', user, token });
};