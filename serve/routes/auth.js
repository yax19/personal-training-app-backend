const express = require('express');
const router = express.Router();
const { signupUser, signinUser } = require('../controllers/authController');
const authMiddleware = require('../../middleware/auth');
const User = require('../models/User');

router.post('/signup', signupUser);
router.post('/signin', signinUser);




router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

router.post('/auth/login', async (req, res) => {
  // login logic
});
module.exports = router;