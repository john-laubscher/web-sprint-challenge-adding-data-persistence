const express = require("express");
const Resources = require("./model");
const router = express.Router();
// const { checkName } = require("./middleware");

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

module.exports = router;
