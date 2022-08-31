// build your `Task` model here

const db = require('../../data/dbConfig');

function getAll() {
  return db('tasks as t')
    .then(tasks => tasks.map(task => ({...task, task_completed: task.task_completed ? true : false})))
}

async function getAllWithProject() {
  const allProjects = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.task_id', 't.task_completed', 't.task_notes', 't.task_description', 'p.project_name', 'p.project_description')
    return allProjects
}

async function findById(task_id) {
  return await db('tasks')
    .where({task_id})
}


async function createTask(task){
  console.log(task)
  const [task_id] = await db('tasks').insert(task)
  console.log(task_id)
  const [found] = await findById(task_id)
  console.log(found)
  return found
  }

// function bool(completed) {
//   completed.map(mappedTask => ({
//   ...mappedTask,
//   task_completed: completed.task_completed ? true : false,
//   })
// )}

module.exports = {
  getAll,
  createTask,
  getAllWithProject
};


// return db('messages as m')
//     .join('hubs as h', 'm.hub_id', 'h.id')
//     .select('m.id', 'm.text', 'm.sender', 'h.id as hubId', 'h.name as hub')
//     .where({ hub_id: hubId });

// parse: function (response) {
//   return Object.assign({}, response, {
//     isChecked: !!Number(response.isChecked), // OR
//     isChecked: Boolean(Number(response.isChecked))
//   });
// }