import psycopg2
import json

# Connect to PostgreSQL database
conn = psycopg2.connect(
    dbname="Parking",
    user="postgres",
    password="0501",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

# Load JSON data from file
with open('parking_lots.json', 'r', encoding='utf-8') as file:
    parking_lots = json.load(file)

# Insert data into PostgreSQL
for item in parking_lots:
    cur.execute(
        "INSERT INTO parking_lots (name, address) VALUES (%s, %s)",
        (item['name'], item['address'])
    )

# Commit the transaction
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()

print("Data imported successfully!")
