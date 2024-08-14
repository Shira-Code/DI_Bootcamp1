# Exercise 5 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
# Add a method called incredible_presentation which :
# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ]
# Call the incredible_presentation method.
# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
# Call the incredible_presentation method again.


class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)
    
    def use_power(self, name, age, gender, is_child, power, incredible_name):
        if age > 18:
            print(f"{name} has {power}!")
        else:
            raise Exception(f"{name} is not over 18 years old.")

    def incredible_presentation(self):
        for member in self.members:
            print(f"{member['name']} is {member['age']} years old.")
        print(f"The {self.last_name} family has {len(self.members)} members.")

    def born(self, name, age, gender, is_child, power, incredible_name):
        self.members.append({'name': name, 'age': age, 'gender': gender, 'is_child': is_child, 'power': power, 'incredible_name': incredible_name})
        print(f"{name} was born in the family!")
        print(f"Contratulations, {name} was born!")

the_family = TheIncredibles(last_name="Incredibles", members=[])
the_family.born(name="Michael", age=35, gender="Male", is_child=False, power="fly", incredible_name="MikeFly")
the_family.born(name="Sarah", age=32, gender="Female", is_child=False, power="read minds", incredible_name="SuperWoman")
the_family.incredible_presentation()



    