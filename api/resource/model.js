const db = require("../../data/dbConfig");

function getResources() {
  console.log("inside get Resources");
  return db("Resources");
}

async function createResources(newResources) {
  console.log("inside create Resources");
  const [Resources_id] = await db("Resources").insert(newResources);
  return getResources().where({ Resources_id }).first();
}

module.exports = {
  getResources,
  createResources,
};
