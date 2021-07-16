exports.seed = function (knex, Promise) {
  return knex("projects").insert([{ project_description: "Care for the Herb Garden" }, { project_description: "Plan for practice" }]);
};
