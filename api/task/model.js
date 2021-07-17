const db = require("../../data/dbConfig");

async function getTasks() {
  console.log("inside get Tasks");
  const tasks = await db("tasks").leftJoin("projects", "projects.project_id", "tasks.project_id");
  console.log("this is tasks:", tasks);
  return tasks;
}

async function createTask(newTask) {
  console.log("inside create Task");
  const [task_id] = await db("tasks").insert(newTask);
  return db("tasks").where({ task_id: task_id }).first();
}

module.exports = {
  getTasks,
  createTask,
};
