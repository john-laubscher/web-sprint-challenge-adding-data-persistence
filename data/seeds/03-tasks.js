exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    { task_description: "Re-pot the plants", project_id: "1" },
    { task_description: "Add fertilizer", project_id: "1" },
    { task_description: "Plan the drills", project_id: "2" },
    { task_description: "Setup the field", project_id: "2" },
  ]);
};
