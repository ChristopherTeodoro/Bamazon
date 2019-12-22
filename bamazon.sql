CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL, 
    product_name VARCHAR (250) NOT NULL, 
    department_name VARCHAR (250) NOT NULL, 
    price INT NOT NULL, 
    stock_quantity INT NOT NULL, 
    PRIMARY KEY (item_id) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Topo Chico', 'Groceries', 1.17 , 500),
		('ear phones', 'Electronics', 6.25, 627),
		('Trash Bags', 'Grocery', 5.99, 300),
		('Brawny Paper Towels', 'Grocery', 4.25, 400),
		('Candy Apples', 'Produce', 0.35, 800),
		('Chocolate Bannana', 'Produce', 1.20, 1000),
		('Tropicana Orange Juice', 'Grocery', 4.45, 267),
		('Horizon Organic Milk', 'Grocery', 4.50, 200),
		('Huggies Diapers', 'Children', 2.75, 476),
		('Charmin Toiler Paper', 'Grocery', 12.99, 575),
        ('Baby Wipes','Children', 5.99, 750);
        
        
        
    