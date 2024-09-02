(function(userName) {
const navbar = document.getElementById('navbar');

const userDiv = document.createElement('div');
userDiv.id = 'user-info';

const profilePic = document.createElement('img');
profilePic.src = 'https://www.whitehouse.gov/wp-content/uploads/2021/04/V20210305LJ-0043-cropped.jpg?resize=1536,1152'; 
profilePic.alt = 'Profile Picture';

const userNameSpan = document.createElement('span');
userNameSpan.textContent = `Welcome, ${userName}`;

userDiv.appendChild(profilePic);
userDiv.appendChild(userNameSpan);

navbar.appendChild(userDiv);
})('Kamala');