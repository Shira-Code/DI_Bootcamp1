from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
   
    while True:
        print("\n--- Restaurant Menu Manager ---")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")
        
        choice = input("Please choose an option: ").strip().upper()
        
        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("Exiting the program...")
            show_restaurant_menu()
            break
        else:
            print("Invalid option. Please try again.")

def add_item_to_menu():
    
    name = input("Enter the name of the item: ").strip()
    price = int(input("Enter the price of the item: ").strip())
    item = MenuItem(name, price)
    item.save()
    print(f"Item '{name}' was added successfully.")

def remove_item_from_menu():
   
    name = input("Enter the name of the item to remove: ").strip()
    item = MenuItem(name, 0) 
    print(f"Item '{name}' was deleted successfully.")

def update_item_from_menu():
    
    name = input("Enter the name of the item to update: ").strip()
    new_name = input("Enter the new name of the item (or press Enter to keep the same): ").strip()
    new_price_input = input("Enter the new price of the item (or press Enter to keep the same): ").strip()
    
    new_price = int(new_price_input) if new_price_input else None
    item = MenuItem(name, 0)  
    try:
        item.update(new_name or None, new_price)
        print(f"Item '{name}' was updated successfully.")
    except Exception as e:
        print(f"Error updating item: {e}")

def show_restaurant_menu():

    items = MenuManager.all_items()
    print("\n--- Restaurant Menu ---")
    if not items:
        print("No items available.")
    else:
        for item in items:
            print(f"Name: {item['name']}, Price: {item['price']}")
    print()

if __name__ == "__main__":
    show_user_menu()