import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: '52.78.170.57',
  port: 53193,
  user: 'test',
  password: 'test',
  database: 'dateManager',
});

export default db;
