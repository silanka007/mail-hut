const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("../config/keys");
const User = require("../models/User");

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (user) {
      return done(null, user);
    }
  } catch (error) {
    console.log(error.message);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/v1/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        if (profile.id) {
          const existingUser = await User.findOne({ googleID: profile.id });
          if (existingUser) {
            return done(null, existingUser);
          } else {
            const newUser = await new User({ googleID: profile.id }).save();
            return done(null, newUser);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  )
);
