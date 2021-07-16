exports.seed = function (knex, Promise) {
  return knex("project_resources").insert([
    { resource_name: "Pots", project_id: "1" },
    { resource_name: "Fertilizer", project_id: "1" },
    { resource_name: "Paper and Pen", project_id: "2" },
    { resource_name: "Practice equipment", project_id: "2" },
  ]);
};
