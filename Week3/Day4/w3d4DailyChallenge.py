# Web API and Database


# Instructions
# Using this REST Countries API, create the functionality which will write 10 random countries to your database.

# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.


import requests
import psycopg2
import random

# PostgreSQL connection parameters
db_params = {
    'dbname': 'countries',    # Replace with your database name
    'user': 'postgres',           # Replace with your PostgreSQL username
    'password': '0501',       # Replace with your PostgreSQL password
    'host': 'localhost',               # Replace with your PostgreSQL host if different
    'port': '5432'                     # Default PostgreSQL port
}

# Fetch data from REST Countries API
response = requests.get('https://restcountries.com/v3.1/all')
countries = response.json()

# Select 10 random countries
random_countries = random.sample(countries, 10)

# Connect to PostgreSQL database
conn = psycopg2.connect(**db_params)
cursor = conn.cursor()

# Create a table if not exists
cursor.execute('''
CREATE TABLE IF NOT EXISTS country (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    capital VARCHAR(255) NOT NULL,
    flag TEXT NOT NULL,
    subregion VARCHAR(255),
    population BIGINT
)
''')

# Insert data into the table
for country in random_countries:
    name = country.get('name', {}).get('common', 'N/A')
    capital = country.get('capital', ['N/A'])[0] if country.get('capital') else 'N/A'
    flag = country.get('flags', {}).get('png', 'N/A')
    subregion = country.get('subregion', 'N/A')
    population = country.get('population', 0)
    
    cursor.execute('''
    INSERT INTO country (name, capital, flag, subregion, population)
    VALUES (%s, %s, %s, %s, %s)
    ''', (name, capital, flag, subregion, population))

# Commit the transaction and close the connection
conn.commit()
cursor.close()
conn.close()

print("10 random countries added.")