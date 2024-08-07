# <!-- 🌟 Exercise 1 : Favorite Numbers
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers. -->

my_fav_numbers = {8, 88, 888}

print(my_fav_numbers)

my_fav_numbers.update({99, 999})

print(my_fav_numbers)

my_fav_numbers.remove(999)   

print(my_fav_numbers)

friend_fav_numbers = {4, 44, 444}

print(friend_fav_numbers)

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)






# 🌟 Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
#Answer:  NO, tuples are immutable, can't be modified and will lead to error.


# 🌟 Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

list_basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(list_basket)

list_basket.remove("Banana")
print(list_basket)

list_basket.remove("Blueberries")
print(list_basket)

list_basket.append("Kiwi")
print(list_basket)

list_basket.insert(0, "Apples")
print(list_basket)

print("number of items in basket:  ",len(list_basket))

list_basket.clear()
print("contents of basket after being cleared:  ",list_basket)



# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
#ANSWER: A FLOAT IS A DECIMAL NUMBER, AN INTEGER IS A WHOLE NUMBER
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?

a_list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

print(a_list)

import random

def random_floats(n):
    seq = []
    for i in range(n):
        seq.append(random.random())
    return seq
seq = random_floats(8)
print(seq)




# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.


table = range(1, 21)

for i in table:
    print("all numbers:  ",i)

for i in table:
    if i % 2 == 0:
        print("all even numbers:  ",i)

   






# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
input_name = input("Enter your name (hint: Shira):  ")

while input_name != "Shira":
    input_name = input("Nope! Keep Trying! Enter your name (hint: Shira):  ")

print("Hello Shira")

# 🌟 Exercise 7: Favorite fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

input_favorite_fruits = input("Enter your favorite fruit(s) (one or several fruits) and sparate with space eg 'apple mango cherry':  ")

fruit_list = input_favorite_fruits.split(" ")
print(fruit_list)

input_user_fruit = input("Enter a name of any fruit:  ")  
if input_user_fruit in fruit_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")  


# Exercise 8: Who ordered a pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

input_pizza_toppings = True
list_pizza_toppings = []
total_price_pizza = 10

while input_pizza_toppings != "quit":
    input_pizza_toppings = input("Enter the pizza toppings (Enter 'quit' to stop):  ") 
    
    total_price_pizza += 2.5
    print("Adding " + input_pizza_toppings + " to your pizza")
    print("Total price is:  " + str(total_price_pizza))
    list_pizza_toppings.append(input_pizza_toppings)

print("Your pizza toppings are:  " + str(list_pizza_toppings))
print("Total price is:  " + str(total_price_pizza))



        
     

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.


input_age = True
list_age = []
total_price = 0

while input_age != "quit":

    input_age = int(input("Enter the age of the person (Enter 'quit' to stop):  "))
        
    if input_age < 3 and input_age > 0:
        print("Ticket is free")
        total_price += 0

    elif input_age >= 3 and input_age <= 12:
        print("Ticket is $10")
        total_price += 10

    elif input_age > 12:
        print("Ticket is $15")
        total_price += 15
    
    elif input_age == "quit":
        break   
    
        print("Total price is:  " + str(total_price))



# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

list_names = ["Shira", "Bob", "Max", "Pippa", "Susie"]

for name in list_names:
    input_age = int(input("Enter the age of " + name + " (Enter 'quit' to stop):  "))

    if input_age < 16 or input_age > 21:
        list_names.remove(name)
print("The list of names after removing the ones not allowed:  " + str(list_names))

# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich


sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print(sandwich_orders)

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop()
    print("I made your " + current_sandwich)
    finished_sandwiches.append(current_sandwich)    
