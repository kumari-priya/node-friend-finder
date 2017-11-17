const router = require('express').Router();
const start = { root: __dirname + "/.."};

router.get("/", (req, res) => {
  res.sendFile("/public/" + "home.html", start);
});

router.get("/survey", (req, res) => {
  res.sendFile("/public/" + "survey.html", start);
});

module.exports = router;
