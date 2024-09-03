// Exercises XP
// Last Updated: July 15th, 2024

// What you will learn
// Object methods
// Objects destructuring
// Classes


// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

output:  
I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



// 🌟 Exercise 2: Display Student Info
// Instructions
// function displayStudentInfo(objUser){
//     //destructuring
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});
// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'

// part one
function displayStudentInfo(objUser) {
  // Destructuring the properties 'first' and 'last' from the object
  const { first, last } = objUser;
  
  // Returning the formatted string
  return `Your full name is ${first} ${last}`;
}

// Calling the function with an example object
console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

//part 2

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Convert the object to an array of key-value pairs
const userArray = Object.entries(users);

// Multiply each user's ID by 2
const updatedUserArray = userArray.map(([user, id]) => [user, id * 2]);

console.log(updatedUserArray);
// Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]




// 🌟 Exercise 3: User & id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

//part 1
const users = { user1: 18273, user2: 92833, user3: 90315 };

const userArray = Object.entries(users);

console.log(userArray);


//part 2
const users = { user1: 18273, user2: 92833, user3: 90315 };

const userArray = Object.entries(users);

const updatedUserArray = userArray.map(([user, id]) => [user, id * 2]);

console.log(updatedUserArray);


// Exercise 4 : Person class
// Instructions
// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

output will be:  object,
 js- when creating instance of a class using the new keyword, 
 the instance is an object. that is wy typeof member will return "object".

// 🌟 Exercise 5 : Dog class
// Instructions
// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };
This wonn't call super(name) within the constructor, 
which is required when extending a class that has its own constructor.
 In JavaScript, if a subclass has a constructor, it must call super() before using this. 
 This will result in a ReferenceError because this is used before super() is called.


//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };
This will work, it calls super(name) to pass the name to the Dog class constructor
 and then assigns the size to the Labrador instance
 and  extend the Dog class
//option3

//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };
won't work bc it calls uper(name) without having a name parameter in the constructor
 and name is undefined in this will log an error because name is not defined


/
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}
Won't work: doesn't call super(name) within the constructor
result in a ReferenceError because this is used before super() is called

// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

[2] === [2]  false
{} === {}  false

// In JavaScript, arrays are objects, and object comparisons are based on reference, not value. Since [2] and [2] are two different array instances in memory, they do not refer to the same object, so they are not equal.

// { } === { }
// False

// Similarly, {} and {} represent two different object instances in memory. Object comparisons also work on reference, so two distinct object literals are not equal.


// What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

object2, object3 are references to the same object as object1
 when modifying  object1.number, it  affects object2.number and object3.number
object4 is a different object with its own separate number property
 Changing object1.number does not affect object4.

 Values:

console.log(object2.number); output 4 bc object2 is the same as object1
console.log(object3.number);  output 4 for the same reason
console.log(object4.number); output 5 bc object4 was not affected by change to object1

// 1.  Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
// 2.  Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
// 3.  Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white


class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}


class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');


console.log(farmerCow.sound('Moooo')); 
