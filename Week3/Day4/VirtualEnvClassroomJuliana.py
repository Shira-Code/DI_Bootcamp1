# Table of Contents
# What you will learn
# Useful Resources
# What is virtualenv ?
# Installing virtualenv
# How to use virtualenv
# Activating virtualenv
# Deactivating virtualenv
# Feedback
# Last Updated: March 7th, 2024

# What you will learn
# How to work with virtualenv


# Useful Resources
# Virtualenv documentation
# Article about virtualenv


# Imagine you have an application that needs the version 3 of the module beautiful soup, and another that needs the version 2, how can you use both of these applications ?

# As a working developer you often need to install different versions of the same library for different projects
# Conflicts arising from having the wrong version of a dependency installed can cause long-term nightmares
# To isolate a Python environment, use virtualenv.



# virtualenv


# What is virtualenv ?
# virtualenv is a tool that allows you to make isolated python environments.
# It allows you to install packages inside it.

# It creates an environment that has its own installation directories, that doesn’t share libraries with other virtualenv environments



# Installing virtualenv
# Installing virtualenv can be done with pip

# $ pip install virtualenv


# How to use virtualenv
# First, we need to create a virtual env, this can be done with:

# Syntax

# python<version> -m venv <virtual-environment-name>


# $ python3 -m venv my_environment


# What happened after you run this command ?

# A new directory with your requested name (ie. here it’s my_environment) was created


# Activating virtualenv
# And then we just need to activate it by running:

# On Unix:

# $ source my_environnement/bin/activate


# On Windows:

# $ my_environnement\Scripts\activate


# Notice that your shell prompt has changed. It indicates which virtualenv is currently active.

# Now you are ready to install packages and use them

# Deactivating virtualenv
# $ deactivate

# db connection

import psycopg2
import requests
import json
from dotenv import load_dotenv
import os

load_dotenv()

DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')

# db_params = {
#     'dbname': 'DB_NAME',          #countries
#     'user': 'DB_USER',           #postgres
#     'password': 'DB_PASSWORD',     #0501  
#     'host': 'DB_HOST',            #localhost   
#     'port': 'DB_PORT'               #5432 
# connection=psycopg2.connect(database= 'countries',
#                                 user='postgres',
#                                 password='0501',
#                                 host='localhost',
#                                 port='5432'
#                                 )
# for env file
connection=psycopg2.connect(database= DB_NAME,
                                user= DB_USER,
                                password= DB_PASSWORD,
                                host= DB_HOST,
                                port= DB_PORT
                                )

cursor = connection.cursor()

# API connection

countries_api = requests.get('https://restcountries.com/v3.1/all')

data = countries_api.json()

print(data[0])

file_name = 'first_country.json'
with open(file_name, 'w') as file:
        json.dump(data[0], file, indent=2)

for i in range(10):
    name = data[i]['name']['common']
    capital = data[i]['capital'][0].replace('\',)
    flag = data[i]['flag']
    region = data[i]['region']
    population = data[i]['population']

query  = f'''insert into random_countries
(name, capital, flag_code, subregion, population)
values('{name}', '{capital}', '{flag}', '{region}', '{population}')'''

cursor.execute(query)
connection.commit()

print('sucessfully added to the db')


from dotenv import load_dotenv
import os

load_dotenv()

DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')