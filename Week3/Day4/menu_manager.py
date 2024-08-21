import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        """Return a single item by name."""
        conn = psycopg2.connect(
            dbname='your_database_name',
            user='your_username',
            password='your_password',
            host='localhost',
            port='5432'
        )
        cursor = conn.cursor()
        cursor.execute(
            "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s",
            (name,)
        )
        result = cursor.fetchone()
        cursor.close()
        conn.close()
        if result:
            return {'name': result[0], 'price': result[1]}
        return None
    
    @classmethod
    def all_items(cls):
        """Return a list of all items."""
        conn = psycopg2.connect(
            dbname='your_database_name',
            user='your_username',
            password='your_password',
            host='localhost',
            port='5432'
        )
        cursor = conn.cursor()
        cursor.execute("SELECT item_name, item_price FROM Menu_Items")
        results = cursor.fetchall()
        cursor.close()
        conn.close()
        return [{'name': row[0], 'price': row[1]} for row in results]
    

    # Adding an item
item = MenuItem(name='Burger', price=35)
item.save()

# Updating an item
item.update(new_name='Veggie Burger', new_price=37)

# Deleting an item
item.delete()

# Viewing all items
manager = MenuManager()
items = manager.all_items()
print(items)

# Getting a specific item by name
item = manager.get_by_name('Veggie Burger')
print(item)