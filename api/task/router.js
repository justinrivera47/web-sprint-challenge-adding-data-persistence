// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const result = await Task.getAll()
  res.json(result)
})

router.post('/', async (req, res, next) => {
  try{
    const task = await Task.createTask(req.body)
    res.status(201).json(task)
  } catch(err){
        res.status(500).json({ message: err.message })
  }
})

module.exports = router