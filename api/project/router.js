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

router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.getById(req.params.id)
    res.status(200).json(project)
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/', async (req, res, next) => {
  try {
    const createdProject = await Project.createProject(req.body)
    res.status(201).json(createdProject)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router