const db = require("../../config/db");

exports.findAll = async ({ tableName = "", values = [] }) => {
  const sql = `select * from ${tableName}`;

  return db.query(sql, values);
};
exports.findOne = async ({ tableName = "", values = [], where = "" }) => {
  const sql = `select * from ${tableName} WHERE ${where}`;

  return db.query(sql, values);
};

exports.Insert = async ({
  tableName = "",
  Keys = [],
  placeholder = "",
  values = [],
}) => {
  const sql = `INSERT INTO ${tableName} (${Keys}) VALUES(${placeholder}) RETURNING *`;

  return db.query(sql, values);
};

exports.Update = async ({
  tableName = "",
  set = "",
  where = "",
  values = [],
}) => {
  const sql = `UPDATE ${tableName} SET ${set} WHERE ${where}`;

  return db.query(sql, values);
};
