exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments('project_id')
      .unsigned();
    tbl.varchar('project_name', 100)
      .notNullable();
    tbl.varchar('project_description', 200)
    tbl.boolean('project_completed').defaultTo(false)
  })
  .createTable('resources', tbl => {
    tbl.increments('resources_id')
    .unsigned()
    tbl.varchar('resource_name', 100)
    .notNullable();
    tbl.varchar('resources_description', 600);
  })
  .createTable('tasks', tbl => {
    tbl.increments('task_id')
      .unsigned()
    tbl.varchar('task_description', 500)
      .notNullable()
    tbl.varchar('task_notes', 500);
    tbl.boolean('task_completed').defaultTo(false);
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
    // tbl.primary(['task_id'], ['project_id'])
  })
  .createTable('project_resources', tbl => {
    tbl.integer('resources_id')
      .unsigned()
      .notNullable()
      .references('resources_id')
      .inTable('resources')
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
    tbl.primary(['resources_id', 'project_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
