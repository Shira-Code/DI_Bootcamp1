// Exercise3.js
import React, { Component } from 'react';
import './Exercise.css'; 

class Exercise extends Component {
  render() {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return (
      <div>
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a paragraph</p>
       
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">This is a Link</a>
        <form>
          <h3>This is a Form</h3>
          <label htmlFor="name">Enter your name:</label>
          <br></br>
          <input type="text" id="name" name="name" />
          <input type="submit" value="Submit" />
        </form>
        <h3>This is an Image</h3>
        <img 
            
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
            alt="placeholder"
            style={{ width: '150px', height: 'auto' }}  />
        <div>
        <h3>This is a List</h3>
        <ul style={{ paddingLeft: '20px', listStylePosition: 'inside' }}>
          <li style={{ marginLeft: '10px' }}>Coffee</li>
          <li style={{ marginLeft: '10px' }}>Tea</li>
          <li style={{ marginLeft: '10px' }}>Milk</li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Exercise; // Make sure you export it correctly as default
