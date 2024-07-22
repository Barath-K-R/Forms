import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import userModel from './models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/api/auth/google/callback"
},
async function(accessToken, refreshToken, profile, done) {
    try {
      let user = await userModel.findOne({ googleId: profile.id });
      if (!user) {
        user = new userModel({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          profileimage: profile.photos[0].value
        });

        await user.save();
      }
      return done(null, user); 
    } catch (error) {
      return done(error, null);  
    }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
