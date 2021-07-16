const db = require("../../data/dbConfig");

function getTasks() {
  console.log("inside get Tasks");
  return db("Tasks");
}

async function createTask(newTask) {
  console.log("inside create Task");
  const [task_id] = await db("tasks").insert(newTask);
  return getTasks().where({ task_id }).first();
}

module.exports = {
  getTasks,
  createTask,
};
