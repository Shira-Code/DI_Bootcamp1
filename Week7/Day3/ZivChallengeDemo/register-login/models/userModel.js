const { db } = require("../config/db.js");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (userinfo) => {
    const { username, password, email, first_name, last_name } = userinfo;

    const trx = await db.transaction();

    try {
      /** insert user data into 'users' table */
      const [user] = await trx("users").insert(
        { email, username, first_name, last_name },
        ["username", "id"]
      );

      // hass the password
      const salt = await bcrypt.genSalt(10)
      const hassPassword = await bcrypt.hash(password + "", salt);
    //   console.log(salt,hassPassword);


      await trx("hashpwd").insert({
        username: user.username,
        password: hassPassword,
      });

      await trx.commit();

      return user;
    } catch (err) {
      console.log(err);
      await trx.rollback();
      throw err;
    }
  },
  getUserByEmailOrUsername: async (email, username) => {
    try {
      const user = await db("users")
        .select("users.id", "users.username", "hashpwd.password")
        .join("hashpwd", { "users.username": "hashpwd.username" })
        .where("users.username", username)
        .orWhere("users.email", email)
        .first();
      return user;
    } catch (error) {
      throw error;
    }
  },
};
