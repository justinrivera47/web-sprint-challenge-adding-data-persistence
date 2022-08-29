// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.getAll()
    res.status(200).json(resources)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const resource = await Resource.getById(req.params.id)
    res.status(200).json(resource)
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/', async (req, res, next) => {
  try {
    const createdResource = await Resource.createResource(req.body)
    if(req.body.resource_name === Resource.getAll()){
      res.status(404).json({ message:'resource already has this name'})
    } else {
    res.status(201).json(createdResource)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router