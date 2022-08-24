const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.getAll()
  res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router