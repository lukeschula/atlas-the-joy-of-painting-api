var mysql = require('mysql');

function createDBConnection() {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '7432',
    database : 'joy_of_painting',
    multipleStatements: true
  });

  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to database: ' + error.stack);
      return;
    }
    console.log('Connected to database as id ' + connection.threadId);
  });

  return connection;
}

module.exports = createDBConnection;
