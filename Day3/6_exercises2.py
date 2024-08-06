# Exercise
# Delete set of keys from Python Dictionary

# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"

# }
# keys_to_remove = ["name", "salary"]


# Expected output:

# {'city': 'New york', 'age': 25}

sample_dict = {
    "name": "Kelly",
    "age":25,
    "salary": 8000,
    "city": "New york"

}
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    if key in sample_dict:
       # del sample_dict[key] #deletes the key completely
        sample_dict.pop(key) #pop returns the value you removed

print(sample_dict)  