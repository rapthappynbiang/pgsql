const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const todoRouter = require("./routes/todo.routes");

app.use(express.json());

app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.json({ info: "TODO server" });
});

module.exports = app;
