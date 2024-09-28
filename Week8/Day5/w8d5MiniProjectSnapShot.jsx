Mini-Project Day - Snap Shot
Last Updated: March 7th, 2024


What you will learn:
React
React state
React Component
React Router
Event Handler


What you will create
Build a Snap Shot Page


snapshot


Check out the demo here https://yog9.github.io/SnapShot/#/SnapScout/mountain



Instructions
Snap Shot is a gallery created using React and React Router.
The Routes need to be setup for four default pages and a search page.
The images are displayed using an Image API, you could use the Pexel API
Sign in to Pexel, receive an API KEY and start making requests.

The functionalities
The user can search for a specific image type. As soon as the user click on the button, you will display 30 images corresponding to the category.
The user can also click on one of the 4 categories that you present on the page. In the demo the categories are Mountain,Beaches,Birds and Food but fell free to add your own personal categories.
When the user hovers on a image, add some nice CSS transitions.

Bonus: Add some kind of pagination, so on a click of a button, the user will be able to change the number of images displayed on the page.
Good luck!


To build the Snap Shot page project with React, React Router, and the Pexels API, here’s a step-by-step guide on how to set it up:

### 1. **Folder Structure Setup**
First, organize your project folder:
```
snap-shot
│
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── Gallery.js
│   │   ├── ImageCard.js
│   ├── pages
│   │   ├── Mountain.js
│   │   ├── Beaches.js
│   │   ├── Birds.js
│   │   ├── Food.js
│   │   ├── Search.js
│   ├── App.js
│   ├── index.js
│   ├── api.js
├── package.json
└── README.md
```

### 2. **Installation**
First, make sure you have the necessary tools installed.

- Initialize the project:
  ```bash
  npm create vite@latest snap-shot
  ```

- Navigate into the project folder:
  ```bash
  cd snap-shot
  ```

- Install dependencies:
  ```bash
  npm install react-router-dom axios
  ```

- If you don’t have `axios` installed (for making HTTP requests), install it too:
  ```bash
  npm install axios
  ```

- Install Tailwind CSS for easy styling (optional):
  ```bash
  npm install -D tailwindcss
  ```

### 3. **Setup Routes in `App.js`**
In `src/App.js`, import and define the routes for the four categories and the search page using React Router:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mountain from './pages/Mountain';
import Beaches from './pages/Beaches';
import Birds from './pages/Birds';
import Food from './pages/Food';
import Search from './pages/Search';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/food" element={<Food />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
```

### 4. **Create Navbar Component**
In `src/components/Navbar.js`, create a simple navbar for navigating through categories:

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/mountain">Mountain</Link></li>
        <li><Link to="/beaches">Beaches</Link></li>
        <li><Link to="/birds">Birds</Link></li>
        <li><Link to="/food">Food</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
```

### 5. **API Requests with Axios**
In `src/api.js`, handle API requests to Pexels:

```jsx
import axios from 'axios';

const API_KEY = 'YOUR_PEXELS_API_KEY';

export const fetchImages = async (query) => {
  const response = await axios.get(`https://api.pexels.com/v1/search`, {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      query: query,
      per_page: 30,
    },
  });
  return response.data.photos;
};
```

### 6. **Image Display Pages**
Create a page for each category, e.g., `src/pages/Mountain.js`:

```jsx
import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api';
import Gallery from '../components/Gallery';

const Mountain = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const photos = await fetchImages('mountain');
      setImages(photos);
    };
    getImages();
  }, []);

  return (
    <div>
      <h1>Mountain Images</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Mountain;
```

Do something similar for Beaches, Birds, and Food.

### 7. **Search Page**
In `src/pages/Search.js`, create a search page where users can input custom queries:

```jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImages } from '../api';
import Gallery from '../components/Gallery';

const Search = () => {
  const { query } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const photos = await fetchImages(query);
      setImages(photos);
    };
    getImages();
  }, [query]);

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Search;
```

### 8. **Gallery Component**
Create `src/components/Gallery.js` to display images:

```jsx
import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <img src={image.src.medium} alt={image.photographer} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
```

### 9. **Styling with CSS**
Add CSS transitions when hovering over images:

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.image-card {
  margin: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.image-card:hover {
  transform: scale(1.1);
}
```

### 10. **Run the App**
To run the app:

1. Install all dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

---

This should give you a fully functional Snap Shot page with category browsing and search capabilities using React, React Router, and the Pexels API. You can easily expand with pagination or additional features.