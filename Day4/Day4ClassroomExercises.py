# Exercise
# octupus: https://octopus.developers.institute/courses/collection/111/course/469/section/1212/chapter/261# 
# Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

# For example:

# def calculation(a, b):
#     # Your Code

# res = calculation(40, 10)
# print(res)

def calculation(a, b):
   # return a + b, a - b #each function can return multiple values only 1 time
    add = a + b
    sub = a - b
    return add, sub #python creates tuple containing both values

add, sub = calculation(40, 10) #extracting value from tuple 
print(add, sub) #not a tuple
res = calculation(40, 10)
print(calculation(40, 10))
print("tuple", res) #tuple
