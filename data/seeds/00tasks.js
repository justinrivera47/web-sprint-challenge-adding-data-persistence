/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate()
  await knex('tasks').insert([
    {
      task_id: 1, 
      task_description: 'rowValue1',
      task_notes: '',
      task_completed: false,
      project_id: 1
    },
    {
      task_id: 2, 
      task_description: 'rowValue2',
      task_notes: '',
      task_completed: false,
      project_id: 2
    },
    {
      task_id: 3, 
      task_description: 'rowValue3',
      task_notes: '',
      task_completed: false,
      project_id: 3
    }
  ]);
};
