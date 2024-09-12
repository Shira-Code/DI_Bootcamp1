// JavaScript Instructor
// 11:26 AM
// /**
//  * info.js -> module with a function getUsers
//  * getUsers return the users array from this api
//  * https://jsonplaceholder.typicode.com/users
//  *
//  * in main.js - get the array and log
//  *
//  * use es6 module
//  */


export async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}
