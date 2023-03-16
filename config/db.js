const { Pool } = require("pg");

module.exports = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todo",
  password: "password",
  port: 5432,
});
