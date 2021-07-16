const express = require("express");
const Resources = require("./model");
const router = express.Router();
const { checkName } = require("./middleware");

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", checkName, (req, res, next) => {
  Resources.createResource(req.body)
    .then((newResources) => {
      res.status(201).json(newResources);
    })
    .catch(next);
});

module.exports = router;
