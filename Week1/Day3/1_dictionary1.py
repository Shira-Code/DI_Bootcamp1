#modifying dictiionaryies

a_dict = {}

# adding to dict

a_dict["address"] = "tel aviv"
            #key        #value

print(a_dict)

age = 20

a_dict["age"] = age

print(a_dict)

new_key = 100
new_value = 2000

a_dict[new_key] = new_value

print(a_dict)

#adding to an existing key

a_dict["age"] = 40 #will overwrite the value

print(a_dict)

a_dict["Numbers"] = [1,2,3,4,5]

numbers = a_dict["Numbers"] #numbers are a reference to the value inside the "numbers" key
                            #numbers are not a copy, but are the actual value
    

print(numbers)

numbers[0] = 100
numbers[-1] = "BBB"
print(numbers)
print(a_dict)

numbers_copy = a_dict["Numbers"].copy()

numbers_copy[0] = 8888889993849

print(numbers_copy)  
print(a_dict)   