const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  registerTrees
} = require("../models/trees.js");

router.post("/", async (req, res) => {
  const body = req.body;
  const email_address = await registerUser(body);
  if (email_address) {
    return res.json({ payload: `user ${email_address} has been created` });
  }
  res.json({ success: false, message: "try again" });
});

router.post("/login", async (req, res) => {
  const { body } = req;
  const success = await loginUser({
    email_address: body.email_address,
    password: body.password
  });
  if (success) {
    req.session.isLoggedIn = true;
    req.session.email_address = body.email_address;
    return res.json({
      success: true,
      message: `${body.email_address} is logged in`
    });
  } else {
    return res.json({
      success: false,
      message: `${body.email_address} is not logged in`
    });
  }
});

router.post("/registerTree", async (req, res) => {
  const body = req.body;
  const species = await registerTrees(body);
  if (species) {
    return res.json({
      payload: `species ${species} has been requested`
    });
  }
  res.json({ success: false, message: "try again" });
});

// router.post("/registerConfirmedTree", async (req, res) => {
//   const body = req.body;
//   const species = await registerConfirmedTrees(body);
//   if (species) {
//     return res.json({
//       payload: `species ${species} has been planted`
//     });
//   }
//   res.json({ success: false, message: "try again" });
// });

// Make logout route
router.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ success: true, message: "you are logged out" });
});

// // potentially delete
// router.get("/secret", (req, res) => {
//   if (res.signedCookies.email_address) {
//     return res.json({
//       success: true,
//       message: `logged in as ${res.signedCookies.email_address}`
//     });
//   }
//   return res.json({ success: false, message: `not logged in` });
// });

module.exports = router;
