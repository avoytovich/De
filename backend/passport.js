'use strict';

require('./mongoose')();

const passport = require('passport');
const User = require('mongoose').model('User');
const FacebookTokenStrategy = require('passport-facebook-token');

module.exports = () => {
  passport.use(
    new FacebookTokenStrategy(
      {
        clientID: '394740917940370',
        clientSecret: 'dcc10051de9602c5272cea12343674f1',
      },
      function(accessToken, refreshToken, profile, done) {
        User.upsertFbUser(accessToken, refreshToken, profile, function(
          err,
          user,
        ) {
          return done(err, user);
        });
      },
    ),
  );
};
