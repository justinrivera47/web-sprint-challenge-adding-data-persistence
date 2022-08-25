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
    tbl.increments('resource_id')
    .unsigned()
    tbl.varchar('resource_name', 100)
    .notNullable();
    tbl.varchar('resource_description', 600);
  })
  .createTable('tasks', tbl => {
    tbl.integer('task_id')
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
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      // on delete and update
    // tbl.primary(['task_id'], ['project_id'])
  })
  .createTable('project_resources', tbl => {
    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
    tbl.primary(['resource_id', 'project_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
