const db = require("../../data/dbConfig");

function getTask() {
  console.log("inside get Task");
}

function createTask() {
  console.log("inside create Task");
}

module.exports = {
  getTask,
  createTask,
};
