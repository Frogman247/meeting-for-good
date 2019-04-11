'use strict';
console.log("17")
import express from 'express';
import config from '../app/config/auth';
import User from '../api/user/user.model';

const router = express.Router();

// Passport Configuration
require('./google/passport').setup(User, config);

router.use('/google', require('./google'));

router.get('/current', ((req, res) => {
  if (req.user) return res.status(200).send(req.user);
  return res.status(500).send('User not found');
}));

router.get('/logout', ((req, res) => {
  req.logout();
  res.redirect('/');
}));


module.exports = router;

console.log("18")
