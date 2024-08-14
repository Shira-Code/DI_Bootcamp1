# Regular Expression or **RegEx** is a sequence of characters that forms a search pattern. RegEx is used to search for and replace specific patterns.

# Python provides a built-in module, re, which supports regular expressions. The module can be imported as follows:

# import re


# Metacharacters
# Metacharacters are characters which are interpreted in a particular way. The following table lists down all the metacharacters used in RegEx, along with their functionality:





# Special sequences
# Special sequences are a \ followed by any one of the following characters, based on their particular functionality:





# RegEx functions
# The re module provides users a variety of functions to search for a pattern in a particular string. Below are some of the most frequently used functions in detail:



# 1. re.findall()
# The re.findall() function returns a list of strings containing all matches of the specified pattern.

# The function takes as input the following:

# a character pattern
# the string from which to search
# Example

# The following example will return a list of all the instances of the substring at in the given string:

# import re

# string = "at what time?"
# match = re.findall('at',string)
# print (match)


# 2. re.search()
# The re.search() function returns a match object in case a match is found.

# Note: * In case of more than one match, the first occurrence of the match is returned. * If no occurrence is found, None is returned.



# Example
# Suppose you wish to look for the occurrence of a particular sub-string in a string:

# StringFound

# import re

# string = "at what time?"
# match = re.search('at',string)
# if (match):
#     print "String found at: " ,match.start()
# else:
#     print "String not found!"
# StringNotFound

# import re

# string = "at what time?"
# match = re.search('of',string)
# if (match):
#     print "String found at: " ,match.start()
# else:
#     print "String not found!"
# Note: The start() function returns the start index of the matched string.



# 3. re.split()
# The re.split() function splits the string at every occurrence of the sub-string and returns a list of strings which have been split.

# Consider the following example to get a better idea of what this function does:

# Example

# Suppose we wish to split a string wherever there is an occurrence of a

# import re

# string = "at what time?"
# match = re.split('a',string)
# print (match)
# Note: In case there is no match, the string will be returned as it is, in a list.



# 4. re.sub()
# The re.sub() function is used to replace occurrences of a particular sub-string with another sub-string.

# This function takes as input the following:

# The sub-string to replace
# The sub-string to replace with
# The actual string
# Example

# Suppose you wish to insert !!! instead of a white-space character in a string. This can be done via the re.sub() function as follows:

# import re

# string = "at what time?"
# match = re.sub("\s","!!!",string)
# print (match)