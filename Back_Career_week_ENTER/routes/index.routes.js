const router = require("express").Router();
const phones = require('../data/phones.json')

router.get("/", (req, res, next) => {
  res.render("All good in here");
});

module.exports = router;
