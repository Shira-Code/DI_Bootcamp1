//exercise 2
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

//exercise 3

import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true, 
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true; 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      console.log('after update');
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  changeColorToBlue = () => {
    this.setState({ favoriteColor: 'blue' });
  };

 
  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColorToBlue}>Change Color to Blue</button>
        
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete Header</button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert('The component named Header is about to be deleted');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

export default Color;
