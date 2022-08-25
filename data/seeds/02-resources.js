
exports.seed = async function(knex) {
  await knex('resources').truncate()
  await knex('resources').insert([
    {
      resource_id: 1, 
      resource_name: 'Truncate', 
      resource_description: 'Id'
    },
    {
      resource_id: 2, 
      resource_name: 'Innocuous', 
      resource_description: 'Comment'
    },
    {
      resource_id: 3, 
      resource_name: 'Provocative', 
      resource_description: 'Trend'}
  ]);
};
