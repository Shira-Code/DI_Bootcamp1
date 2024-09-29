import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

/**
 * createContext
 * Share this context
 * useContext
 */

export const ThemeModeContext = createContext();

function App() {
  const [themeMode, setThemeMode] = useState("light");
  return (
    <>
      <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
        <Header />
        <Main />
      </ThemeModeContext.Provider>
    </>
  );
}

export default App;

/**
 Instructions:

1. App Component:
Create the App component with a count state starting at 0.
Add a setCount function to update the count.
Pass count and setCount as props to child components.
Display Component:

2. Create Display to show the current count.
Inside it, add ShowCounter, which receives count as a prop and displays it.

3. Action Component:
Create Action to hold a Button component.
The Button will have an onClick handler that calls setCount 
to increase the count.

App - setState - count, setCount
 |_ Display
         |_ ShowCouter - count
 |_ Action
        |_Button - => add
 
 */

/**
 *  <Header/> -> button - toggle between dark mode / light mode
 *  <Main /> change between css class - light / dark
 *  use createContext, useContext, useState - mode
 */
