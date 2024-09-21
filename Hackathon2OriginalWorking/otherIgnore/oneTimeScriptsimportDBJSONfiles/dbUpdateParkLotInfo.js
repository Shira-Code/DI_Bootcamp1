const { Client } = require('pg');

// Create a new instance of the Client
const client = new Client({
  connectionString: 'postgresql://ShiraTestNeon_owner:SN4UO1AqlmvL@ep-odd-sound-a2rg1w0j.eu-central-1.aws.neon.tech/ShiraTestNeon?sslmode=require', // Replace with your connection string
});

async function updateParkingLotInfo() {
  try {
    await client.connect();

    // JSON data
    const info = {
      "name": "חניון חברה חדשה",
      "address": "חברה חדשה 9 תל-אביב יפו",
      "operating_hours": "24 שעות 7 ימים בשבוע",
      "area": "כיכר המדינה",
      "pricing": {
        "hourly": {
          "weekdays": {
            "start": "07:00",
            "end": "18:00",
            "first_hour": "20 ₪",
            "additional_quarter_hour": "5 ₪"
          },
          "single_entry": "30 ₪",
          "discount": "75% הנחה לתושבי תל-אביב יפו",
          "free_duration": "15 דקות"
        }
      },
      "payment_method": "כרטיס אשראי ו/או ישומון סלולארי",
      "operator": "אחוזות החוף (הפעלה עצמית) 03-7610300"
    };

    // Update the table
    const query = `
      UPDATE parking_lots
      SET info = $1
      WHERE name = 'חניון חברה חדשה'
    `;
    await client.query(query, [JSON.stringify(info)]);
    
    console.log('Data updated successfully.');
  } catch (err) {
    console.error('Error updating data:', err);
  } finally {
    await client.end();
  }
}

updateParkingLotInfo();
