#What we will learn:
# Python Basics
# Conditionals
# Loops
# Functions


# Exercise 1 : What are you learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

# 🌟///////////////Shira's code exercise 1 starts here/////////////////

# full_stack_curriculum = "python, html, css, sql, js, and everything else for full stack development"
# def display_message():
#     return  print("I am learning " + full_stack_curriculum)

# display_message()

# 🌟////////////Shira's code exercise 1 ends here////////////////////




# Exercise 2: What’s your favorite book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.
 
# 🌟🌟///////////////Shira's code exercise 2 starts here/////////////////
# def favorite_book(title):
#     return print("One of my favorite books is " + title)

# favorite_book("Alice in Wonderland")

# 🌟🌟////////////Shira's code exercise 2 ends here////////////////////



# Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

# 🌟🌟🌟///////////////Shira's code exercise 3 starts here/////////////////

# def describe_city(city, country="Iceland"):
#     return print(city + " is in " + country)

# describe_city("Reykjavik")

# describe_city("Berlin")

# describe_city("Paris", "France")

# describe_city("London", "England")


# 🌟🌟🌟////////////Shira's code exercise 3 ends here////////////////////



# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

# 🌟🌟🌟🌟 ///////////////Shira's code exercise 4 starts here/////////////////

# import random

# def random_number():
#     return random.randint(1, 100)
# def user_number():
#     return int(input("Enter a number between 1 and 100: "))
# def compare_numbers(num1, num2):
#     if num1 == num2:
#         return print("num1 and num2 match", num1, num2)
#     else:
#         return print("num1 and num2 do not match", num1, num2)
    

# num1 = user_number()
# num2 = random_number()
# compare_numbers(num1, num2)

# 🌟🌟🌟🌟///////////////Shira's code exercise 4 ends here/////////////////





# Exercise 5 : Let’s create some personalized shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().



# 🌟🌟🌟🌟🌟///////////////Shira's code exercise 5 part A starts here/////////////////

# def make_shirt():

#     user_input_shirt_size = input("Enter the size of the shirt: ")
#     user_input_shirt_text = input("Enter the text you want printed on the shirt: ")

#     return print("The size of the shirt is:  ",user_input_shirt_size + "  and the text is:  ",user_input_shirt_text)

# make_shirt()

# 🌟🌟🌟🌟🌟///////////////Shira's code exercise 5 part A ends here/////////////////

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.

# 🌟🌟🌟🌟🌟///////////////Shira's code exercise 5 part B starts here/////////////////

# def make_shirt(size, message):
#     
#     print(f"Shirt size: {size}")
#     print(f"Message: {message}")

# # Call the function using keyword arguments
# make_shirt(size="large", message="I love Python")

# make_shirt("medium", "I love Python")

# make_shirt(message="I love Python", size="small")

# 🌟🌟🌟🌟🌟///////////////Shira's code exercise 5 part B ends here/////////////////

# Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

# 🌟🌟🌟🌟🌟🌟///////////////Shira's code exercise 6 starts here/////////////////

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians():
#     for name in magician_names:
#         print(name)

# def make_great():
#     for name in magician_names:
#         print(f"{name} the Great")  

# show_magicians()    
# make_great()


# 🌟🌟🌟🌟🌟🌟///////////////Shira's code exercise 6 ends here/////////////////

#  Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# import random
# def get_random_temp():
#     return random.randint(-10, 40)

#print("random temp in Celcius: ", get_random_temp())

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”



# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40


# import random
# def get_random_temp():
#     return random.randint(-10, 40)

# def main():
#     temp = get_random_temp()
#     if temp < 0:
#         print("Brrr, that's freezing! Wear some extra layers today, it's", temp, "degrees Celsius.")
#     elif temp >= 0 and temp <= 16:
#         print("Quite cold! Don't forget your coat, it's", temp, "degrees Celsius.")
#     elif temp >= 16 and temp <= 23:
#         print("Nice weather today!, it's", temp, "degrees Celsius.")
#     elif temp >= 24 and temp <= 32:
#         print("A nice day for a walk, it's", temp, "degrees Celsius.")
#     elif temp >= 32 and temp <= 40:
#         print("Life's a beach! It's", temp, "degrees Celsius.")
    

# main()


# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# import random
# def get_random_temp():
#     return random.randint(-10, 40)

# def main():
    
#     user_season_input = input("Enter the season(summer, winter, spring, fall): ") 
    

#     if user_season_input == 'summer':
#         season = 'summer', 
#         temp = get_random_temp(),
#         return random.randint(32, 40),
#         print("Nice weather today!, it's", temp, "degrees Celsius.")
#     elif user_season_input == 'winter':
#         season = 'winter'
#         return random.randint(-10, 16)
#         print("Brrr, that's freezing! Wear some extra layers today, it's", temp, "degrees Celsius.")
#     elif user_season_input == 'spring':
#         season = 'spring'
#         return random.randint(24, 32)
#         print("A nice day for a walk, it's", temp, "degrees Celsius.")
#     elif user_season_input == 'fall':
#         season = 'fall',
#         return random.randint(16, 24)
#         print("Nice weather today!, it's", temp, "degrees Celsius.")

# main()


# import random
# def get_random_temp():
#     return random.randint(-10, 40)

# def main():
#     # temp = get_random_temp()
#     # if temp < 0:
#     #     season = 'winter'
#     #     print("Brrr, that's freezing! Wear some extra layers today, it's", temp, "degrees Celsius.")
#     # elif temp >= 0 and temp <= 16:
#     #     season = 'winter'
#     #     print("Quite cold! Don't forget your coat, it's", temp, "degrees Celsius.")
#     # elif temp >= 16 and temp <= 23:
#     #     season = 'fall'
#     #     print("Nice weather today!, it's", temp, "degrees Celsius.")
#     # elif temp >= 24 and temp <= 32:
#     #     season = 'spring'
#     #     print("A nice day for a walk, it's", temp, "degrees Celsius.")
#     # elif temp >= 32 and temp <= 40:
#     #     season = 'summer'
#     #     print("Life's a beach! It's", temp, "degrees Celsius.")


# main()
    
    
# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

# ///////////////Shira's code exercise 7 starts here/////////////////


# ///////////////Shira's code exercise 7 ends here/////////////////


# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.


# ///////////////Shira's code exercise 7 starts here/////////////////

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

# correct_answers = 0
# wrong_answers = 0

# def ask_question(question, answer):
    
#     global correct_answers
#     global wrong_answers
#     user_answer = input(question + " ")
    
#     if user_answer.lower() == answer.lower():
#         print("Correct!")
#         correct_answers += 1
#     else:
#         print("Wrong!")
#         wrong_answers += 1
#         print("The correct answer is:", answer)


# for question in data:
#     ask_question(question["question"], question["answer"])
# if correct_answers >= 3:
#     print("You have answered", wrong_answers, "wrong answers. Please play again.")
# else:
#     print("You got", correct_answers, "correct answers and", wrong_answers, "wrong answers.")

# ///////////////Shira's code exercise 7 ends here/////////////////