const knex = require("knex");
const dotenv = require("dotenv");
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

module.exports = {
  db: knex({
    client: "pg",
    connection: {
      host: PGHOST,
      port: PGPORT,
      user: PGUSER,
      database: PGDATABASE,
      password: PGPASSWORD,
      ssl: { rejectUnauthorized: false },
    },
  }),
};

console.log({
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
  PGPORT,
});

