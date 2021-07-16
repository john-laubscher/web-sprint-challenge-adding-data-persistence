const express = require("express");
const Projects = require("./model");
const router = express.Router();
const { checkName } = require("./middleware");

router.get("/", (req, res, next) => {
  Projects.getProject()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", checkName, (req, res, next) => {
  Projects.createProject(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch(next);
});

module.exports = router;
