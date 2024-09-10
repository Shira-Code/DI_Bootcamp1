// Daily Challenge: Gifs
// Last Updated: September 22nd, 2023

// What You will learn :
// Fetch Api
// Async/Await
// Try/Catch


// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

//html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>GIF Search</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             text-align: center;
//         }
//         #gif-container {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: center;
//         }
//         .gif-card {
//             margin: 10px;
//             padding: 10px;
//             border: 1px solid #ccc;
//             border-radius: 8px;
//             display: inline-block;
//             text-align: center;
//         }
//         img {
//             width: 200px;
//             height: 200px;
//             object-fit: cover;
//         }
//     </style>
// </head>
// <body>
//     <h1>GIF Search</h1>
//     <form id="gifForm">
//         <input type="text" id="category" placeholder="Enter category">
//         <button type="submit">Search GIF</button>
//     </form>

//     <div id="gif-container"></div>

//     <button id="deleteAll">Delete All GIFs</button>

//     <script src="app.js"></script>
// </body>
// </html>

//js:

// const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
// const form = document.getElementById('gifForm');
// const gifContainer = document.getElementById('gif-container');
// const deleteAllBtn = document.getElementById('deleteAll');


// async function fetchGif(category) {
//     const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${API_KEY}`;
    
//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.data && data.data.images) {
//             const gifUrl = data.data.images.fixed_height.url;
//             displayGif(gifUrl);
//         } else {
//             alert('No GIF found for this category');
//         }
//     } catch (error) {
//         console.error('Error fetching GIF:', error);
//         alert('Error fetching GIF');
//     }
// }

// function displayGif(gifUrl) {
//     const gifCard = document.createElement('div');
//     gifCard.classList.add('gif-card');

//     const gifImage = document.createElement('img');
//     gifImage.src = gifUrl;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.addEventListener('click', () => gifCard.remove());

//     gifCard.appendChild(gifImage);
//     gifCard.appendChild(deleteBtn);

//     gifContainer.appendChild(gifCard);
// }

// form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const category = document.getElementById('category').value.trim();

//     if (category) {
//         await fetchGif(category);
//     } else {
//         alert('Please enter a category');
//     }
// });

// 
// deleteAllBtn.addEventListener('click', () => {
//     gifContainer.innerHTML = '';
// });


