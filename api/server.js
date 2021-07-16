const express = require("express");
const helmet = require("helmet");
const resourcesRouter = require("./router");
const projectsRouter = require("./router");
const tasksRouter = require("./router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/resources", resourcesRouter);
server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
