const express = require("express");
const PORT = 5000;
const app = express();
const path = require("path");
//const logger = require("morgan");

app.get("/", function(req, res) {
  res.send("yo");
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
