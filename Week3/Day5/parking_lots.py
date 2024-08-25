from flask import Flask, render_template, request
import psycopg2

app = Flask(__name__)

def get_parking_spots():
    conn = psycopg2.connect("dbname=Parking user=postgres password=0501")
    cur = conn.cursor()
    cur.execute("SELECT id, name, location FROM parking_spots")
    spots = cur.fetchall()
    cur.close()
    conn.close()
    return spots

@app.route('/')
def index():
    spots = get_parking_spots()
    return render_template('index.html', parking_spots=spots)

@app.route('/save_spot', methods=['POST'])
def save_spot():
    spot_id = request.form['parking_spot']
    conn = psycopg2.connect("dbname=Parking user=postgres password=0501")
    cur = conn.cursor()
    cur.execute("UPDATE parking_spots SET availability = FALSE WHERE id = %s", (spot_id,))
    conn.commit()
    cur.close()
    conn.close()
    return "Spot saved!"

if __name__ == '__main__':
    app.run(debug=True)