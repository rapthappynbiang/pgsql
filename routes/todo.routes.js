const router = require("express").Router();
const app = require("../app");
const todocontroller = require("../controller/todo.controller");

router.route("/").post(todocontroller.addTodo).get(todocontroller.getTodos);

router.route("/:id").put(todocontroller.updateTodo);

module.exports = router;
