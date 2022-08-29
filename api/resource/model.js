// build your `Resource` model here

const db = require('../../data/dbConfig');

function getAll() {
  return db('resources')
}

function getById(id) {
  return db('resources').where('resource_id', id).first()
}

function findByName(resource_name) {
  return db('resource_name')
    .where({ resource_name })
    .first();
}

async function createResource(resources) {
  const [resource_id] = await db('resources').insert(resources)
  return getById(resource_id)
}

module.exports = {
  getAll,
  getById,
  createResource
};