Mini-Project: Random Quote Generator
Last Updated: March 7th, 2024


What you will learn:
React
React state
React Component
Event Handler


What you will create
Build a Random Quote Generator with React


image



Instructions
You can check out the demo here https://di-random-quotes.surge.sh/

Download this file https://github.com/devtlv/RandomQuotesProject-JSBOOTCAMP-Week8Day5
containing a list of quotes and authors. You can also clone the repo.  This is a sample of the file
QuotesDatabase.js  

const quotes=[
	{
	"quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
	"author": "Thomas Edison"
	}, {
	"quote": "You can observe a lot just by watching.",
	"author": "Yogi Berra"
	}, {
	"quote": "A house divided against itself cannot stand.",
	"author": "Abraham Lincoln"
	}, 
]
export default quotes

You will display in a box :
a random quote as a header,
below the author of the quote,
and a button that when clicked on, calls a function that:
generates a new quote from the array of objects and replaces the current one. Make sure to not display the same quote twice.
changes randomly the color of the background, the color of the header quote and the color of the button.
Good luck!


To build the **Random Quote Generator** using React, here’s a step-by-step breakdown:

### 1. **Folder Setup and Installation**

Create your project using Vite:

```bash
npm create vite@latest random-quote-generator
cd random-quote-generator
npm install
npm run dev
```

This will set up a Vite project, and you can access it in the browser at `http://localhost:5173`.

### 2. **Project Structure**

The basic project structure would look like this:

```
random-quote-generator/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── QuotesDatabase.js
│   └── index.css
└── package.json
```

### 3. **Quotes Database (QuotesDatabase.js)**

Create the `QuotesDatabase.js` file in the `src` directory:

```js
const quotes = [
  {
    "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
  },
  {
    "quote": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
  },
  {
    "quote": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
  }
];

export default quotes;
```

### 4. **App Component (App.jsx)**

Now, in the `App.jsx` file, you can build the Random Quote Generator:

```jsx
import React, { useState } from "react";
import quotes from "./QuotesDatabase";

const App = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [bgColor, setBgColor] = useState("#ffffff");

  const getRandomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex] === currentQuote);

    setCurrentQuote(quotes[randomIndex]);
    setBgColor(getRandomColor());
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const appStyle = {
    backgroundColor: bgColor,
    color: bgColor,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div style={appStyle}>
      <h1 style={{ color: bgColor }}>{currentQuote.quote}</h1>
      <p style={{ color: bgColor }}>- {currentQuote.author}</p>
      <button
        onClick={getRandomQuote}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: bgColor,
          border: "none",
          cursor: "pointer",
          color: "white"
        }}
      >
        New Quote
      </button>
    </div>
  );
};

export default App;
```

### 5. **CSS (Optional)**

In `index.css`, you can add basic styles for the button and layout if needed. Example:

```css
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

button {
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  opacity: 0.8;
}
```

### 6. **Explanation**

- **State management**: 
  - `currentQuote`: Keeps track of the current quote displayed.
  - `bgColor`: Changes background and button color dynamically.
  
- **getRandomQuote**: Generates a random quote from the list while ensuring it doesn’t repeat the current one.

- **getRandomColor**: Generates a random color for the background, quote text, and button.

### 7. **Running the Application**

To run the app, simply run:

```bash
npm run dev
```

Open the browser to see the Random Quote Generator in action.

This setup integrates the quote generation and color-changing functionality as outlined in your requirements!
