const { Pool } = require('pg');
const fs = require('fs');

// Configure your Neon PostgreSQL connection
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

// Read and parse JSON data
const importData = async () => {
    const data = fs.readFileSync('parking_lots.json', 'utf-8');
    const parkingLots = JSON.parse(data);

    try {
        await pool.connect();

        for (const lot of parkingLots) {
            const { name, address } = lot;

            // Insert each parking lot into the table
            await pool.query(
                'INSERT INTO parking_lots (name, address) VALUES ($1, $2)',
                [name, address]
            );
        }

        console.log('Data imported successfully');
    } catch (error) {
        console.error('Error importing data:', error);
    } finally {
        await pool.end();
    }
};

// Run the import function
importData();
