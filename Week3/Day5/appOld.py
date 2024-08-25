from flask import Flask, render_template, jsonify, request
import psycopg2

app = Flask(__name__)

# Database connection
def get_db_connection():
    conn = psycopg2.connect("dbname=Parking user=postgres password=0501")
    return conn

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-parking-lots')
def get_parking_lots():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT id, name, address FROM parking_lots')
    parking_lots = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify([{'id': row[0], 'name': row[1], 'address': row[2]} for row in parking_lots])

if __name__ == '__main__':
    app.run(debug=True)
