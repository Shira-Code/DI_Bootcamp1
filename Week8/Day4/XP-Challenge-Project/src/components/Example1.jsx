// src/components/Example1.js
import React, { Component } from 'react';
import data from '../data.json'; // Adjust the path if needed

class Example1 extends Component {
    render() {
        return (
            <div>
                <h2>Social Media Links</h2>
                <ul>
                    {data.SocialMedias.map((link, index) => (
                        <li key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Example1;
