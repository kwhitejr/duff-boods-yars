// Importing Passport, strategies, and config
const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

import User from '../schema/user_schema';
import config from './main';

// Setting username field to email rather than username
const localOptions = {
  usernameField: 'email',
};

//----------------------
// Local Login Strategy
// Successful local login will yield a JWT used to authenticate future requests automatically
//----------------------
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  console.log("local strategy firing");
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

    user.comparePassword(password, (error, isMatch) => {
      if (error) {
        return done(error);
      }
      if (!isMatch) {
        return done(null, false, {
          error: 'Your login details could not be verified. Please try again.',
        });
      }
      console.log(user);
      return done(null, user);
    });
  });
});

// Setting JWT strategy options
const jwtOptions = {
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  // Telling Passport where to find the secret
  secretOrKey: config.secret,

  // TO-DO: Add issuer and audience checks
};

//---------------------
// JWT Login Strategy
//---------------------
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  console.log("jwt strategy firing");
  console.log("payload", payload); // check to confirm payload has a ._id

  User.findById(payload._id, (err, user) => {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
