# What you will learn
# Dunder Methods
# Modules


# 🌟 Exercise 1: Currencies
# Instructions
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
       
#         return f"{self.amount} {self.currency}{'s' if self.amount != 1 else ''}"

#     def __repr__(self):
       
#         return f"{self.amount} {self.currency}"

#     def __int__(self):
        
#         return self.amount

#     def __add__(self, other):
        
#         if isinstance(other, int):
#             return Currency(self.currency, self.amount + other)
#         elif isinstance(other, Currency):
#             if self.currency == other.currency:
#                 return Currency(self.currency, self.amount + other.amount)
#             else:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#         else:
#             raise TypeError(f"Unsupported type for addition: {type(other)}")

#     def __iadd__(self, other):
#         # Allow in-place addition with integers and other Currency objects
#         if isinstance(other, int):
#             self.amount += other
#         elif isinstance(other, Currency):
#             if self.currency == other.currency:
#                 self.amount += other.amount
#             else:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#         else:
#             raise TypeError(f"Unsupported type for addition: {type(other)}")
#         return self


# if __name__ == "__main__":
#     c1 = Currency('dollar', 5)
#     c2 = Currency('dollar', 10)
#     c3 = Currency('shekel', 1)
#     c4 = Currency('shekel', 10)

#     print(str(c1))       # '5 dollars'
#     print(int(c1))       # 5
#     print(repr(c1))      # '5 dollars'
    
#     print(c1 + 5)        # '10 dollars'
#     print(c1 + c2)       # '15 dollars'
    
#     c1 += 5
#     print(c1)            # '10 dollars'
    
#     c1 += c2
#     print(c1)            # '20 dollars'
    
#     try:
#         print(c1 + c3)  # Should raise a TypeError
#     except TypeError as e:
#         print(e)        

# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that sum 2 numbers, and prints the result
# In a file named exercise_one.py import the function and call it to print the result
# Hint: You can use the the following syntaxes:

# import module_name 

# OR 

# from module_name import function_name 

# OR 

# from module_name import function_name as fn 

# OR

# import module_name as mn

# func.py file

# def sum_and_print(a, b):
  
#     result = a + b
#     print(f"The sum of {a} and {b} is {result}")

# # exercise_one.py file

# import func
# func.sum_and_print(3, 5)
# from func import sum_and_print
# sum_and_print(3, 5)
# from func import sum_and_print as fn
# fn(3, 5)
# import func as mn
# mn.sum_and_print(3, 5)



# 🌟 Exercise 3: String module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module
# import random
# import string

# def generate_random_str(length=5):
  
#     letters = string.ascii_letters

#     random_str = ''.join(random.choices(letters, k=length))

#     return random_str


# random_str = generate_random_str()
# print("Random String:", random_str)


# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

# from datetime import datetime

# def display_current_date():
    
#     now = datetime.now()

#     # Format the date to a readable format
#     formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")

#     # Print the current date
#     print("Current date and time:", formatted_date)

# # Example usage
# if __name__ == "__main__":
#     display_current_date()

# Exercise 5 : Amount of time left until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

# from datetime import datetime, timedelta

# def time_until_january_first():
   
#     now = datetime.now()
    
#     # Determine the year for the next January 1st
#     if now.month == 12 and now.day > 31:
#         next_year = now.year + 1
#     else:
#         next_year = now.year

#     january_first = datetime(next_year, 1, 1)

#     time_left = january_first - now

#     days = time_left.days
#     hours, remainder = divmod(time_left.seconds, 3600)
#     minutes, seconds = divmod(remainder, 60)

#     print(f"the 1st of January is in: {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds")

# if __name__ == "__main__":
#     time_until_january_first()

# Exercise 6 : Birthday and minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

# from datetime import datetime

# def calculate_minutes_lived(birthdate_str, date_format="%Y-%m-%d"):
    
#     try:
       
#         birthdate = datetime.strptime(birthdate_str, date_format)
        
#         now = datetime.now()
        
#         time_lived = now - birthdate
      
#         minutes_lived = int(time_lived.total_seconds() / 60)
        
        
#         print(f"You have lived for {minutes_lived} minutes.")
    
#     except ValueError as e:
#         print(f"Error: {e}. Please use the format '{date_format}' for the birthdate.")


# if __name__ == "__main__":

#     birthdate_input = "1942-10-10"
#     calculate_minutes_lived(birthdate_input)

# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker
fake = Faker()
users = []

def add_fake_user():

    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    

    users.append(user)


if __name__ == "__main__":
    
    for _ in range(5):
        add_fake_user()
    
    
    for user in users:
        print(user)