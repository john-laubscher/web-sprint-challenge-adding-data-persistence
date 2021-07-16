exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    { project_name: "Herb Garden", project_description: "Care for the Herb Garden" },
    { project_name: "Stax Captain", project_description: "Plan for practice" },
  ]);
};
