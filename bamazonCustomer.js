var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host:"localhost",
  port:3306,
  user:"root",
  password:"charlie",
  database:"bamazon"
});

connection.connect(function(err){
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// This is where the function for bamazon will go

// Inquirer will go here too

// prompt

// function for answer here

//  update products here

// last variable here

// else statement here