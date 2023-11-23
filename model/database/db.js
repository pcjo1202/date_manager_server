const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '52.78.170.57',
  port: 53193,
  user: 'test',
  password: 'test',
  database: 'dateManager',
});

connection.connect();

const sql_query = 'select * from testTable';

connection.query(sql_query, (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.end();
