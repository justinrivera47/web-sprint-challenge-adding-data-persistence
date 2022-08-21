// build your `Project` model here

const db = require('../../data/dbConfig');

function getAll() {
  return db('project')
}

module.exports = getAll;