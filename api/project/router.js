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
      const { project_id, project_name, project_description, project_completed } = newProject;
      res.status(201).json({
        project_id: project_id,
        project_name: project_name,
        project_description: project_description,
        project_completed: !!project_completed,
      });
      console.log("this is new project", newProject);
    })
    .catch(next);
});

module.exports = router;
