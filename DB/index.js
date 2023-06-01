const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "34.22.77.203",
  port: "3306",
  user: "root",
  password: 'dongdong9',
  database: "DGDL",
});

module.exports = {
  db,
}
