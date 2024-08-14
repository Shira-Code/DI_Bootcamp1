# What you will learn
# Working with files
# 🌟 Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.
# Hint : The generated sentences do not have to make sense.
# Download this word list
# Save it in your development directory.
# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?
# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.
# Take the random words and create a sentence (using a python method), the sentence should be lower case.
# Create a function called main which will:
# Print a message explaining what the program does.
# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.


import random

def get_words_from_file(filename: str) -> list[str]:
    """Reads words from a file and returns them as a list."""
    with open(filename, 'r') as file:
        words = [line.strip() for line in file if line.strip()]
    return words

def get_random_sentence(words: list[str], length: int) -> str:
    """Generates a random sentence with the given length using the words list."""
    if length < 2:
        raise ValueError("Sentence length should be at least 2.")
    if length > 20:
        raise ValueError("Sentence length should not exceed 20.")
    
    random_words = random.sample(words, length)  # Get 'length' random words
    sentence = ' '.join(random_words)  # Join words into a sentence
    return sentence.lower()

def main():
    print("Welcome to the Random Sentence Generator!")
    print("This program generates a random sentence from a list of words.")

    # Get user input
    try:
        length = int(input("How long do you want the sentence to be? (2-20): "))
        if length < 2 or length > 20:
            raise ValueError("The length must be between 2 and 20.")
    except ValueError as e:
        print(f"Error: {e}")
        return

    # File containing the list of words
    filename = 'sowpods.txt'  # Make sure 'words.txt' is in your development directory

    # Get words from file
    words = get_words_from_file(filename)

    # Generate and print the random sentence
    sentence = get_random_sentence(words, length)
    print(f"Generated Sentence: {sentence}")

# Run the main function
if __name__ == "__main__":
    main()

    






