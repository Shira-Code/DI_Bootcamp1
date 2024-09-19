// const fs = require('fs');
// const { Client } = require('pg');

// // Load JSON data
// const loadData = () => {
//   return new Promise((resolve, reject) => {
//     fs.readFile('coordinates.json', 'utf8', (err, data) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(JSON.parse(data));
//     });
//   });
// };

// // Connect to Neon DB
// const connectDB = async () => {
//   const client = new Client({
//     connectionString: 'postgresql://ShiraTestNeon_owner:SN4UO1AqlmvL@ep-odd-sound-a2rg1w0j.eu-central-1.aws.neon.tech/ShiraTestNeon?sslmode=require',
//   });
//   await client.connect();
//   return client;
// };

// // Update parking lots in the DB
// const updateParkingLots = async (client, parkingData) => {
//   for (const parking of parkingData) {
//     const { name, address, coords: { lat, lon } } = parking;
//     const query = `
//       UPDATE parking_lots
//       SET lat = $1, lon = $2
//       WHERE name = $3 AND address = $4;
//     `;
//     await client.query(query, [lat, lon, name, address]);
//   }
// };

// const main = async () => {
//   try {
//     const parkingData = await loadData();
//     const client = await connectDB();
    
//     await updateParkingLots(client, parkingData);
    
//     console.log('Database updated successfully');
//     await client.end();
//   } catch (error) {
//     console.error('Error updating database:', error);
//   }
// };

// main();


const fs = require('fs');
const { Client } = require('pg');

// Load JSON data
const loadData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('coordinates.json', 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
};

// Connect to Neon DB
const connectDB = async () => {
  const client = new Client({
    connectionString: 'postgresql://ShiraTestNeon_owner:SN4UO1AqlmvL@ep-odd-sound-a2rg1w0j.eu-central-1.aws.neon.tech/ShiraTestNeon?sslmode=require',
  });
  await client.connect();
  return client;
};

// Update parking lots in the DB
const updateParkingLots = async (client, parkingData) => {
  for (const parking of parkingData) {
    const { name, address, coords } = parking;

    // Skip entries where coordinates are null
    if (!coords || !coords.lat || !coords.lon) {
      console.log(`Skipping parking lot: ${name} (no coordinates)`);
      continue;
    }

    const { lat, lon } = coords;

    const query = `
      UPDATE parking_lots
      SET lat = $1, lon = $2
      WHERE name = $3 AND address = $4;
    `;
    await client.query(query, [lat, lon, name, address]);
  }
};

const main = async () => {
  try {
    const parkingData = await loadData();
    const client = await connectDB();
    
    await updateParkingLots(client, parkingData);
    
    console.log('Database updated successfully');
    await client.end();
  } catch (error) {
    console.error('Error updating database:', error);
  }
};

main();
