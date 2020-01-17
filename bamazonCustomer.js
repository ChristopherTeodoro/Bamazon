/* creates variables that require and pull in mysql & inquirer packages */
var mysql = require("mysql");
var inquirer = require("inquirer");

/* establishes my connection to the database */
var connection = mysql.createConnection({
  host:"localhost",
  port:3306,
  user:"root",
  password:"charlie",
  database:"bamazon"
});

/* console logs whether my connection worked */
connection.connect(function(err){
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
});

// This is where the "READ" function for displaying bamazon db is
function readProducts() {
  console.log("Displaying all BAMAZON products below...\n");
  connection.query("SELECT * FROM bamazon.products;", function(err,res) {
    if (err) throw err;
    console.log(res);
  });
} 
// This is where the "CREATE" function is
/*function createProduct() {
  console.log("Inserting a new product into the database...\n");
  var query = connection.query("INSERT INTO products SET ?", {
    children: "Similac",  
    price: 6.25,
    quantity: 5
    },
  );
}  

// prompt

// function for answer here

//  update products here

// last variable here

// else statement here 
*/