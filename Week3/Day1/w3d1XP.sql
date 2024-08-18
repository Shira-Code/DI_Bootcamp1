-- -- Database: Public

-- -- DROP DATABASE IF EXISTS "Public";

-- CREATE DATABASE "Public"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
-- --     IS_TEMPLATE = False;



-- 🌟 Exercise 1 : Items and customers
-- Create a database called public.
-- Add two tables:
-- items

CREATE TABLE items(
 item_id SERIAL PRIMARY KEY,
 item_name VARCHAR (50) NOT NULL,
  item_price smallint (1000000) NOT NULL);


-- customers.

CREATE TABLE customers(
 customer_id SERIAL PRIMARY KEY,
 customer_first_name VARCHAR (50) NOT NULL,
 customer_last_name VARCHAR (50) NOT NULL);


-- Follow the instructions below to determine which columns and data types to add to the two tables:

-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80
INSERT INTO items (item_name, item_price)
VALUES('Small Desk', 100);

INSERT INTO items (item_name, item_price)
VALUES('Large Desk', 300);

INSERT INTO items (item_name, item_price)
VALUES('Fan', 80);

select * from items




-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson



INSERT INTO customers (customer_first_name, customer_last_name)
 VALUES('Greg', 'Jones');

INSERT INTO customers (customer_first_name, customer_last_name)
 VALUES('Sandra', 'Jones');

INSERT INTO customers (customer_first_name, customer_last_name)
 VALUES('Scott', 'Scott');

INSERT INTO customers (customer_first_name, customer_last_name)
 VALUES('Trevor', 'Green');

INSERT INTO customers (customer_first_name, customer_last_name)
 VALUES('Melanie', 'Johnson');




-- Use SQL to fetch the following data from the database:
-- All the items. 

select * from customers;
select * from items;

-- All the items with a price above 80 (80 not included).

SELECT * FROM items WHERE item_price > 80;

-- All the items with a price below 300. (300 included)

select * from items where item_price <=300;
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- no results
select * from customers where customer_last_name = 'Smith';

-- All customers whose last name is ‘Jones’.

select * from customers where customer_last_name = 'Jones';

-- All customers whose firstname is not ‘Scott’.

select * from customers where customer_last_name = 'Scott';