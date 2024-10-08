// Exercises XP
// Last Updated: November 29th, 2023

// What we will learn
// React Lifecycle
// Event Handlers
// Error Boundary


// NOTE: You will use the same React App for all the Exercises XP
// Create a React App and start your app



// Exercise 1 : React Error Boundary Simulation
// Review

// Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
// We will catch JavaScript errors anywhere in child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

// Check the demo here http://di-react-error-boundary.surge.sh/

// Instructions
// In the App.js file create a class component named BuggyCounter.

// This component :
// will hold a counter property in the state. The counter value starts at 0.
// will render the counter. Every time the users clicks on it, the function handleClick() will be called, and add +1 to the counter property.

// If the counter reaches 5, you will throw an error ‘I crashed!’

// In another Javascript file, create the ErrorBoundary class component, it will hold an error property in the state. The error value is set to null.
// Use the componentDidCatch lifecycle to set the value of the error property.
// Render an error message with some details. (We will use this component to wrap the BuggyCounter component in our below simulations)
// Use this below code to show the Error

// <details style={{ whiteSpace: 'pre-wrap' }}>
//     {this.state.error && this.state.error.toString()}
//     <br />
//     {this.state.errorInfo.componentStack}
// </details>
// Simulation 1:

// In our first simulation we will wrap up two BuggyCounter components with one ErrorBoundary component
// Note : Because both of them are in the same error boundary. If one crashes, the error boundary will replace both of them.
//app.js
// import React from 'react';
// import BuggyCounter from './Components/BuggyCounter'; 
// import ErrorBoundary from './Components/ErrorBoundary'; 

// function App() {
//   return (
//     <div className="App">
//       <h1>React Error Boundary Simulation</h1>
//       <ErrorBoundary>
//         <BuggyCounter />
//         <BuggyCounter />
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;

// //BuggyCounter.jsx
// import React, { Component } from 'react';

// class BuggyCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   handleClick = () => {
//     this.setState(({ counter }) => ({ counter: counter + 1 }));
//   };

//   render() {
//     if (this.state.counter === 5) {
//       throw new Error('I crashed!');
//     }
//     return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
//   }
// }

// export default BuggyCounter;

// //ErrorBoundary.jsx
// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { error: null, errorInfo: null };
//   }

//   componentDidCatch(error, errorInfo) {
//     this.setState({
//       error: error,
//       errorInfo: errorInfo,
//     });
//   }

//   render() {
//     if (this.state.errorInfo) {
//       return (
//         <div>
//           <h2>Something went wrong.</h2>
//           <details style={{ whiteSpace: 'pre-wrap' }}>
//             {this.state.error && this.state.error.toString()}
//             <br />
//             {this.state.errorInfo.componentStack}
//           </details>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;



// Simulation 2:

// In our second simulation we will have two BuggyCounter components, and each one of them will be wrapped up with one ErrorBoundary component
// Note : This time, each BuggyCounter component is in its own error boundary. So if one crashes, the other is not affected

//app.jsx
// import React from 'react';
// import BuggyCounter from './Components/BuggyCounter'; 
// import ErrorBoundary from './Components/ErrorBoundary'; 

// function App() {
//   return (
//     <div className="App">
//       <h1>React Error Boundary Simulation 2</h1>
//       {}
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;


// Simulation 3:

// In our third simulation we have only one BuggyCounter component, and its not beeing wrapped up by ErrorBoundary component
// Note : This time, because the BuggyCounter component is not wrapped up in an error boundary, when it crashes, all the other components will be deleted and a blank page with errors will be displayed.

// //app.jsx
// import React from 'react';
// import BuggyCounter from './Components/BuggyCounter';

// function App() {
//   return (
//     <div className="App">
//       <h1>React Error Boundary Simulation 3</h1>
//       {}
//       <BuggyCounter />
//     </div>
//   );
// }

// export default App;



// Exercise 2 : Lifecycle
// Review

// React Lifecycle:

// Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.

// Today we are going to work on the Updating phase:

// The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component’s state or props.

// React has five built-in methods that gets called, in this order, when a component is updated:

// getDerivedStateFromProps()

// shouldComponentUpdate(): in this method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.

// render()

// getSnapshotBeforeUpdate(): in this method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update. If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

// componentDidUpdate(): this method is called after the component is updated in the DOM.
// The render() method is required and will always be called, the others are optional and will be called if you define them.



// First : Do the exercise xp 4 of yesterday using Class Components



// Part I : shouldComponentUpdate

// Use the shouldComponentUpdate() method and set it to return true.

// If you set the return value of the shouldComponentUpdate() method to false, you won’t be able to change the value of the favoriteColor property to “blue”, (even after clicking on the button)

// Expected output (without the grey border):

// red



// Part II: componentDidUpdate

// When the component is mounting, it will be rendered with the favorite color “red”.

// Expected output (without the grey border):

// red


// 2. When the component has been mounted, a timer changes the state, and the color becomes “yellow”. You will see :

// yellow1


// 3. In the componentDidUpdate method, add a console.log("after update"). Open the Dev Tools, to see when this message is displayed.



// Part III : getSnapshotBeforeUpdate

// Use the getSnapshotBeforeUpdate() method, add a console.log("in getSnapshotBeforeUpdate"). Open the Dev Tools, to see when this message is displayed.

//app.jsx
// import React from 'react';
// import Color from './Components/Color';

// function App() {
//   return (
//     <div>
//       <Color />
//     </div>
//   );
// }

// export default App;

//color.jsx
// import React, { Component } from 'react';

// class Color extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoriteColor: 'red',
//     };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     return true; // can change this to false to prevent updates
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.favoriteColor !== this.state.favoriteColor) {
//       console.log('after update');
//     }
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('in getSnapshotBeforeUpdate');
//     return null;
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoriteColor: 'yellow' });
//     }, 2000);
//   }

//   changeColorToBlue = () => {
//     this.setState({ favoriteColor: 'blue' });
//   };

//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.favoriteColor}</h1>
//         <button onClick={this.changeColorToBlue}>Change Color to Blue</button>
//       </div>
//     );
//   }
// }

// export default Color;



// Exercise 3 : Lifecycle #2
// Instructions
// Review

// React Lifecycle:

// Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.

// Today we are going to work on the Unmounting phase:

// The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

// React has only one built-in method that gets called when a component is unmounted: componentWillUnmount()

// The componentWillUnmount method is called when the component is about to be removed from the DOM.



// Using the previous exercise (Exercise 2 : Lifecycle)

// Add a new property named show to the state object. Set the value of this property to true.

// Add a Class component named Child to the same file. This new component will render a ‘Hello World!’ message in a header tag.

// This new component uses the componentWillUnmount method to alert an unmounted message.

// Render the Child component in your App, only if the value of the show property is set to true.

// Create a “Delete” button that when clicked on (ie. onClick) will call a function that updates the value of the show property to false.

// Initial output (without the grey border):

// initial



// Expected output (without the grey border): On Button Click

// click



// Expected output (without the grey border): Unmounted

// unmounted

//App.jsx

// import React from 'react';
// import Color from './Components/Color';

// function App() {
//   return (
//     <div>
//       <Color />
//     </div>
//   );
// }

// export default App;


//Color.jsx


// import React, { Component } from 'react';

// class Color extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoriteColor: 'red',
//       show: true, 
//     };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     return true; 
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.favoriteColor !== this.state.favoriteColor) {
//       console.log('after update');
//     }
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('in getSnapshotBeforeUpdate');
//     return null;
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favoriteColor: 'yellow' });
//     }, 2000);
//   }

//   changeColorToBlue = () => {
//     this.setState({ favoriteColor: 'blue' });
//   };

 
//   deleteChild = () => {
//     this.setState({ show: false });
//   };

//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.favoriteColor}</h1>
//         <button onClick={this.changeColorToBlue}>Change Color to Blue</button>
        
//         {this.state.show && <Child />}
//         <button onClick={this.deleteChild}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends Component {
//   componentWillUnmount() {
//     alert('The component named Header is about to be deleted');
//   }

//   render() {
//     return <h2>Hello World!</h2>;
//   }
// }

// export default Color;
