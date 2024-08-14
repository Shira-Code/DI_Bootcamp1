# xercise: *Vehicle Inheritance*
#  Objective:
# Create a simple class hierarchy to manage different types of vehicles using inheritance. The exercise will focus on sharing common behavior among different vehicle types and adding specific behavior for each type.
#  Requirements:
# 1. *Base Class: Vehicle*
#    - *Attributes*:
#      - make: The manufacturer of the vehicle.
#      - model: The model of the vehicle.
#    - *Methods*:
#      - start(): Prints a message indicating that the vehicle is starting.
#      - stop(): Prints a message indicating that the vehicle is stopping.

class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def start(self):
        print("The vehicle is starting.")

    def stop(self):
        print("The vehicle is stopping.")


# 2. *Derived Class: Car*
#    - *Attributes*:
#      - Inherits all attributes from Vehicle.
#      - number_of_doors: The number of doors the car has.
#    - *Methods*:
#      - Inherits all methods from Vehicle.
#      - open_trunk(): Prints a message indicating that the trunk is being opened.

class Car(Vehicle):
    def __init__(self, make, model, number_of_doors):
        super().__init__(make, model)
        self.number_of_doors = number_of_doors

    def open_trunk(self):
        print("Opening the trunk of the " + self.make + " " + self.model + ".")


# 3. *Derived Class: Motorcycle*
#    - *Attributes*:
#      - Inherits all attributes from Vehicle.
#      - has_sidecar: A boolean indicating if the motorcycle has a sidecar.
#    - *Methods*:
#      - Inherits all methods from Vehicle.
#      - pop_wheelie(): Prints a message indicating that the motorcycle is popping a wheelie.

class Motorcycle(Vehicle):
    def __init__(self, make, model, has_sidecar):
        super().__init__(make, model)
        self.has_sidecar = has_sidecar
    if self.has_sidecar == True:
        print("The motorcycle has a sidecar.")

    def start(self):
        print("Harley-Davidson " + self.model + " is starting.")

    def pop_wheelie(self):
        print("Harley-Davidson " + self.model + " is popping a wheelie!")


# 4. Create a Car instance with the make "Toyota", model "Corolla", and 4 doors. Call the start(), open_trunk(), and stop() methods.
# Instructions:
# 1. Implement the Vehicle, Car, and Motorcycle classes according to the specifications.
# 2. Create a Car instance with the make "Toyota", model "Corolla", and 4 doors. Call the start(), open_trunk(), and stop() methods.
# 3. Create a Motorcycle instance with the make "Harley-Davidson", model "Street 750", and no sidecar. Call the start(), pop_wheelie(), and stop() methods.
# Expected Output:
# After implementing the classes and running the operations, you should see output similar to the following:
# Toyota Corolla is starting.
# Opening the trunk of the Toyota Corolla.
# Toyota Corolla is stopping.
# Harley-Davidson Street 750 is starting.
# Harley-Davidson Street 750 is popping a wheelie!
# Harley-Davidson Street 750 is stopping.

Car = Car("Toyota", "Corolla", 4)
Car.start()
Car.open_trunk()
Car.stop()

Motorcycle = Motorcycle("Harley-Davidson", "Street 750", False)
Motorcycle.start()
Motorcycle.pop_wheelie()
Motorcycle.stop()








