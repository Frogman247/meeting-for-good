'use strict';

import express from 'express';
import passport from 'passport';

const router = express.Router();
console.log("13")
router.get('/', passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/calendar.readonly',
  ],
  accessType: 'offline',
  prompt: 'consent',
  failureRedirect: '/',
}));

router.get('/callback', passport.authenticate('google', {
  successRedirect: '/loginController',
  failureRedirect: '/loginController',
}));

module.exports = router;
console.log("14")
