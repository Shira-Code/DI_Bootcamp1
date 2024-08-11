
# Instructions
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.
1

input_string = input("Enter a string: ")
if len(input_string) < 10:
    print("string not long enough")
elif len(input_string) > 10:
    print("string too long")
elif len(input_string) == 10:
    print("perfect string")

# Then, print the first and last characters of the given text.
 

input_string = input("Enter a string: ")
if len(input_string) > 0:
    text = input_string
    if text:  # Check if the text is not empty
        first_char = text[0]
        last_char = text[-1]
        print(f"First character: {first_char}")
        print(f"Last character: {last_char}")
    else:
        print("The text is empty.")
 # Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld

input_string = input("Enter a string: ")
for i in range(len(input_string)):
    print(input_string[0:i+1])


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod
import random
input_string = input("Enter a string: ")

for i in range(len(input_string)):
    input_string = input_string[0:i] + random.choice(input_string) + input_string[i+1:]

print(input_string)


    

    