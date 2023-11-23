const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '52.78.170.57',
  port: 53193,
  user: 'test',
  password: 'test',
  database: 'dateManager',
});

connection.connect();

connection.query('select * from testTable', [], (error, results, fields) => {
  // if (error) throw error;
  console.log(results, fields);
});
// results.forEach((data) => {
//   connection.query('select * from testTable', data, (err, results) => {
//     console.log(data, results);
//   });
//   connection.query('INSERT INTO your_table_name SET ?', data, (error, results, fields) => {
//     if (error) throw error;
//     console.log('Inserted a row into the table');
//   });
// });

connection.end();
