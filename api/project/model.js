const db = require("../../data/dbConfig");

function getProject() {
  console.log("inside get project");
  return db("projects");
}

function createProject() {
  console.log("inside create project");
}

module.exports = {
  getProject,
  createProject,
};
