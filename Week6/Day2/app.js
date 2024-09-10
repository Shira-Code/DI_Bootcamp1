const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const form = document.getElementById('gifForm');
const gifContainer = document.getElementById('gif-container');
const deleteAllBtn = document.getElementById('deleteAll');

// Function to fetch GIF based on category
async function fetchGif(category) {
    const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.data && data.data.images) {
            const gifUrl = data.data.images.fixed_height.url;
            displayGif(gifUrl);
        } else {
            alert('No GIF found for this category');
        }
    } catch (error) {
        console.error('Error fetching GIF:', error);
        alert('Error fetching GIF');
    }
}

// Function to display the GIF on the page
function displayGif(gifUrl) {
    const gifCard = document.createElement('div');
    gifCard.classList.add('gif-card');

    const gifImage = document.createElement('img');
    gifImage.src = gifUrl;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => gifCard.remove());

    gifCard.appendChild(gifImage);
    gifCard.appendChild(deleteBtn);

    gifContainer.appendChild(gifCard);
}

// Event listener for the form
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const category = document.getElementById('category').value.trim();

    if (category) {
        await fetchGif(category);
    } else {
        alert('Please enter a category');
    }
});

// Event listener for the delete all button
deleteAllBtn.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});