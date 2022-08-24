
exports.seed = async function(knex) {
  await knex('projects').truncate()
  await knex('projects').insert([
    {
      project_id: 1, 
      project_name: 'Echo', 
      project_description: 'Building Tampa high rise', 
      project_completed: 0
    },
    {
      project_id: 2, 
      project_name: 'Alpha', 
      project_description: 'New York, Statue of Liberty', 
      project_completed: 1
    },
    {
      project_id: 3, 
      project_name: 'Sierra', 
      project_description: 'South Dakota', 
      project_completed: 0
    }
  ]);
};