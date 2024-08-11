# Daily challenge: Solve the Matrix

# What You will learn :
# Python Basics
# Conditionals
# Loops
# Functions

# Instructions
# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!

# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:

# 7	i	i
# T	s	x
# h	%	?
# i		#
# s	M	
# $	a	
# #	t	%
# ^	r	!

# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string
# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.
# Using his technique, try to decode this matrix.

# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message

# Hint (if needed) : Look at the remote learning “Matrix” videos

# ///////////////Shira's code daily challenge exercise  starts here/////////////////

matrix_list = ["7ii", "Tsx", "h%?", "i #", "sM", "$a", "#t%", "^r!"]

for i in range(len(matrix_list)):
    matrix_list[i] = list(matrix_list[i])
    for j in range(len(matrix_list[i])):
        if matrix_list[i][j].isalpha():
            matrix_list[i][j] = matrix_list[i][j].lower()
        else:
            matrix_list[i][j] = " "

for i in range(len(matrix_list)):
    matrix_list[i] = "".join(matrix_list[i])

secret_message = matrix_list[0] + matrix_list[1] + matrix_list[2] + matrix_list[3] + matrix_list[4] + matrix_list[5] + matrix_list[6] + matrix_list[7]

print(secret_message)

# ///////////////Shira's code daily challenge exercise  ends here/////////////////


