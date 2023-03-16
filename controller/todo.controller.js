const db = require("../config/db");
const services = require("./services/queries");

exports.addTodo = async (req, res) => {
  try {
    const { name, status } = req.body;

    const count = await db.query(`select * from todo_list`, []);

    const data = {
      name: name,
      status: status,
      id: count.rowCount + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const keys = Object.keys(data);
    const values = Object.values(data);

    const placeholder = keys.map((_, i) => `\$${i + 1}`).join(",");

    const results = await services.Insert({
      tableName: "todo_list",
      Keys: keys,
      placeholder,
      values,
    });
    res.status(200).json("Task added successfully").end();
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({ ERROR: error }).end();
  }
};

exports.getTodos = async (req, res) => {
  try {
    const results = await services.findAll({ tableName: "todo_list" });
    res.status(200).json({ data: results.rows }).end();
  } catch (error) {
    console.log("ERROR ", error);
    res.status(500).json({ ERROR: error }).end();
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const results = await services.Update({
      tableName: "todo_list",
      set: `"status" = $1`,
      where: `"id"=$2`,
      values: [status, id],
    });
    res.status(200).json("Task Updated Successfully").end();
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(500).json("Internal Server Error").end();
  }
};
