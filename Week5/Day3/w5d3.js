/**
 * Create a User class
 * Store the name of the user in a "name" variable
 * Add hello method that will log 'Hello' and the name of the user
 * Create a Student class that exetends User
 * Create 3 instances of Student class, add them to an Array
 * Loop the array and call hello method
 */

class user {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello ${this.name}`);
    }
}

class student extends user {
    constructor(name) {
        super(name);
    }
}

const student1 = new student("Ray");
const student2 = new student("Liam");
const student3 = new student("Jenner");

const students = [student1, student2, student3];

students.forEach(student => student.hello())
