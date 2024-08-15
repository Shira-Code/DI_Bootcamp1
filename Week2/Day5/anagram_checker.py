# Create a new file called anagram_checker.py which contains a class called AnagramChecker.
#
# The class should have the following methods:
# __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
# is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.

# get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)

# Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.

# Note: None of the methods in the class should print anything.

class AnagramChecker:
    def __init__(self, word_list_file: str):
        """Initializes the AnagramChecker with a word list from the given file."""
        self.word_list = set()
        self.load_word_list(word_list_file)

    def load_word_list(self, filename: str) -> None:
        """Loads words from the specified file into a set."""
        try:
            with open(filename, 'r') as file:
                self.word_list = set(line.strip().lower() for line in file)
        except FileNotFoundError:
            raise FileNotFoundError(f"The file {filename} was not found.")
        except IOError:
            raise IOError(f"Error reading the file {filename}.")

    def is_valid_word(self, word: str) -> bool:
        """Checks if the given word is in the word list."""
        return word.lower() in self.word_list

    def get_anagrams(self, word: str) -> list[str]:
        """Finds all anagrams of the given word from the word list."""
        word = word.lower()
        anagrams = [w for w in self.word_list if self.is_anagram(word, w) and w != word]
        return sorted(anagrams)

    def is_anagram(self, word1: str, word2: str) -> bool:
        """Checks if two words are anagrams."""
        return sorted(word1.lower()) == sorted(word2.lower())