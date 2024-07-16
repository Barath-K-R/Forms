import express from 'express';
import passport from 'passport';

const authRouter = express.Router();

authRouter.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  }
});

authRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    message: "user authentication failed"
  });
});

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

authRouter.get("/google", passport.authenticate("google", { scope: ["profile"] }));

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login/failed" }),
  function(req, res) {
    console.log(req.user)
    res.redirect(process.env.CLIENT_URL); 
  }
);

export default authRouter;
