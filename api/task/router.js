// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const result = await Task.getAllWithProject()
  const mappedResult = result.map(task => ({...task, task_completed: task.task_completed ? true : false}))
  res.json(mappedResult)
})


router.post('/', async (req, res, next) => {
  try{
    const task = await Task.createTask(req.body)
    const mappedTask = {...task, task_completed: task.task_completed?true:false}
    res.status(201).json(mappedTask)
  } catch(err){
        res.status(500).json({ message: err.message })
  }
})

module.exports = router