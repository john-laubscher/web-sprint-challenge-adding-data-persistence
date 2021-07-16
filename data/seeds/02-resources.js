exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    { resource_name: "Pots", resource_description: "clay containers for re-planting" },
    { resource_name: "Fertilizer", resource_description: "organic plant food" },
    { resource_name: "Paper and Pen", resource_description: "organizing and planning materials" },
    { resource_name: "Practice equipment", resource_description: " cones, discs, etc for practice" },
  ]);
};
