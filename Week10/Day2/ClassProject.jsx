//.css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    background: #333;
    color: whitesmoke;
  }
  
  body {
    min-height: 100vh;
    font-size: 1.5rem;
    padding: 0 10% 10%;
  }
  
  input,
  select,
  textarea,
  button,
  select {
    font-size: 22px;
    padding: 5px;
    margin-bottom: 1em;
  }
  
  main {
    max-width: 500px;
    margin: auto;
  }
  
  section {
    margin-top: 1em;
  }
  
  article {
    margin: 0.5em 0.5em 0.5em 0;
    border: 1px solid whitesmoke;
    border-radius: 10px;
    padding: 1em;
  }
  
  h1 {
    font-size: 3.5rem;
  }
  
  p {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    font-size: 1.2rem;
    margin: 0.5em 0;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .postCredit {
    font-size: 1rem;
  }
  
  .reactionButton {
    margin: 0 0.25em 0 0;
    background: transparent;
    border: none;
    color: whitesmoke;
    font-size: 1rem;
  }


    https://jsonplaceholder.typicode.com/posts

    make different component for 

    // toDo.jsx
    import { memo } from "react";
const ToDo = ({ todos }) => {
  console.log("ToDo Render...");

  return (
    <>
      <h2>Todo:</h2>
      {todos.map((task, indx) => {
        return (
          <div key={indx}>
            {indx}. {task}
          </div>
        );
      })}
    </>
  );
};
export default memo(ToDo);