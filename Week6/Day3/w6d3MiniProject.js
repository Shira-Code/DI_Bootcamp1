// Star Wars Web App Using AJAX API
// Last Updated: March 7th, 2024

// What you will learn
// async/await
// Fetch API

// What you will create
// Star Wars Web App Using AJAX API
// In this project you will have to build a single page application that uses AJAX to retrieve information and display it on your website as follows:

// Here is a demo http://di-star-wars-ajax.surge.sh/

// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// 1.  Create your HTML file, and add the relevant elements.

// 2.  In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// 3.  Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message https://docs.fontawesome.com/web/style/animate
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css

// If there is an error getting the data, display a message as follows:
// "Oh No! That Person Isn't Available!"
// You can use your own css to style the website as you see fit


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Wars Characters</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        #character-info {
            margin-top: 20px;
        }
        #loading {
            display: none;
            font-size: 24px;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>

    <h1>Random Star Wars Character</h1>
    <button id="fetch-character">Get Random Character</button>

    <div id="loading">
        <i class="fas fa-spinner fa-spin"></i> Loading...
    </div>

    <div id="character-info">
        <h2 id="name"></h2>
        <p id="height"></p>
        <p id="gender"></p>
        <p id="birth-year"></p>
        <p id="home-world"></p>
    </div>

    <script src="app.js"></script>
</body>
</html>




document.getElementById('fetch-character').addEventListener('click', getCharacter);

async function getCharacter() {
    const characterInfo = document.getElementById('character-info');
    const loading = document.getElementById('loading');

    // Clear previous data and show the loading spinner
    characterInfo.innerHTML = '';
    loading.style.display = 'block';

    try {
        const randomId = Math.floor(Math.random() * 83) + 1; // Random character ID (1 to 83)
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        
        if (!response.ok) {
            throw new Error('Character not found');
        }

        const data = await response.json();
        const character = data.result.properties;

        // Fetch the character's homeworld
        const homeworldResponse = await fetch(character.homeworld);
        const homeworldData = await homeworldResponse.json();
        const homeworld = homeworldData.result.properties.name;

        // Display the character info
        displayCharacter(character, homeworld);

    } catch (error) {
        characterInfo.innerHTML = `<p class="error">Oh No! That Person Isn't Available!</p>`;
    } finally {
        // Hide the loading spinner
        loading.style.display = 'none';
    }
}

function displayCharacter(character, homeworld) {
    document.getElementById('name').textContent = `Name: ${character.name}`;
    document.getElementById('height').textContent = `Height: ${character.height}`;
    document.getElementById('gender').textContent = `Gender: ${character.gender}`;
    document.getElementById('birth-year').textContent = `Birth Year: ${character.birth_year}`;
    document.getElementById('home-world').textContent = `Home World: ${homeworld}`;
}
