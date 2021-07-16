exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_description", 350);
      table.boolean("project_completed").defaultTo(false); ///default to false (integer 0)
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
      table.boolean("task_completed").defaultTo(false); //the database defaults it to false (integer 0) if not provided
      table.string("project_id").notNullable().references("project_id").inTable("projects");
    })
    .createTable("project_resources", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 200).notNullable();
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project_resources").dropTableIfExists("tasks").dropTableIfExists("resources").dropTableIfExists("projects");
};

// /// project_id - primary key
//  project_name - required
//  project_description - optional
//  project_completed - the database defaults it to false (integer 0) if not provided

// resource_id - primary key
//  resource_name - required and unique
//  resource_description - optional

//  task_id - primary key
//  task_description - required
//  task_notes - optional
//  task_completed - the database defaults it to false (integer 0) if not provided
//  project_id - required and points to an actual project_id in the projects table
