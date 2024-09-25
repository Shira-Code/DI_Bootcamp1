import React, { Component } from 'react';

class App extends Component {
    state = {
        message: ''
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:5000/api/hello');
        const data = await response.json();
        this.setState({ message: data.message });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default App;
