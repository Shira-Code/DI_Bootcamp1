# from flask import Flask, render_template
# import psycopg2

# app = Flask(__name__)

# def get_parking_spots():
#     try:
#         # Connect to PostgreSQL
#         conn = psycopg2.connect("dbname=Parking user=postgres password=0501 host=localhost")
#         cur = conn.cursor()
#         # Execute SQL query to fetch parking spots
#         cur.execute("SELECT id, name, address FROM parking_lots")
#         spots = cur.fetchall()
#         cur.close()
#         conn.close()
#         return spots
#     except Exception as e:
#         print(f"Error: {e}")
#         return []

# @app.route('/')
# def index():
#     parking_spots = get_parking_spots()
#     return render_template('index.html', parking_spots=parking_spots)

# if __name__ == '__main__':
#     app.run(debug=True)

# from flask import Flask, render_template, request, redirect, url_for
# import psycopg2

# app = Flask(__name__)

# def get_parking_spots():
#     try:
#         # Connect to PostgreSQL
#         conn = psycopg2.connect("dbname=Parking user=postgres password=0501 host=localhost")
#         cur = conn.cursor()
#         # Execute SQL query to fetch parking spots
#         cur.execute("SELECT id, name, address FROM parking_lots")
#         spots = cur.fetchall()
#         cur.close()
#         conn.close()
#         return spots
#     except Exception as e:
#         print(f"Error: {e}")
#         return []

# def save_selected_spot(spot_id):
#     try:
#         # Connect to PostgreSQL
#         conn = psycopg2.connect("dbname=Parking user=postgres password=0501 host=localhost")
#         cur = conn.cursor()
#         # Insert selected spot into the database
#         cur.execute("INSERT INTO selected_spots (spot_id) VALUES (%s)", (spot_id,))
#         conn.commit()
#         cur.close()
#         conn.close()
#     except Exception as e:
#         print(f"Error: {e}")

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     if request.method == 'POST':
#         selected_spot_id = request.form.get('parking_spot')
#         if selected_spot_id:
#             save_selected_spot(selected_spot_id)
#         return redirect(url_for('index'))
    
#     parking_spots = get_parking_spots()
#     selected_spots = get_selected_spots()
#     return render_template('index.html', parking_spots=parking_spots, selected_spots=selected_spots)

# def get_selected_spots():
#     try:
#         # Connect to PostgreSQL
#         conn = psycopg2.connect("dbname=Parking user=postgres password=0501 host=localhost")
#         cur = conn.cursor()
#         # Execute SQL query to fetch selected spots
#         cur.execute("""
#             SELECT p.id, p.name, p.address
#             FROM selected_spots s
#             JOIN parking_lots p ON s.spot_id = p.id
#         """)
#         spots = cur.fetchall()
#         cur.close()
#         conn.close()
#         return spots
#     except Exception as e:
#         print(f"Error: {e}")
#         return []

# if __name__ == '__main__':
#     app.run(debug=True)



# from google.cloud import translate_v2 as translate
# import psycopg2

# # Initialize the Google Translate client
# translate_client = translate.Client()

# def translate_text(text, target='en'):
#     result = translate_client.translate(text, target_language=target)
#     return result['translatedText']

# def update_database_with_translation():
#     try:
#         conn = psycopg2.connect("dbname=Parking user=postgres password=0501 host=localhost")
#         cur = conn.cursor()

#         # Fetch data from the database
#         cur.execute("SELECT id, name, address FROM parking_lots")
#         rows = cur.fetchall()

#         for row in rows:
#             id, name, address = row
#             translated_name = translate_text(name)
#             translated_address = translate_text(address)

#             # Update the database with translated data
#             cur.execute("""
#                 UPDATE parking_lots
#                 SET name = %s, address = %s
#                 WHERE id = %s
#             """, (translated_name, translated_address, id))

#         conn.commit()
#         cur.close()
#         conn.close()

#     except Exception as e:
#         print(f"Error: {e}")

# if __name__ == "__main__":
#     update_database_with_translation()

