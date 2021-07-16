const db = require("../../data/dbConfig");

function getResources() {
  console.log("inside get Resources");
  return db("Resources");
}

async function createResource(newResources) {
  console.log("inside create Resources");
  const [Resource_id] = await db("Resources").insert(newResources);
  return getResources().where({ Resource_id }).first();
}

module.exports = {
  getResources,
  createResource,
};
