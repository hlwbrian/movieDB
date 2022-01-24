const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

/* INIT express app */
const app = require('./express.js');

/* IMPORT config file for server */
dotenv.config({path: './config.env'});

const port = process.env.PORT || 3000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "movieDB"
  });
  
  /*con.connect(function(err) {
    if (err) throw err;
    console.log("MySQL Database Connected!");

    //testing create new DB
    /*con.query("CREATE DATABASE movieDB", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });*/

    //Create table
    /*var sql = "CREATE TABLE movies (movieID int AUTO_INCREMENT PRIMARY KEY, movieName VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });*/

    //Alter table
    /*var sql = 'ALTER TABLE users ADD COLUMN movieID int';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table altered");
    });*/

    //Drop table
    /*var sql = 'DROP TABLE users';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table dropped");
      });*/

      //INSERT data
      /*var sql = 'INSERT INTO movies (movieName) VALUES ("Harry Potter")';
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("data inserted");
      });*/

      //Select data
      /*var sql = 'SELECT users.username, movies.movieName FROM users JOIN movies ON users.movieID = movies.movieID';
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
      });*/
  //});

/* START node.js server */    
const server = app.listen(port, () => {
    console.log(`The server is running on port ${port} of MovieDB`);
});

/* HANDLE unexpected error on server runs */
process.on('unhandledRejection', err => {
    console.log('unexpected error on run time');
    console.log(err.name, err.message);
    server.close( () => {
        process.exit(1);
    });
});