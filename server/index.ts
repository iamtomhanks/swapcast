// Modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// const path = require('path');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,GET,POST");
  next();
});

const connection = mysql.createConnection({
  host     : `${process.env.HOST}`,
  user     : `${process.env.USER}`,
  password : `${process.env.PASSWORD}`,
  database : `${process.env.DATABASE}`
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);

  // Routes
  require('./Routes/Auth')(app, connection);
});


app.listen(5003);
console.log('Listening on port 5003');
