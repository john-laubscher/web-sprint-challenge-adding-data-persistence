const express = require("express");
const Resources = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("inside resources get router");
});

module.exports = router;
