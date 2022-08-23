
exports.seed = async function(knex) {
  await knex('resources').truncate()
  await knex('resources').insert([
    {
      resources_id: 1, 
      resource_name: 'Truncate', 
      resources_description: 'Id'
    },
    {
      resources_id: 2, 
      resource_name: 'Innocuous', 
      resources_description: 'Comment'
    },
    {
      resources_id: 3, 
      resource_name: 'Provocative', 
      resources_description: 'Trend'}
  ]);
};
