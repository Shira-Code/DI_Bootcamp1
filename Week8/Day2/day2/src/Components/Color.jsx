import React, { useState, useEffect } from 'react';

const Color = () => {
   
    const [favoriteColor, setFavoriteColor] = useState("red");

    useEffect(() => {
        alert(`useEffect reached: My favorite color is ${favoriteColor}`);
    }, [favoriteColor]); 

    const changeColorToBlue = () => {
        setFavoriteColor("blue");
    };

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
