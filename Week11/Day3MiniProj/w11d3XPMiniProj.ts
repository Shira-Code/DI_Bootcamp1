// <!-- Mini-project: To-Do List Application..
// Last Updated: September 15th, 2024

// Mini-project: To-Do List Application with TypeScript and Data Sources


// 👩‍🏫 👩🏿‍🏫 What You’ll learn
// TypeScript Basics: Understanding TypeScript classes, interfaces, and type annotations.
// Data Management: Handling data with TypeScript classes and storing data in localStorage.
// DOM Manipulation: Creating and updating DOM elements dynamically based on application state.
// Event Handling: Setting up and managing events for user interactions.
// Project Structure: Organizing a TypeScript project with a clear modular structure using Vite.


// Description:
// In this exercise, you’ll build a simple to-do list application using JavaScript with TypeScript. This project will involve creating a few TypeScript classes and organizing them into a modular structure using Vite as your development tool.



// Project Overview:
// You’ll work with four key files:

// ListItem.ts: Manages individual to-do items.
// FullList.ts: Handles the complete list of to-do items and operations on it.
// ListTemplate.ts: Manages rendering the list in the DOM.
// main.ts: Bootstraps the application and connects all components.


// 1. Setting Up the Project with Vite
// 1. Install Vite:

// If you haven’t already, install Vite and set up a new project. Run the following commands in your terminal:

// npm create vite@latest
// Choose a project name when prompted.
// Select vanilla-ts (Vanilla TypeScript) for the TypeScript template.
// 2. Navigate to Your Project:

// Move into the project directory and install dependencies:

// cd your-project-name
// npm install


// 3. Install UUID Library:

// You’ll use the uuid library to generate unique IDs for the to-do items:

// npm install uuid


// 4. Folder Structure:

// Inside the src/ folder, create two folders: model and templates. These will contain your TypeScript files:

// - src/
//   - model/
//      - ListItem.ts
//      - FullList.ts
//   - templates/
//      - ListTemplate.ts
//   - main.ts


// 2. Creating the Model Files


// 2.1. Creating ListItem.ts
// In the src/model/ folder, create a ListItem.ts file.
// This file will define a class that represents each individual item in the to-do list. Each to-do item will have three properties:
// id: A unique identifier for the item.
// item: The text or description of the to-do item.
// checked: A boolean value that indicates whether the item has been completed or not.
// You’ll need to:
// Create a TypeScript interface to represent the item structure.
// Implement a class that manages the item properties with getter and setter methods.


// 2.2. Creating FullList.ts
// In the src/model/ folder, create a FullList.ts file.
// This file will define a class that manages the full list of to-do items. The class should:
// Maintain an array of items.
// Implement methods to:
// Load the list from localStorage.
// Save the list to localStorage.
// Add and remove items from the list.
// Clear the entire list.
// Use the ListItem class from the ListItem.ts file to represent each item.


// 3. Creating the Template File


// 3.1. Creating ListTemplate.ts
// In the src/templates/ folder, create a ListTemplate.ts file.
// This file will define a class responsible for rendering the list of to-do items in the DOM. You’ll:

// Reference the HTML <ul> element where the list will be displayed.
// Create methods to:
// Render the list of to-do items dynamically, creating new <li> elements for each item.
// Handle interactions like checking off items and removing them from the list.
// Each list item should have:

// A checkbox to mark the item as completed.
// A label to display the item text.
// A delete button to remove the item.


// 4. Creating the Main Application File


// 4.1. Creating main.ts
// In the src/ folder, create a main.ts file.
// This file will:
// Initialize the to-do list application when the page loads.
// Use the FullList and ListTemplate classes to manage the list and render it in the DOM.
// Set up event listeners for:
// Submitting the form to add new to-do items.
// A button to clear all items from the list.

// 5. Setting Up the HTML File
// Create the HTML Structure:
// Ensure your HTML file has the following elements to interact with:

// An input form where users can add new to-do items.

// A <ul> element to display the list items.
// A button to clear all items from the list.
// Here’s a basic example of what the HTML might look like:

// <form id="itemEntryForm">
//  <input type="text" id="newItem" placeholder="Enter new item..." />
//  <button type="submit">Add Item</button>
// </form>

// <ul id="listItems"></ul>

// <button id="clearItemsButton">Clear All</button>


// 6. Running the Project
// 1. Start the Vite Development Server:

// Once everything is set up, start the Vite development server:

// npm run dev


// Vite will provide a URL (typically http://localhost:3000/) where you can view the running application.

// 2. Testing the Application:

// Test adding items to the list by typing text into the input field and clicking “Add Item.”
// Check items off by clicking the checkbox next to each one.
// Remove items by clicking the delete button (X) next to them.
// Clear the entire list by clicking the “Clear All” button.


// 7. Optional Enhancements
// 1. Styling:

// Add some basic CSS to improve the look and feel of the application. 

//index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>To-Do List</title>
// </head>
// <body>
//   <form id="itemEntryForm">
//     <input type="text" id="newItem" placeholder="Enter new item..." />
//     <button type="submit">Add Item</button>
//   </form>

//   <ul id="listItems"></ul>

//   <button id="clearItemsButton">Clear All</button>

//   <script type="module" src="/src/main.ts"></script>
// </body>
// </html>

//main.ts
// import FullList from './model/FullList';
// import ListTemplate from './templates/ListTemplate';
// import ListItem from './model/ListItem';
// import './style.css';

// const fullList = FullList.instance;
// const listTemplate = ListTemplate.instance;

// const form = document.getElementById('itemEntryForm') as HTMLFormElement;
// const input = document.getElementById('newItem') as HTMLInputElement;
// const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement;

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   const newItem = new ListItem(input.value, input.value, false);
//   fullList.addItem(newItem);
//   input.value = '';
//   listTemplate.renderList(fullList);
// });

// clearButton.addEventListener('click', () => {
//   fullList.clearList();
//   listTemplate.renderList(fullList);
// });

// window.addEventListener('DOMContentLoaded', () => {
//   fullList.load();
//   listTemplate.renderList(fullList);
// });

//ListTemplate.ts
// import FullList from '../model/FullList';

// export default class ListTemplate {
//   static instance: ListTemplate = new ListTemplate();

//   private ul: HTMLUListElement;

//   private constructor() {
//     this.ul = document.getElementById('listItems') as HTMLUListElement;
//   }

//   renderList(fullList: FullList) {
//     this.ul.innerHTML = '';
//     fullList.getList().forEach(item => {
//       const li = document.createElement('li');
//       const checkbox = document.createElement('input');
//       checkbox.type = 'checkbox';
//       checkbox.checked = item.checked;
//       checkbox.addEventListener('change', () => {
//         item.checked = checkbox.checked;
//         fullList.save();
//       });

//       const label = document.createElement('label');
//       label.textContent = item.item;

//       const deleteButton = document.createElement('button');
//       deleteButton.textContent = 'X';
//       deleteButton.addEventListener('click', () => {
//         fullList.removeItem(item.id);
//         this.renderList(fullList);
//       });

//       li.append(checkbox, label, deleteButton);
//       this.ul.append(li);
//     });
//   }
// }

//ListItems.ts
// import { v4 as uuidv4 } from 'uuid';

// export interface IListItem {
//   id: string;
//   item: string;
//   checked: boolean;
// }

// export default class ListItem implements IListItem {
//   constructor(
//     public id: string = uuidv4(),
//     public item: string,
//     public checked: boolean = false
//   ) {}
// }

//FullList.ts
// import ListItem from './ListItem';

// export default class FullList {
//   static instance: FullList = new FullList();

//   private constructor(
//     private list: ListItem[] = []
//   ) {}

//   addItem(item: ListItem) {
//     this.list.push(item);
//     this.save();
//   }

//   removeItem(id: string) {
//     this.list = this.list.filter(item => item.id !== id);
//     this.save();
//   }

//   getList(): ListItem[] {
//     return this.list;
//   }

//   clearList() {
//     this.list = [];
//     this.save();
//   }

//   save() {
//     localStorage.setItem('todoList', JSON.stringify(this.list));
//   }

//   load() {
//     const storedList = localStorage.getItem('todoList');
//     if (storedList) {
//       this.list = JSON.parse(storedList) as ListItem[];
//     }
//   }
// }

//style.css

// body {
 
//   font-family: Arial, sans-serif;
// }

// form {
//   display: flex;
//   margin-bottom: 10px;
// }

// input[type="text"] {
//   flex: 1;
//   padding: 8px;
// }

// button {
//   padding: 8px;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
  
  
//   display: flex;
//   align-items: center;
//   margin-bottom: 5px;
// }

// li button {
//   margin-left: 10px;
// }

// tsconfig.json
// {
//    "compilerOptions": {
//      "target": "ES2020",
//      "useDefineForClassFields": true,
//      "module": "ESNext",
//      "lib": ["ES2020", "DOM", "DOM.Iterable"],
//      "skipLibCheck": true,
//      "outDir": "./dist",  //output js files after compiling
 
//      /* Bundler mode */
//      "moduleResolution": "bundler",
//      "allowImportingTsExtensions": true,
//      "isolatedModules": true,
//      "moduleDetection": "force",
//      "noEmit": true,
 
//      /* Linting */
//      "strict": true,
//      "noUnusedLocals": true,
//      "noUnusedParameters": true,
//      "noFallthroughCasesInSwitch": true
//    },
//    "include": ["src"]
//  }

//dist folder contains minified compiled js folder after compiling
// var L=Object.defineProperty;var f=(t,e,s)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>f(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const u=class u{constructor(e=[]){this.list=e}addItem(e){this.list.push(e),this.save()}removeItem(e){this.list=this.list.filter(s=>s.id!==e),this.save()}getList(){return this.list}clearList(){this.list=[],this.save()}save(){localStorage.setItem("todoList",JSON.stringify(this.list))}load(){const e=localStorage.getItem("todoList");e&&(this.list=JSON.parse(e))}};a(u,"instance",new u);let y=u;const m=class m{constructor(){a(this,"ul");this.ul=document.getElementById("listItems")}renderList(e){this.ul.innerHTML="",e.getList().forEach(s=>{const i=document.createElement("li"),n=document.createElement("input");n.type="checkbox",n.checked=s.checked,n.addEventListener("change",()=>{s.checked=n.checked,e.save()});const o=document.createElement("label");o.textContent=s.item;const c=document.createElement("button");c.textContent="X",c.addEventListener("click",()=>{e.removeItem(s.id),this.renderList(e)}),i.append(n,o,c),this.ul.append(i)})}};a(m,"instance",new m);let g=m;var r=[];for(var h=0;h<256;++h)r.push((h+256).toString(16).slice(1));function E(t,e=0){return(r[t[e+0]]+r[t[e+1]]+r[t[e+2]]+r[t[e+3]]+"-"+r[t[e+4]]+r[t[e+5]]+"-"+r[t[e+6]]+r[t[e+7]]+"-"+r[t[e+8]]+r[t[e+9]]+"-"+r[t[e+10]]+r[t[e+11]]+r[t[e+12]]+r[t[e+13]]+r[t[e+14]]+r[t[e+15]]).toLowerCase()}var l,b=new Uint8Array(16);function w(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(b)}var U=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const I={randomUUID:U};function x(t,e,s){if(I.randomUUID&&!e&&!t)return I.randomUUID();t=t||{};var i=t.random||(t.rng||w)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,E(i)}class O{constructor(e=x(),s,i=!1){this.id=e,this.item=s,this.checked=i}}const d=y.instance,v=g.instance,S=document.getElementById("itemEntryForm"),p=document.getElementById("newItem"),B=document.getElementById("clearItemsButton");S.addEventListener("submit",t=>{t.preventDefault();const e=new O(p.value,p.value,!1);d.addItem(e),p.value="",v.renderList(d)});B.addEventListener("click",()=>{d.clearList(),v.renderList(d)});window.addEventListener("DOMContentLoaded",()=>{d.load(),v.renderList(d)});

//dist folder w/compiler generated index.html pointing to compiled minified js file 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>To-Do List</title>
//   <script type="module" crossorigin src="/assets/index-CG-EPs8n.js"></script>
// </head>
// <body>
//   <form id="itemEntryForm">
//     <input type="text" id="newItem" placeholder="Enter new item..." />
//     <button type="submit">Add Item</button>
//   </form>

//   <ul id="listItems"></ul>

//   <button id="clearItemsButton">Clear All</button>

// </body>
// </html>




