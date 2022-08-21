
exports.seed = async function(knex) {
  await knex('projects').truncate()
  await knex('projects').insert([
    {
      project_id: 1, 
      project_name: 'rowValue1', 
      project_description: '', 
      project_completed: false},
    {
      project_id: 2, 
      project_name: 'rowValue2', 
      project_description: '', 
      project_completed: false},
    {
      project_id: 3, 
      project_name: 'rowValue3', 
      project_description: '', 
      project_completed: false}
  ]);
};
