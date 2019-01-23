const mongoose = require('mongoose');
const dbKey = require('./config/keys').mongoURl;
const Schema = mongoose.Schema;

module.exports = () => {
  /**Connect to database */
  const db = mongoose
    .connect(dbKey, { useNewUrlParser: true })
    .then(() => console.log('Connected'))
    .catch(err => console.error(err));

  mongoose.set('useCreateIndex', true);

  const UserSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
      facebookProvider: {
        type: {
          id: String,
          token: String,
        },
        select: false,
      },
    },
    {
      collection: 'User',
    },
  );

  UserSchema.set('toJSON', { getters: true, virtuals: true });

  UserSchema.statics.upsertFbUser = function(
    accessToken,
    refreshToken,
    profile,
    cb,
  ) {
    var that = this;
    return this.findOne(
      {
        'facebookProvider.id': profile.id,
      },
      function(err, user) {
        // no user was found, lets create a new one
        if (!user) {
          console.log('user isnt', profile);
          var newUser = new that({
            fullName: profile.displayName,
            email: profile.emails[0].value,
            facebookProvider: {
              id: profile.id,
              token: accessToken,
            },
          });

          newUser.save(function(error, savedUser) {
            if (error) {
              console.log(error);
            }
            return cb(error, savedUser);
          });
        } else {
          console.log('user is', user);
          return cb(err, user);
        }
      },
    );
  };

  mongoose.model('User', UserSchema);

  return db;
};
