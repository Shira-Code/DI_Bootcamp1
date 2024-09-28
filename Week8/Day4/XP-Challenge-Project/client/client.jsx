import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    inputValue: '',
    responseMessage: ''
  };

  async componentDidMount() {
    const response = await fetch('/api/hello');
    const data = await response.json();
    this.setState({ message: data.message });
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: this.state.inputValue }),
    });

    const result = await response.json();
    this.setState({ responseMessage: result.message });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h2>{this.state.responseMessage}</h2>
      </div>
    );
  }
}

export default App;
