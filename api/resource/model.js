const db = require("../data/db-config");

function getResource() {
  console.log("inside get resource");
}

function createResource() {
  console.log("inside create resource");
}

module.exports = {
  getResource,
  createResource,
};
