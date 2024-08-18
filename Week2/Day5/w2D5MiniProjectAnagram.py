# # We will create a program that will ask the user for a word.
# # It will check if the word is a valid English word, and then find all possible anagrams for that word.
# # Instruction
# # First Download this text file : right click –> Save As
# # Create a new file called anagram_checker.py which contains a class called AnagramChecker.
# # The class should have the following methods:
# # __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
# # is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
# # get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)
# # Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.
# # Note: None of the methods in the class should print anything.
# # Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.
# # It should do the following:
# # Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.
# # If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
# # Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
# # Only alphabetic characters are allowed. No numbers or special characters.
# # Whitespace should be removed from the start and end of the user’s input.
# # Once your code has decided that the user’s input is valid, it should find out the following:
# # All possible anagrams to the user’s word.
# # Create an AnagramChecker instance and apply it to the steps created above.
# # Display the information about the word in a user-friendly, nicely-formatted message such as:
# # YOUR WORD :”MEAT”
# # this is a valid English word.
# # Anagrams for your word: mate, tame, team.

# #FILE ANAGRAMSCHECKER.PY

# class AnagramChecker:
#     def __init__(self, word_list_file: str):
#        
#         self.word_list = set()
#         self.load_word_list(word_list_file)

#     def load_word_list(self, filename: str) -> None:
#        
#         try:
#             with open(filename, 'r') as file:
#                 self.word_list = set(line.strip().lower() for line in file)
#         except FileNotFoundError:
#             raise FileNotFoundError(f"The file {filename} was not found.")
#         except IOError:
#             raise IOError(f"Error reading the file {filename}.")

#     def is_valid_word(self, word: str) -> bool:
#         
#         return word.lower() in self.word_list

#     def get_anagrams(self, word: str) -> list[str]:
#       
#         word = word.lower()
#         anagrams = [w for w in self.word_list if self.is_anagram(word, w) and w != word]
#         return sorted(anagrams)

#     def is_anagram(self, word1: str, word2: str) -> bool:
#        
#         return sorted(word1.lower()) == sorted(word2.lower())
    

# FILE ANAGRAMS.PY

#     import re
# from anagram_checker import AnagramChecker

# def main():
#     print("Welcome to the Anagram Checker!")
#     print("Loading word list...")
    
#     checker = AnagramChecker('word_list.txt')  

#     while True:
#         print("\nMenu:")
#         print("1. Check for anagrams")
#         print("2. Exit")
        
#         choice = input("Enter your choice (1 or 2): ").strip()

#         if choice == '2':
#             print("Exiting the program. Goodbye!")
#             break
#         elif choice == '1':
#             user_input = input("Enter a word: ").strip()

#         
#             if not user_input.isalpha():
#                 print("Error: Only alphabetic characters are allowed.")
#                 continue

#             if len(user_input.split()) > 1:
#                 print("Error: Only a single word is allowed.")
#                 continue

#            
#             if checker.is_valid_word(user_input):
#                 anagrams = checker.get_anagrams(user_input)
#                 print(f"\nYOUR WORD: \"{user_input}\"")
#                 print("This is a valid English word.")
#                 if anagrams:
#                     print(f"Anagrams for your word: {', '.join(anagrams)}.")
#                 else:
#                     print("No anagrams found.")
#             else:
#                 print(f"\nYOUR WORD: \"{user_input}\"")
#                 print("This is not a valid English word.")
#         else:
#             print("Invalid choice. Please select 1 or 2.")

# if __name__ == "__main__":
#     main()