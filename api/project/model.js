// build your `Project` model here

const db = require('../../data/dbConfig');

function getAll() {
  return db('projects')
  .then(projects => projects.map(p => ({...p, project_completed: p.project_completed ? true : false})))
}

module.exports = {getAll};