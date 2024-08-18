# What You will learn :
# OOP
# Modules


# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.



# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.
# class Text:
#     def __init__(self, text):
       
#         self.text = text
#         self.words = self._process_text()

#     def _process_text(self):
        
#         return self.text.lower().split()

#     def word_frequency(self, word):
     
#         if not word:
#             return None
        
#         word = word.lower()
#         return self.words.count(word)

#     def most_common_word(self):
        
#         if not self.words:
#             return None


#         word_count = {}
#         for word in self.words:
#             if word in word_count:
#                 word_count[word] += 1
#             else:
#                 word_count[word] = 1
        
#         most_common = max(word_count, key=word_count.get)
#         return most_common

#     def unique_words(self):
       
#         return list(set(self.words))



# text = "A good book would sometimes cost as much as a good house."
# analyzer = Text(text)
# print("Frequency of 'good':", analyzer.word_frequency("good"))
# print("Most common word:", analyzer.most_common_word())
# print("Unique words:", analyzer.unique_words())


# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.
# Implement a classmethod that returns a Text instance but with a text file:
#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.
# Now, use the provided the_stranger.txt file and try using the class you created above.
# Bonus:
# Create a class called TextModification that inherits from Text.
# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)



# class TextModification(Text):

#     def __init__(self, text):
#         self.text = text

#     def remove_punctuation(self):
#          import re
#          return re.sub(r'[^\w\s]','',self.text)

#     def remove_stopwords(self):
#         from nltk.corpus import stopwords
#         stop_words = set(stopwords.words('english'))
#         return ' '.join([word for word in self.text.split() if word.lower() not in stop_words])
    
    
#     def remove_special_chars(self):
#          import re
#          return re.sub(r'[^a-zA-Z0-9\s]','',self.text)
    
#     def __str__(self):
#          return self.text
    
# import nltk
# nltk.download('stopwords')
# my_file = open('the_stranger.txt', 'r')
# my_text = my_file.read()
# my_text_mod = TextModification(my_text)
# #print("START CAMUS TEXT NO PUNC: ",my_text_mod.remove_punctuation())
# #print("START CAMUS TEXT NO STOPWORDS#: ",my_text_mod.remove_stopwords())
# print("START CAMUS TEXT NO SPECIAL CHAR: ",my_text_mod.remove_special_chars())
# my_file.close()
# # print(my_text_mod.remove_stopwords())
# # print(my_text_mod.remove_special_chars())



# # my_file = open('the_stranger.txt')
# # my_file.seek(196600)
# # print("first attempt read seek 196600: ",my_file.read())
# # my_file.seek(196600)
# # print("second attempt readlines seek 196600: ",my_file.readlines())  
# # my_file.seek(196600)
# # print("third attempt readline seek 196600: ",my_file.readline()) 
# # my_file.close()     
# # data = my_file.read()
# # print(data)