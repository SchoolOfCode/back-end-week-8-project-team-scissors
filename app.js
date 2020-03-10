const express = require("express");
const PORT = 5000;
const app = express();
const pgSession = require("./middleware/pgsession");
const cookieParser = require("cookie-parser");
const path = require("path");
//const logger = require("morgan");

app.use(cookieParser("secret"));

app.use(pgSession);

app.get("/", function(req, res) {
  res.send("yo");
});

//potentially delete if breakBefore:

app.get("/secrets", (req, res) => {
  const { isLoggedIn, email_address } = req.session;
  console.log(req.session);
  if (isLoggedIn) {
    return res.json({
      success: true,
      message: `logged in as ${email_address}`,
      data: req.session
    });
  }
  return res.json({ success: false, message: `not logged in` });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const indexRouter = require("./routes/index");

// Pick and choose which middleware you want
// You will definitely add to and subtract from this list

//app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;

// install pg simple
