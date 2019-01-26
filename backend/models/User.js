const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    id: {
      type: String,
    },
    token: {
      type: String,
    },

    fullName: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  {
    collection: 'UserSchema',
  },
);

UserSchema.statics.registerFacebookUser = function(
  accessToken,
  refreshToken,
  profile,
  cb,
) {
  var that = this;
  return that.findOne(
    {
      'facebookProvider.id': profile.id,
    },
    (err, user) => {
      // no user was found, lets create a new one
      if (!user) {
        console.log('user isnt', profile);
        var newUser = new that({
          fullName: profile.displayName,
          email: profile.emails[0].value,
          id: profile.id,
          token: accessToken,
          photo: profile.photos[0].value,
        });

        newUser.save(function(error, savedUser) {
          if (error) {
            console.log(error);
          }
          return cb(error, savedUser);
        });
      } else {
        return cb(err, user);
      }
    },
  );
};

mongoose.set('useCreateIndex', true);

module.exports = mongoose.model('UserSchema', UserSchema);
