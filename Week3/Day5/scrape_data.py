import requests
from bs4 import BeautifulSoup
import psycopg2

# Scrape parking data
url = "https://www.ahuzot.co.il/Parking/All/"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Extract parking spot data
parking_spots = []
for spot in soup.find_all('div', class_='parkingItem'):  # Adjust selector as needed
    name = spot.find('div', class_='title').text.strip()
    location = spot.find('div', class_='location').text.strip()
    parking_spots.append({
        'name': name,
        'location': location
    })

# Save data to PostgreSQL
conn = psycopg2.connect("dbname=Parking user=postgres password=0501")
cur = conn.cursor()

# Create table if it doesn't exist
cur.execute("""
CREATE TABLE IF NOT EXISTS parking_spots (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255)
)
""")

# Insert scraped data into the table
for spot in parking_spots:
    cur.execute("INSERT INTO parking_spots (name, location) VALUES (%s, %s)",
                (spot['name'], spot['location']))

conn.commit()
cur.close()
conn.close()
