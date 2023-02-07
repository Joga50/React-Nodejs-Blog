import mysql from "mysql";

export const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "blogapp",
});
