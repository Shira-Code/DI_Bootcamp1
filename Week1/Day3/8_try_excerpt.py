numbers =[]

while True: #run infinitely
    user_input = input("please enter a number: ").strip()

    #use try-except clause to handle errors/exceptions
    if user_input == "q":
        break
    try:
        number = int(user_input)
        numbers.append(number)
        print(f"user's number is {number}")
    except ValueError:
        print("invalid input try again")


print("program is fiished")
print(numbers)

#yossi's code:
# numbers = []

# while True:
#     user_input = input("Please provide a number: ").strip()

#     # use try-except clause to handle Errors/Exceptions
#     if user_input == "Q":
#         break
#     try:
#         number = int(user_input)
#         numbers.append(number)
#         print(f"User's input numbers is: {number}")
#     except ValueError:
#         print("Invalid Input try again")

# print("Program is finished")
# print(numbers)