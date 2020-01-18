/* creates variables that require and pull in mysql & inquirer packages */
var mysql = require("mysql");
var inquirer = require("inquirer");

/* establishes my connection to the database */
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "charlie",
  database: "bamazon"
});

/* console logs whether my connection worked */
connection.connect(function (err) {
  if (err) throw err;
  console.log("\n" + "Connection Succesfull!!" + "\n" + "Displaying available BAMAZON products below...\n");
  makeTable();
})

// This is where the "READ" function is * Where we make the Table to display the products
var makeTable = function () {
  connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " || " + res[i].product_name + " || " +
         res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");
    }
  })
}
