// db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'ShiraTestNeon_owner',
    host: 'ep-odd-sound-a2rg1w0j-pooler.eu-central-1.aws.neon.tech',
    database: 'ShiraTestNeon',
    password: 'SN4UO1AqlmvL',
    port: 5432,  // standard PostgreSQL port
    ssl: {
              rejectUnauthorized: false  // Allow self-signed certificates
        }
});

module.exports = pool;

// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// module.exports = pool;


// const { Pool } = require('pg');
// const fs = require('fs');

// // Configure your Neon PostgreSQL connection
// const pool = new Pool({
//     user: 'ShiraTestNeon_owner',
//     host: 'ep-odd-sound-a2rg1w0j-pooler.eu-central-1.aws.neon.tech',
//     database: 'ShiraTestNeon',
//     password: 'SN4UO1AqlmvL',
//     port: 5432,  // standard PostgreSQL port
//     ssl: {
//         rejectUnauthorized: false  // Allow self-signed certificates
//     }
// });