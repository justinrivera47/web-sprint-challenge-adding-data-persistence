// build your `Task` model here

const db = require('../../data/dbConfig');

function getAll() {
  return db('tasks')
    .then(tasks => tasks.map(task => ({...task, task_completed: task.task_completed ? true : false})))
}

module.exports = {getAll};