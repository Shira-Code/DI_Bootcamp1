-- -- Database: Hollywood

-- -- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- select * from actors

-- How to push your work to Github ?
-- Save the queries into a sql file (.sql extension) and push this file to Github.
-- You can insert the sql file into the pgadmin interface, and execute the request from there!


-- Instructions
-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.  
SELECT COUNT(*) FROM actors
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('', '','09/11/1990');

-- ERROR:  INSERT has more target columns than expressions
-- LINE 1: INSERT INTO actors (first_name, last_name, age, number_oscar...
--                                                         ^ 

-- SQL state: 42601
-- Character: 49

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('', '','09/11/1990',2);

-- INSERT 0 1

-- Query returned successfully in 113 msec.

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('', ,'09/11/1990',2);

-- ERROR:  syntax error at or near ","
-- LINE 3: VALUES('', ,'09/11/1990',2);

SELECT COUNT(*) FROM actors
-- "count"
-- 6

select * from actors

-- "actor_id"	"first_name"	"last_name"	"age"	"number_oscars"
-- 1	"Matt"	"Damon"	"1970-08-10"	5
-- 2	"George"	"Clooney"	"1961-06-05"	2
-- 7	"Gal"	"Gadot"	"1973-05-01"	5
-- 8	"haza"	"Ofra"	"1983-05-01"	2
-- 9			"1990-09-11"	2
-- 10			"1990-09-11"	2

	