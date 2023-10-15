const poolConnection = require("../connection/mysql2");

exports.addNewUser = async (nama, email, password) => {
  const sql = `INSERT INTO user (nama, email, password) values ('${nama}', '${email}', '${password}')`;
  const result = await poolConnection.query(sql);
  return result[0];
};

exports.getUserByEmail = async (email) => {
  const sql = `SELECT * FROM user WHERE email = '${email}'`;
  const result = await poolConnection.query(sql);
  return result[0];
};

exports.getUserById = async (id) => {
  const sql = `SELECT * FROM user WHERE user_id = '${id}'`;
  const result = await poolConnection.query(sql);
  return result[0];
};
