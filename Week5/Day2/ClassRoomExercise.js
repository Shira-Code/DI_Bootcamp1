// create array of users  emails

// let users = ["john", "Mary", "Dan", "Anne"];

// ["john@email.com", "Mary@email.com", "Dan@email.com", "Anne@email.com" ]

let arr = [];
for (const x in users) {
    arr.push(users[x] + "@email.com");

}

console.log(arr);