const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'ShiraTestNeon_owner',
    host: 'ep-odd-sound-a2rg1w0j-pooler.eu-central-1.aws.neon.tech',
    database: 'ShiraTestNeon',
    password: 'SN4UO1AqlmvL',
    port: 5432, 
    ssl: {
              rejectUnauthorized: false  
        }
});

module.exports = pool;
