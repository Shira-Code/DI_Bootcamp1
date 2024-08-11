#dictionary stores key and value pairs
# "dog"[KEY] - "man's best friend"[VALUE]
#DICTIONARIES dont have index, they use keys instead

a_dict = {"Dog": "man's best friend", #empty {} will automatically create a dictionary
          1: 1022,
          (1,2,3): "a",
          "details": [1,2,3],}
          #key       #value

#access, modify, delete

#ACCESS
#value can be any type of data
#strings are immutable
#the key must be immutable (int, float, tuple, string) - not changeable
print(a_dict["Dog"]) #gets value of dog
print(a_dict["details"])

print(a_dict.keys()) # only keys
print(a_dict.values())  #only vlaues

for key in a_dict: #looping through the d's keys
    print(key)
    print(a_dict[key])

for value in a_dict.values():  #looping through the d's values
    print(value)

b_dict = {
    "a": 10,
    "b": 20,
}

print(b_dict)

c_dict = {"a": 10, "b": 20,} #dictionaries have singel unique keys (no duplicates)

print(c_dict)

#looping through the keys and values simultaneously
for key, value in a_dict.items():
    print(f"key: {key}, value: {value}")