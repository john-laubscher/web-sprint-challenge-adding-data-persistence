const express = require("express");
const Tasks = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("inside tasks router.get");
});

module.exports = router;
