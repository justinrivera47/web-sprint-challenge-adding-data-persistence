
exports.seed = async function(knex) {
  await knex('projects').truncate()
  await knex('projects').insert([
    {
      project_id: 1, 
      project_name: 'Echo', 
      project_description: 'Building Tampa high rise', 
      project_completed: false
    },
    {
      project_id: 2, 
      project_name: 'Tango', 
      project_description: 'New York, Statue of Liberty', 
      project_completed: true
    },
    {
      project_id: 3, 
      project_name: 'Sierra', 
      project_description: 'South Dakota', 
      project_completed: false
    }
  ]);
};
