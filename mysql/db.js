const mysql = require('mysql');
const dbConfig = require('./config');

//Create connection to MySQL DB
const conn = mysql.createConnection(dbConfig);

conn.connect( err => {
    if(err) throw error;

    console.log('MySQL DB - Connected');
});

module.exports = conn;