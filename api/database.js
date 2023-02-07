import mysql from "mysql";

export const database = mysql.createConnection({
  host: "LocalHost",
  user: "root",
  password: "1234",
  database: "blogAPP",
});
