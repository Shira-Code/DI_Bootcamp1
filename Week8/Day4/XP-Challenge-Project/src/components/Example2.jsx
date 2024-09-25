// src/components/Example2.js
import React, { Component } from 'react';
import data from '../data.json'; // Adjust the path if needed

class Example2 extends Component {
    render() {
        return (
            <div>
                <h2>Skills</h2>
                {data.Skills.map((skillCategory, index) => (
                    <div key={index}>
                        <h3>{skillCategory.Area}</h3>
                        <ul>
                            {skillCategory.SkillSet.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                    {skill.Name} {skill.Hot ? '🔥' : ''}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default Example2;
