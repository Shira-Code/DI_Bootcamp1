const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');  

module.exports = {
    registerUser: async (req, res) => {
        const { username, password, email, first_name, last_name } = req.body;

        const user = { username, password, email, first_name, last_name };

        try {
            const userInfo = await userModel.createUser(user);
            res.status(201).json({
                message: 'User created successfully',
                user: userInfo,
            });
        } catch (error) {
            console.log(error.code);
            if (error.code == 23505) {
                res.status(200).json({message: 'Email or Username already exist'});
            }
            res.status(500).json({error: 'internal server error'});
            
        }
    },
    loginUser: async (req, res) => {    
        const { email, username, password } = req.body; 

        try {
            const user = await userModel.getUserByUserName(email, username);
            if (!user) {
                return res.status(404).json({message: 'user not found...'});
            }
            const passwordMatch = await bcrypt.compare(password + "", user.password);
            if (!passwordMatch) {
                return res.status(401).json({message: 'Wrong password...'});
            }
            res.json({
                message: 'Login successfull',
                user: {userid: user.id, username: user.username},
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({error: 'internal server error'});

        }
    },

    getAllUsers: async (req,resp) => {
        try {
            const users = await userModel.getAllUsers();
            resp.json(users);
        } catch (error) {
            
        }
}, 
};  

