const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'saboroso',
    password: '125lipi',
    multipleStatements: true
  });

  module.exports = connection