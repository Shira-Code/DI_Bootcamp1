// Mini-Project - Robo-Friends Search
// Last Updated: September 22nd, 2023

// What you will learn
// Array and Object methods
// Array and Object destructuring
// Functions and arrow functions
// DOM tree


// What you will create
// A Robo-Friends Search with Advanced Javascript

// In this project you will have to create a robot website (you can use your own css to style your project):
// robot project #1



// Instructions
// PART I : The website
// The webpage displays Cards of Robots with their respective image and information.

// robot project #1



// 2. You have to create the cards by using the values from the array of objects provided in the ASSETS below.


// PART II : The filter
// When you search for a specific name in the search box, the webpage filters the cards displayed. For example is you write “nic” in the search box, you will display the robot which name contains “nic”, which means only one robot: “Nicholas”.
// robot project #2


// 2. Display the cards in the DOM, using DOM elements and selectors, and filter them with the search box.


// PART II : The style
// You can use your own images or use this website to generate a new Robot Image.

// Check out those links to generate the correct font
// cdnfonts
// dafont

// You can use those images for the background (click righ on the images below, and “Save image as…” )
// background imagebackground image


// Assets
//       const robots = [
//           {
//             id: 1,
//             name: 'Leanne Graham',
//             username: 'Bret',
//             email: 'Sincere@april.biz',
//             image: 'https://robohash.org/1?200x200'
//           },
//           {
//             id: 2,
//             name: 'Ervin Howell',
//             username: 'Antonette',
//             email: 'Shanna@melissa.tv',
//             image: 'https://robohash.org/2?200x200'
//           },
//           {
//             id: 3,
//             name: 'Clementine Bauch',
//             username: 'Samantha',
//             email: 'Nathan@yesenia.net',
//             image: 'https://robohash.org/3?200x200'
//           },
//           {
//             id: 4,
//             name: 'Patricia Lebsack',
//             username: 'Karianne',
//             email: 'Julianne.OConner@kory.org',
//             image: 'https://robohash.org/4?200x200'
//           },
//           {
//             id: 5,
//             name: 'Chelsey Dietrich',
//             username: 'Kamren',
//             email: 'Lucio_Hettinger@annie.ca',
//             image: 'https://robohash.org/5?200x200'
//           },
//           {
//             id: 6,
//             name: 'Mrs. Dennis Schulist',
//             username: 'Leopoldo_Corkery',
//             email: 'Karley_Dach@jasper.info',
//             image: 'https://robohash.org/6?200x200'
//           },
//           {
//             id: 7,
//             name: 'Kurtis Weissnat',
//             username: 'Elwyn.Skiles',
//             email: 'Telly.Hoeger@billy.biz',
//             image: 'https://robohash.org/7?200x200'
//           },
//           {
//             id: 8,
//             name: 'Nicholas Runolfsdottir V',
//             username: 'Maxime_Nienow',
//             email: 'Sherwood@rosamond.me',
//             image: 'https://robohash.org/8?200x200'
//           },
//           {
//             id: 9,
//             name: 'Glenna Reichert',
//             username: 'Delphine',
//             email: 'Chaim_McDermott@dana.io',
//             image:'https://robohash.org/9?200x200'
//           },
//           {
//             id: 10,
//             name: 'Clementina DuBuque',
//             username: 'Moriah.Stanton',
//             email: 'Rey.Padberg@karina.biz',
//             image:'https://robohash.org/10?200x200'
//           }
//           ];

//html js

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Robo-Friends</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
//           rel="stylesheet" 
//           integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
//           crossorigin="anonymous" />
//     <link href="https://fonts.cdnfonts.com/css/sega-logo-font" rel="stylesheet">
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>

//     <h1>Robo-Friends</h1>

//     <!-- Search Box -->
//     <input type="text" id="search" placeholder="Search robots..." oninput="filterRobots()">
// <!-- Background Container -->
// <div id="background-container">
//     <!-- Container for Robot Cards -->
//     <div id="robot-container">

        

//     <script>
//         const robots = [
//             { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', image: 'https://robohash.org/1?200x200' },
//             { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', image: 'https://robohash.org/2?200x200' },
//             { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', image: 'https://robohash.org/3?200x200' },
//             { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?200x200' },
//             { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?200x200' },
//             { id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?200x200' },
//             { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?200x200' },
//             { id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
//             { id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/9?200x200' },
//             { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/10?200x200' }
//         ];

//         // Function to display the robots
//         function displayRobots(robotsToDisplay) {
//             const robotContainer = document.getElementById('robot-container');
//             robotContainer.innerHTML = ''; // Clear the container

//             robotsToDisplay.forEach(robot => {
//                 const robotCard = document.createElement('div');
//                 robotCard.classList.add('robot-card');

//                 robotCard.innerHTML = `
//                     <img src="${robot.image}" alt="${robot.name}">
//                     <h2>${robot.name}</h2>
//                     <p>Username: ${robot.username}</p>
//                     <p>Email: ${robot.email}</p>
//                 `;

//                 robotContainer.appendChild(robotCard);
//             });
//         }

//         // Initial display of all robots
//         displayRobots(robots);

//         // Function to filter the robots based on the search query
//         function filterRobots() {
//             const searchInput = document.getElementById('search').value.toLowerCase();
//             const filteredRobots = robots.filter(robot => 
//                 robot.name.toLowerCase().includes(searchInput)
//             );
//             displayRobots(filteredRobots);
//         }
//     </script>
//     </div>
// </div>
// </body>
// </html>



// css

// * {
//     margin 0px;
//     padding 0px;
//     box-sizing: border-box;
// }

// body {
//     /* font-family: Arial, sans-serif; */
//     font-family: 'SEGA LOGO FONT', sans-serif;
//     background-color: #f5f5f5;
//     text-align: center;
//     padding: 20px;
// }

// h1 {
//     color: #333;
//     margin-bottom: 20px;
// }

// #search {
//     padding: 10px;
//     width: 300px;
//     font-size: 16px;
//     margin-bottom: 20px;
// }

// #robot-container {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 20px;
// }

// .robot-card {
//     background-color: rgb(3, 221, 237);
//     background-image: url('assets/card-pattern.png');
//     border-radius: 10px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     width: 200px;
//     text-align: center;
//     padding: 20px;
//     overflow: hidden; /* Prevent content overflow */
//     box-sizing: border-box;
// }


// .robot-card img {
//     width: 100%;
//     border-radius: 10px;
// }

// .robot-card h2 {
//     color: #157398;
//     margin: 10px 0;
//     font-size: 18px;
// }

// .robot-card p {
//     font-size: 14px;
//     color: #435f43;
//     line-height: 1.5; 
//     word-wrap: break-word; 
//     overflow-wrap: break-word; 
// }

// #background-container {
//     background-color: pink;
//     background-image: url('assets/circuit-pattern.png'); 
//     background-size: cover; 
//     background-position: center; 
//     background-repeat: no-repeat; 
//     padding: 20px; 
// }

// .robot-card h2 {
//     margin: 10px 0;
//     font-size: 18px;
//     line-height: 1.5;  
// }