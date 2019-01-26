'use strict';

require('./mongoose')();

const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');

const UserSchema = require('./models/User');
const config = require('./config/keys');

module.exports = () => {
  passport.use(
    new FacebookTokenStrategy(
      {
        clientID: config.facebookAPIKeys.clientID,
        clientSecret: config.facebookAPIKeys.clientSecret,
      },
      function(accessToken, refreshToken, profile, done) {
        UserSchema.registerFacebookUser(
          accessToken,
          refreshToken,
          profile,
          (err, user) => {
            return done(err, user);
          },
        );
      },
    ),
  );
};
