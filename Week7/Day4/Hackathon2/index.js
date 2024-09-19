// index.js
const express = require('express');
const pool = require('./db');
const path = require('path');
const app = express();

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Set view engine for serving HTML files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Helper function to get parking spots
const getParkingSpots = async () => {
  try {
    const result = await pool.query('SELECT id, name, address FROM parking_lots');
    return result.rows;
  } catch (err) {
    console.error('Error fetching parking spots:', err);
    return [];
  }
};

// Helper function to save selected spot
const saveSelectedSpot = async (spot_id) => {
  try {
    await pool.query(
      'INSERT INTO selected_spots (spot_id, timestamp) VALUES ($1, $2)',
      [spot_id, new Date()]
    );
  } catch (err) {
    console.error('Error saving selected spot:', err);
  }
};

// Helper function to get selected spots
const getSelectedSpots = async () => {
  try {
    const result = await pool.query(`
      SELECT p.id, p.name, p.address, s.timestamp
      FROM selected_spots s
      JOIN parking_lots p ON s.spot_id = p.id
      ORDER BY s.timestamp DESC
    `);
    return result.rows;
  } catch (err) {
    console.error('Error fetching selected spots:', err);
    return [];
  }
};

// Route to render the form and display selected spots
app.get('/', async (req, res) => {
  const parkingSpots = await getParkingSpots();
  const selectedSpots = await getSelectedSpots();
  res.render('index', { parkingSpots, selectedSpots });
});

// Route to handle form submission
app.post('/', async (req, res) => {
  const selectedSpotId = req.body.parking_spot;
  if (selectedSpotId) {
    await saveSelectedSpot(selectedSpotId);
  }
  res.redirect('/');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
