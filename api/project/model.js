// build your `Project` model here

const db = require('../../data/dbConfig');

function getAll() {
  return db('projects')
    .then(projects => projects.map(p => ({...p, project_completed: p.project_completed ? true : false})))
}

function getById(id) {
  return db('projects').where('project_id', id).first();
}

async function createProject(project) {
  const [project_id] = await db('projects').insert(project);
  return db('projects')
    .insert(project)
    
}

module.exports = {
  getAll,
  createProject,
  getById,
};