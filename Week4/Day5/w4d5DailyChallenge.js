// What You will learn :
// DOM events
// DOM tree

// Recreate the todo list above:

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

//css below
// body {
//     background-color: pink;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     margin: 0;
//     text-align: center;
// }

// .container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     max-width: 400px; 
//     padding: 20px;
//     box-sizing: border-box;
// }

// form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 10px;
//     width: 100%;
// }

// #clear {
//     margin-top: 10px;
//     padding: 10px;
//     width: 100%;
//     max-width: 200px;
// }

// input[type="text"] {
//     padding: 10px;
//     width: 100%;
//     max-width: 300px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
// }

// input[type="submit"] {
//     padding: 10px 20px;
//     background-color: #4CAF50;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     width: 100%;
//     max-width: 200px;
// }

// ul {
//     list-style: none;
//     padding: 0;
//     width: 100%;
//     margin-top: 20px;
// }

// li {
//     display: flex;
//     align-items: center;
//     gap: 2px;
//     justify-content: center;
// }

// li.is-done {
//     text-decoration: line-through;
// }



//html below

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>To Do List</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div class="container">
//         <form id="form">
//             <label for="task-input">Type Your Task Here:</label> 
//             <input type="text" name="task" id="task-input" />
//             <input type="submit" value="Add"/>
//         </form>
//         <button id="clear">Clear</button>
//         <ul id="list-tasks"></ul>
//     </div>
//     <script src="index.js"></script>
// </body>
// </html>



//js below

// const form = document.getElementById("form");
// const ul = document.getElementById("list-tasks");
// const clearButton = document.getElementById("clear");

// form.addEventListener("submit", handleSubmit);
// clearButton.addEventListener("click", clearPage); 
// let tasks = [];
// let id = 0;

// function clearPage() {
//     tasks = [];
//     renderTasks(tasks);
//     form.reset();
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const taskText = formData.get("task");
//     if (taskText === "") return;
//     const task = generateTask(taskText);
//     tasks.push(task);
//     renderTasks(tasks);
//     form.reset();
    
// }

// function renderTasks(tasks){
//     console.log("tasks: ", tasks);
//     ul.innerHTML = "";
     
//     for (const task of tasks) {
//         const li = generateLi(task);
//         ul.append(li); 
//     }
// }

// function generateLi(task) {
//     console.log("tasks: ", tasks);
//     const li = document.createElement("li");
//     li.dataset.id = task.id;

//     const xMark = document.createElement("i")
//     xMark.classList.add("fa-solid", "fa-xmark");
//     xMark.addEventListener("click", function () {
//          deleteTask(task.id)
// });

//     const checkbox = document.createElement("input");
//     checkbox.setAttribute("type", "checkbox");
//     checkbox.setAttribute("id", "checkbox-" + task.id);
//     checkbox.checked = task.done;
//     checkbox.addEventListener("click", function() {
//         markTaskDone(task);
//      });

//     const span = document.createElement("label")
//     span.setAttribute("for", "checkbox-" + task.id);
//     span.innerText = task.text;

//     li.append(xMark, checkbox, span);
//     return li;

// }

// function deleteTask(id) {

// //     const newTasks =[];
// //     for (const task of tasks) {
        
// //         if (task.id === id){
// //             continue;
            
// //         }
// //         newTasks.push(task);
// // }
// function isDifferentFromId(task) {
//     return task.id != id;
// }
//     const newTasks = tasks.filter(isDifferentFromId);
//     tasks = newTasks;
//     renderTasks(tasks); 
// }

// function markTaskDone(task) {
//     const li = document.querySelector(`[data-id='${task.id}']`); 
//     li?.classList.toggle("is-done");
//     task.done = !task.done;
    
// }

// function generateTask(text) {
//     const task = {
//         text,
//         id,
//         done: false, 
//     };
//     id++;
//     return task;
// }

