import React, { Component } from 'react';

***need to set the state and render for the search ***

class ExampleClass extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            text:              }
    };
    console.log("1=> constructor");
}

getUsers = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        this.setState({ users });
    } catch (error) {
        console.log(error);
    }
};

handleChange = (e) => {
    console.log(e.target.value);
}

componentDidMount = () => {
    console.log("3=> componentDidMount");
}

class ExampleClass extends React.Component {
    componentDidMount = () => {
        this.getUsers()

    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log(prevS
}