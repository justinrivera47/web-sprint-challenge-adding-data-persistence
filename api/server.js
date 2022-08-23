const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./project/router');

const server = express();

server.use(express.json())

server.use(helmet())
server.use(express.json());
server.use('/api/projects', projectRouter)

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
});

module.exports = server;