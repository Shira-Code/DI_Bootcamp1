import React, { useState, useEffect } from 'react';

const Color = () => {
    // Initialize state variable with the default color as "red"
    const [favoriteColor, setFavoriteColor] = useState("red");

    // useEffect hook that will run every time the favoriteColor state changes
    useEffect(() => {
        alert(`useEffect reached: My favorite color is ${favoriteColor}`);
    }, [favoriteColor]); // Trigger effect whenever favoriteColor changes

    // Function to change the color to blue
    const changeColorToBlue = () => {
        setFavoriteColor("blue");
    };

    // Function to change the color to yellow
    const changeColorToYellow = () => {
        setFavoriteColor("yellow");
    };

    return (
        <div>
            <h1>My favorite color is {favoriteColor}</h1>
            <button onClick={changeColorToBlue}>Change Color to Blue</button>
            <button onClick={changeColorToYellow}>Change Color to Yellow</button>
        </div>
    );
};

export default Color;
