// Daily Challenge : Registration & Login
// Last Updated: September 22nd, 2023

// What you will learn:
// Use Express to build an API
// Use Knex to query data from a database


// Instructions : Create a User Management API with Registration and Login using Express.js, Bcrypt, and Database
// Requirements:

// Set up a new Express.js application.


// Implement the following routes using express.Router:

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from the database
// GET /users/:id: Retrieve a specific user by ID from the database
// PUT /users/:id: Update a user’s information by ID in the database

// Create users table to store user data.


// Define a two data tables users and hashpwd to store user details:

// users table with properties like id, email, username, first_name, last_name.
// hashpwd table with properties like id, username, password.

// Use transaction to add a user


// Create this directory structure:

// server
//     |_ config
//     |_ controllers
//     |_ models
//     |_ routes


// Use bcrypt to hash user passwords before storing them in the table and for verifying passwords during login.


// Test your API using tools like Postman or curl.

// //app.js
// const express = require("express");
// const userRouter = require("./routes/userRouter.js");
// const app = express();

// //body parser
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`run on ${PORT}`);
// });

// app.use("/user", userRouter);

//db.js
// const knex = require("knex");
// require("dotenv").config();
// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

// module.exports = {
//   db: knex({
//     client: "pg",
//     connection: {
//        host: PGHOST,
//        port: PGPORT,
//        user: PGUSER,
//        database: PGDATABASE,
//        password: PGPASSWORD,
//        ssl: { rejectUnauthorized: false },
//         },
//     })
// };

//userModel.js
// const { create } = require("domain");
// const { db } = require("../config/db.js");
// const bcrypt = require("bcrypt");

// module.exports = {
//     createUser: async (userinfo) => {
//         const {username, password, email, first_name, last_name} = userinfo;
//         const trx = await db.transaction();

//         try {
//             // insert user data into 'users' table
//             const [user] = await trx("users").insert(
//                 {email, username, first_name, last_name},
//                 ["username", "id"]
//             );
//             //hash the pwd and insert into hashpwd table
//             const hashPassword = await bcrypt.hash(password + "", 10);

//             await trx("hashpwd").insert({
//                     username: user.username,
//                     password: hashPassword
//                 });
//             await trx.commit();

//             return user;

//         }   catch (error) {
//             await trx.rollback();
//             throw error;
//         }
           
//     },

//     getUserByUserName: async (email, username) => {
//         try {
//             const user = await db("users")
//                 .select('users.id', 'users.username', 'hashpwd.password')
//                 .join("hashpwd", { 'users.username': 'hashpwd.username' })
//                 .where('users.username', username)
//                 .orWhere('users.email', email)
//                 .first();
//           return user;
//         } catch (error) {
//           throw error;
//         }
//     },

//     getAllUsers: async () => {
//       try {
//             const users = await db("users");
//             return users
//         } catch(error) {
//             throw error 
//             }
//         }
// };

//userController.js
// const userModel = require('../models/userModel');
// const bcrypt = require('bcrypt');  

// module.exports = {
//     registerUser: async (req, res) => {
//         const { username, password, email, first_name, last_name } = req.body;

//         const user = { username, password, email, first_name, last_name };

//         try {
//             const userInfo = await userModel.createUser(user);
//             res.status(201).json({
//                 message: 'User created successfully',
//                 user: userInfo,
//             });
//         } catch (error) {
//             console.log(error.code);
//             if (error.code == 23505) {
//                 res.status(200).json({message: 'Email or Username already exist'});
//             }
//             res.status(500).json({error: 'internal server error'});
            
//         }
//     },
//     loginUser: async (req, res) => {    
//         const { email, username, password } = req.body; 

//         try {
//             const user = await userModel.getUserByUserName(email, username);
//             if (!user) {
//                 return res.status(404).json({message: 'user not found...'});
//             }
//             const passwordMatch = await bcrypt.compare(password + "", user.password);
//             if (!passwordMatch) {
//                 return res.status(401).json({message: 'Wrong password...'});
//             }
//             res.json({
//                 message: 'Login successfull',
//                 user: {userid: user.id, username: user.username},
//             });
//         } catch (error) {
//             console.log(error);
//             res.status(500).json({error: 'internal server error'});

//         }
//     },

//     getAllUsers: async (req,resp) => {
//         try {
//             const users = await userModel.getAllUsers();
//             resp.json(users);
//         } catch (error) {
            
//         }
// }, 
// };  

//userRouter.js
// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userController.js");

// //register route = register a new user

// router.post("/register", userController.registerUser);
// router.post("/login", userController.loginUser);

// router.get("/all", userController.getAllUsers);

// module.exports = router;