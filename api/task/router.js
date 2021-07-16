const express = require("express");
const Tasks = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Tasks.createTask(req.body)
    .then((newTask) => {
      const { task_id, task_notes, task_description, task_completed, project_id } = newTask;
      res.status(201).json({
        task_id: task_id,
        task_description: task_description,
        task_notes: task_notes,
        task_completed: !!task_completed,
        project_id: project_id,
      });
    })
    .catch(next);
});

module.exports = router;
