exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 350).notNullable();
      table.string("project_description", 350);
      table.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name").notNullable().unique();
      table.string("resource_description");
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description").notNullable();
      table.string("task_notes");
      table.boolean("task_completed").defaultTo(false);
      table.string("project_id").notNullable().references("project_id").inTable("projects").onDelete("CASCADE").onUpdate("CASCADE");
    })
    .createTable("project_resources", (table) => {
      table.increments("project_resources_id");
      table.string("project_id", 200).notNullable().references("project_id").inTable("projects");
      table.string("resource_name").notNullable().unique().references("resource_name").inTable("resources").onDelete("CASCADE").onUpdate("CASCADE");
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project_resources").dropTableIfExists("tasks").dropTableIfExists("resources").dropTableIfExists("projects");
};
