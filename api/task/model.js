// build your `Task` model here

const db = require('../../data/dbConfig');

function getAll() {
  return db('tasks')
    .then(tasks => tasks.map(task => ({...task, task_completed: task.task_completed ? true : false})))
}

function getAllWithProject() {

}

async function createTask(task){
  const [task_id] = await db('tasks').insert(task)
  const result = {
    ...task,
    task_completed: task.task_completed ? true : false
  }
  return result
}

module.exports = {
  getAll,
  createTask,
};


// return db('messages as m')
//     .join('hubs as h', 'm.hub_id', 'h.id')
//     .select('m.id', 'm.text', 'm.sender', 'h.id as hubId', 'h.name as hub')
//     .where({ hub_id: hubId });