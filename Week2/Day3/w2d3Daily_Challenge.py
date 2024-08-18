# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

# import math

# class Circle:
#     def __init__(self, radius=None, diameter=None):
#         if radius is not None:
#             self.radius = radius
#         elif diameter is not None:
#             self.radius = diameter / 2
#         else:
#             raise ValueError("Must provide either radius or diameter")
        
#         self.diameter = 2 * self.radius

#     def area(self):
       
#         return math.pi * self.radius ** 2

#     def __str__(self):
        
#         return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f})"

#     def __add__(self, other):
        
#         if not isinstance(other, Circle):
#             return NotImplemented
#         new_radius = self.radius + other.radius
#         return Circle(radius=new_radius)

#     def __lt__(self, other):
       
#         if not isinstance(other, Circle):
#             return NotImplemented
#         return self.radius < other.radius

#     def __eq__(self, other):
        
#         if not isinstance(other, Circle):
#             return NotImplemented
#         return self.radius == other.radius

#     def __repr__(self):
        
#         return f"Circle(radius={self.radius}, diameter={self.diameter})"

# if __name__ == "__main__":
#     circle1 = Circle(radius=5)
#     circle2 = Circle(diameter=10)
    
#     print(circle1)
#     print(circle2)
#     print("Area of circle1:", circle1.area())
    
#     circle3 = circle1 + circle2
#     print("Combined circle:", circle3)
    
#     print("circle1 < circle2:", circle1 < circle2)
#     print("circle1 == circle2:", circle1 == circle2)
    
#     circles = [circle1, circle2, circle3]
#     sorted_circles = sorted(circles)
#     print("Sorted circles:", sorted_circles)