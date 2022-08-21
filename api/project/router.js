const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const result = await Project.getAll()
  res.json(result)
  // res.json({ messages: [] })
})

module.exports = router