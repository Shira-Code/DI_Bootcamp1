#removing from dictionaries

a_dict = {"a": 1, "b": 2, "c": 3}

number = a_dict.pop("c")    #pop in dic similar to pop in lists, removed "c and returns its value (3)"
                            #can store the value in a variable
print(number)

last_item = a_dict.popitem() # removes last added item and returns it as a tuple (key, value)

print(last_item)

print(a_dict)

del a_dict['a'] #deletes specidied key and value doesn't return anything

print(a_dict)
      
