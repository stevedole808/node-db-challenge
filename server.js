const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./projects/project-router");
const ResourceRouter = require("./resources/resources-router");
const TaskRouter = require("./tasks/task-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);
server.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = server;
