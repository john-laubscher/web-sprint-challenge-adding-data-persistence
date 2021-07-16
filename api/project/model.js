const db = require("../../data/dbConfig");

function getProject() {
  console.log("inside get project");
  return db("projects");
}

async function createProject(newProject) {
  console.log("inside create project");
  const [project_id] = await db("projects").insert(newProject);
  return getProject().where({ project_id }).first();
}

module.exports = {
  getProject,
  createProject,
};
