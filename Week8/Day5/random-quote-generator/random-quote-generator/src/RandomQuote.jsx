import React, { useState } from "react";
import quotes from "./QuotesDatabase"; // Import the quotes from QuotesDatabase.js

const RandomQuote = () => {
  // Function to generate a random color, avoiding white
  const getRandomColor = () => {
    let randomColor;
    do {
      randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      // Ensure that the color is 7 characters long and not white
    } while (randomColor === "#ffffff" || randomColor.length !== 7);
    return randomColor;
  };

  // Set initial quote and background color to avoid white
  const [quote, setQuote] = useState(quotes[0]);
  const [bgColor, setBgColor] = useState(getRandomColor());

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let newQuote = quotes[randomIndex];

    // Ensure the new quote is different from the current quote
    while (newQuote.quote === quote.quote) {
      randomIndex = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[randomIndex];
    }

    setQuote(newQuote);

    // Set a new random background color, ensuring it's not white
    setBgColor(getRandomColor());
  };

  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden; /* Prevent scrolling */
          }
          #root {
            height: 100%;
          }
        `}
      </style>

      <div
        style={{
          backgroundColor: bgColor,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "500px",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1>{quote.quote}</h1>
          <h4 style={{ textAlign: "right" }}>- {quote.author}</h4>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={getRandomQuote}
              style={{
                backgroundColor: bgColor, // Set button color to the same as the background
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                color: "white", // White text for contrast
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              Get New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
