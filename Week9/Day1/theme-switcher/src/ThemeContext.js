// // src/ThemeContext.js
// import React, { createContext, useContext, useState } from "react";

// // Create the ThemeContext
// const ThemeContext = createContext();

// // ThemeProvider component will manage the theme state and provide the theme and toggle function
// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // useTheme hook to access the theme and toggleTheme function from any component
// function useTheme() {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// }

// export { ThemeProvider, useTheme };

//App.css
// .character-counter {
//     text-align: center;
//     margin-top: 50px;
//   }
  
//   textarea {
//     width: 300px;
//     height: 100px;
//     padding: 10px;
//     margin-bottom: 20px;
//     font-size: 16px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     outline: none;
//   }
  
//   textarea:focus {
//     border-color: #007bff;
//   }
  
//   p {
//     font-size: 18px;
//     font-weight: bold;
//     color: #333;
//   }
  