// build your `Project` model here

const db = require('../../data/dbConfig');

function getAll() {
  return db('projects')
  .then(projects => projects.map(p => ({...p, project_completed: p.project_completed ? true : false})))
}

async function createProject(project) {
  const [project_id] = await db('projects').insert(project);
  return getAll()
}

module.exports = {
  getAll,
  createProject
};