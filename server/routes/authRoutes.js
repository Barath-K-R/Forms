import express from 'express';
import passport from 'passport';
const authRouter = express.Router();

authRouter.get("/login/success", (req, res) => {
  console.log('login success');
  console.log(req.session);
  if (req.user) {
    res.status(200).json({ message: "User Login", user: req.user });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
});

authRouter.get("/login/failed", (req, res) => {
  res.status(401).json({ message: "User authentication failed" });
});

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

authRouter.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth/login/failed"
  })
);

export default authRouter;
