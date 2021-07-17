const express = require("express");
const Tasks = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      const modifiedArray = tasks.map((item) => {
        const container = {};
        container.task_id = item.task_id;
        container.task_description = item.task_description;
        container.task_completed = !container.task_completed;
        container.task_notes = item.task_notes;
        container.project_id = item.project_id;
        container.project_name = item.project_name;
        container.project_description = item.project_description;

        return container;
      });
      res.status(200).json(modifiedArray);
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
