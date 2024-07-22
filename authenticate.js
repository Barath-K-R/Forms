// index.js (or server.js)

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';

const app = express();

// Configure session middleware
app.use(session({
  secret: 'your_session_secret', // Replace with a strong, random secret
  resave: false,
  saveUninitialized: false,
}));

// Configure Passport.js
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  // Example: Check if user exists in database and create if not
  // Save user to session or issue a JWT
  const token = jwt.sign({ userId: profile.id, email: profile.emails[0].value }, 'your_jwt_secret', { expiresIn: '1h' });
  done(null, token); // Pass token to serializeUser
}));

passport.serializeUser((token, done) => {
  done(null, token); // Serialize token into session
});

passport.deserializeUser((token, done) => {
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    done(null, decoded); // Deserialize token from session
  } catch (err) {
    done(err);
  }
});

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect or send token to client
    const token = req.user; // This will be the JWT token
    res.redirect(`${process.env.CLIENT_URL}/profile?token=${token}`);
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
