const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  const email = await registerUser(body);
  if (email) {
    return res.json({ payload: `user ${email} has been created` });
  }
  res.json({ success: false, message: "try again" });
});

router.post("/login", async (req, res) => {
  const { body } = req;
  const success = await loginUser({
    email: body.email,
    password: body.password
  });
  if (success) {
    req.session.isLoggedIn = true;
    req.session.email = body.email;
    return res.json({
      success: true,
      message: `${body.email} is logged in`
    });
  } else {
    return res.json({
      success: false,
      message: `${body.email} is not logged in`
    });
  }
});

// Make logout route
router.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ success: true, message: "you are logged out" });
});

module.exports = router;
