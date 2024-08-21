# Exercise 1 : Restaurant Menu Manager
# Instructions
# Description: Create a restaurant menu management system for a manager. The program should allow the manager to view the menu, add an item and delete an item.

# PART 1
# In this exercise we will use PostgreSQL and Python.

# Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns

# item_id : SERIAL PRIMARY KEY
# item_name : VARCHAR(30) NOT NULL
# item_price : SMALLINT DEFAULT 0

# In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.


# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.

# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

# Codebox:

# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all()

# SQL
# CREATE TABLE Menu_Items (
#     item_id SERIAL PRIMARY KEY,
#     item_name VARCHAR(30) NOT NULL,
#     item_price SMALLINT DEFAULT 0
# );

# menu_item.py
# import psycopg2

# class MenuItem:
#     def __init__(self, name, price):
#         self.name = name
#         self.price = price
    
#     def save(self):
#        
#         conn = psycopg2.connect(
#             dbname='Bootcamp',
#             user='postgres',
#             password='0501',
#             host='localhost',
#             port='5432'
#         )
#         cursor = conn.cursor()
#         cursor.execute(
#             "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",
#             (self.name, self.price)
#         )
#         conn.commit()
#         cursor.close()
#         conn.close()
    
#     def delete(self):
#       
#         conn = psycopg2.connect(
#             dbname='Bootcamp',
#             user='postgres',
#             password='0501',
#             host='localhost',
#             port='5432'
#         )
#         cursor = conn.cursor()
#         cursor.execute(
#             "DELETE FROM Menu_Items WHERE item_name = %s",
#             (self.name,)
#         )
#         conn.commit()
#         cursor.close()
#         conn.close()
    
#     def update(self, new_name=None, new_price=None):
#        
#         conn = psycopg2.connect(
#             dbname='Bootcamp',
#             user='postgres',
#             password='0501',
#             host='localhost',
#             port='5432'
#         )
#         cursor = conn.cursor()
#         if new_name:
#             cursor.execute(
#                 "UPDATE Menu_Items SET item_name = %s WHERE item_name = %s",
#                 (new_name, self.name)
#             )
#         if new_price is not None:
#             cursor.execute(
#                 "UPDATE Menu_Items SET item_price = %s WHERE item_name = %s",
#                 (new_price, self.name)
#             )
#         conn.commit()
#         cursor.close()
#         conn.close()
#         self.name = new_name if new_name else self.name
#         self.price = new_price if new_price is not None else self.price

# menu_manager.py

# import psycopg2

# class MenuManager:
#     @classmethod
#     def get_by_name(cls, name):
#         conn = psycopg2.connect(
#             dbname='Bootcamp',
#             user='postgres',
#             password='0501',
#             host='localhost',
#             port='5432'
#         )
#         cursor = conn.cursor()
#         cursor.execute(
#             "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s",
#             (name,)
#         )
#         result = cursor.fetchone()
#         cursor.close()
#         conn.close()
#         if result:
#             return {'name': result[0], 'price': result[1]}
#         return None
    
#     @classmethod
#     def all_items(cls):
#         conn = psycopg2.connect(
#             dbname='bootcamp',
#             user='postgres',
#             password='0501',
#             host='localhost',
#             port='5432'
#         )
#         cursor = conn.cursor()
#         cursor.execute("SELECT item_name, item_price FROM Menu_Items")
#         results = cursor.fetchall()
#         cursor.close()
#         conn.close()
#         return [{'name': row[0], 'price': row[1]} for row in results]
    
# item = MenuItem(name='Burger', price=35)
# item.save()

# item.update(new_name='Veggie Burger', new_price=37)

# item.delete()

# manager = MenuManager()
# items = manager.all_items()
# print(items)

# item = manager.get_by_name('Veggie Burger')
# print(item)



# Part 2
# Create a file called menu_editor.py , which will have the following functions:
# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.

# add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# show_restaurant_menu() - print the restaurant’s menu.

# When the user chooses to exit the program, display the restaurant menu and exit the program.


# menu_editor.py

# from menu_item import MenuItem
# from menu_manager import MenuManager

# def show_user_menu():
   
#     while True:
#         print("\n--- Restaurant Menu Manager ---")
#         print("V - View an Item")
#         print("A - Add an Item")
#         print("D - Delete an Item")
#         print("U - Update an Item")
#         print("S - Show the Menu")
#         print("E - Exit")
        
#         choice = input(" choose option: ").strip().upper()
        
#         if choice == 'V':
#             view_item()
#         elif choice == 'A':
#             add_item_to_menu()
#         elif choice == 'D':
#             remove_item_from_menu()
#         elif choice == 'U':
#             update_item_from_menu()
#         elif choice == 'S':
#             show_restaurant_menu()
#         elif choice == 'E':
#             print("Exiting the program...")
#             show_restaurant_menu()
#             break
#         else:
#             print("Invalid option. Please try again.")

# def add_item_to_menu():
    
#     name = input("Enter name of item: ").strip()
#     price = int(input("Enter price of item: ").strip())
#     item = MenuItem(name, price)
#     item.save()
#     print(f"Item '{name}' was added successfully.")

# def remove_item_from_menu():
   
#     name = input("name of the item to remove: ").strip()
#     item = MenuItem(name, 0) 
#     print(f"Item '{name}'  deleted.")

# def update_item_from_menu():
    
#     name = input("name of the item to update: ").strip()
#     new_name = input("new name of the item (or  Enter to not change): ").strip()
#     new_price_input = input("new price of the item ( press Entertokeep the same): ").strip()
    
#     new_price = int(new_price_input) if new_price_input else None
#     item = MenuItem(name, 0)  
#     try:
#         item.update(new_name or None, new_price)
#         print(f"Item '{name}' updated.")
#     except Exception as e:
#         print(f"Error updating item: {e}")

# def show_restaurant_menu():

#     items = MenuManager.all_items()
#     print("\n--- Restaurant Menu ---")
#     if not items:
#         print("No items available.")
#     else:
#         for item in items:
#             print(f"Name: {item['name']}, Price: {item['price']}")
#     print()

# if __name__ == "__main__":
#     show_user_menu()


