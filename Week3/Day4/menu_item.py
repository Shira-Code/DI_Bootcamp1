import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def save(self):

        conn = psycopg2.connect(
            dbname='your_database_name',
            user='your_username',
            password='your_password',
            host='localhost',
            port='5432'
            database= 'countries',
                              
        )
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",
            (self.name, self.price)
        )
        conn.commit()
        cursor.close()
        conn.close()
    
    def delete(self):
        """Delete the item from the database."""
        conn = psycopg2.connect(
            dbname='your_database_name',
            user='your_username',
            password='your_password',
            host='localhost',
            port='5432'
        )
        cursor = conn.cursor()
        cursor.execute(
            "DELETE FROM Menu_Items WHERE item_name = %s",
            (self.name,)
        )
        conn.commit()
        cursor.close()
        conn.close()
    
    def update(self, new_name=None, new_price=None):
        conn = psycopg2.connect(
            dbname='your_database_name',
            user='postgres',
            password='0501',
            host='localhost',
            port='5432'
        )
        cursor = conn.cursor()
        if new_name:
            cursor.execute(
                "UPDATE Menu_Items SET item_name = %s WHERE item_name = %s",
                (new_name, self.name)
            )
        if new_price is not None:
            cursor.execute(
                "UPDATE Menu_Items SET item_price = %s WHERE item_name = %s",
                (new_price, self.name)
            )
        conn.commit()
        cursor.close()
        conn.close()
        self.name = new_name if new_name else self.name
        self.price = new_price if new_price is not None else self.price