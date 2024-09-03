# After launching flask in virtual env, must run app.py, and then
# view html file in http://127.0.0.1:5000/

from flask import Flask, render_template, request, redirect, url_for
import psycopg2
from datetime import datetime

app = Flask(__name__)
# find from parking lot name, address from postgres db table
def get_parking_spots():
    try:
        conn = psycopg2.connect("dbname=Parking user=postgres password=0501 host=localhost")
        cur = conn.cursor()
        cur.execute("SELECT id, name, address FROM parking_lots")
        spots = cur.fetchall()
        cur.close()
        conn.close()
        return spots
    except Exception as e:
        print(f"Error: {e}")
        return []

def save_selected_spot(spot_id):
    try:
        conn = psycopg2.connect("dbname=Parking user=postgres password=0501 host=localhost")
        cur = conn.cursor()
        # Insert selected spot with timestamp
        cur.execute("INSERT INTO selected_spots (spot_id, timestamp) VALUES (%s, %s)", (spot_id, datetime.now()))
        conn.commit()
        cur.close()
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        selected_spot_id = request.form.get('parking_spot')
        if selected_spot_id:
            save_selected_spot(selected_spot_id)
        return redirect(url_for('index'))
    
    parking_spots = get_parking_spots()
    selected_spots = get_selected_spots()
    return render_template('index.html', parking_spots=parking_spots, selected_spots=selected_spots)

def get_selected_spots():
    try:
        conn = psycopg2.connect("dbname=Parking user=postgres password=0501 host=localhost")
        cur = conn.cursor()
        # Fetch selected spots with timestamp -- display needs revision to exclude seconds
        cur.execute("""
            SELECT p.id, p.name, p.address, s.timestamp
            FROM selected_spots s
            JOIN parking_lots p ON s.spot_id = p.id
            ORDER BY s.timestamp DESC
        """)
        spots = cur.fetchall()
        cur.close()
        conn.close()
        return spots
    except Exception as e:
        print(f"Error: {e}")
        return []

if __name__ == '__main__':
    app.run(debug=True)

