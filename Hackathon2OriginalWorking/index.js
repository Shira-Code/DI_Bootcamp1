// index.js
const express = require('express');
const pool = require('./db');
const path = require('path');
const app = express();

// index.js
app.use(express.json()); // Add this line

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

const saveParkingSession = async (spotId, totalTime, totalPrice, startTime, stopTime) => {
  try {
    await pool.query(
      'INSERT INTO parking_sessions (spot_id, total_time, total_price, start_time, stop_time) VALUES ($1, $2, $3, $4, $5)',
      [spotId, totalTime, totalPrice, startTime, stopTime]
    );
  } catch (err) {
    console.error('Error saving parking session:', err);
    throw err; // Propagate error for handling in route
  }
};


// Route to save parking session data
app.post('/save-parking-session', async (req, res) => {
  console.log('Received request body:', req.body); // Log the request body
  
  const { spotId, totalTime, totalPrice, startTime, stopTime } = req.body;

  if (!spotId || !totalTime || !totalPrice || !startTime || !stopTime) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await saveParkingSession(spotId, totalTime, totalPrice, new Date(startTime), new Date(stopTime));
    res.sendStatus(200);
  } catch (error) {
    console.error('Error saving parking session:', error);
    res.status(500).json({ error: 'Failed to save parking session' });
  }
});




// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
