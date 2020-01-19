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
    promptCustomer(res);
  })
}
// This is where Inquirer asks customer the questions
var promptCustomer = function (res) {
  inquirer.prompt([{
    type: 'input',
    name: 'choice',
    message: "What product would you like to purchase? [Quit with Q]"
// This is where the code tells you what to do with the answer plus the quit =>    
  }]).then(function (answer) {
    var correct = false;
    if(answer.choice.toUpperCase()=="Q"){
      process.exit();
    }
    for (var i = 0; i < res.length; i++) {
      if (res[i].product_name == answer.choice) {
        correct = true;
        var product = answer.choice;
        var id = i;
// This is another inquirer prompt popping off
        inquirer.prompt({
          type: "input",
          name: "quant",
          message: "How many would you like to buy?",
// Some validation checks below
          validate: function (value) {
            if (isNaN(value) == false) {
              return true;
            } else {
              return false;
            }
          }
// Where my UPDATE occurs to my database          
        }).then(function (answer) {
          if ((res[id].stock_quantity - answer.quant) > 0) {
            connection.query("UPDATE products SET stock_quantity='" + (res[id].stock_quantity - answer.quant) + "' WHERE product_name='" + product + "'", function (err, res2) {
              console.log("Product Bought!");
              makeTable();
            })
// Where a non-answer goes to
          } else {
            console.log("Not a valid selection!");
            promptCustomer(res);
          }
        })
      }
    }
    if (i == res.length && correct == false) {
      console.log("Not a valid selection yo!");
      promptCustomer(res);
    }
  })
}