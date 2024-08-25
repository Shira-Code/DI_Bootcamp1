import psycopg2

# Connect to PostgreSQL
conn = psycopg2.connect("dbname=Parking user=postgres password=0501")
cur = conn.cursor()

# Create a table to store parking spot data
# cur.execute("""
# CREATE TABLE IF NOT EXISTS parking_spots (
#     id SERIAL PRIMARY KEY,
#     name VARCHAR(255),
#     location VARCHAR(255),
#     availability BOOLEAN
# )
# """)
conn.commit()

# Insert the scraped data into the database
for spot in parking_spots:
    cur.execute("""
    INSERT INTO parking_spots (name, location, availability) VALUES (%s, %s, %s)
    """, (spot['name'], spot['location'], spot['availability']))
conn.commit()
cur.close()
conn.close()
