// src/components/Example3.js
import React, { Component } from 'react';
import data from '../data.json'; // Adjust the path if needed

class Example3 extends Component {
    render() {
        return (
            <div>
                <h2>Experience</h2>
                {data.Experiences.map((experience, index) => (
                    <div key={index}>
                        <h3>{experience.companyName}</h3>
                        <img src={experience.logo} alt={`${experience.companyName} logo`} style={{ width: '50px', height: '50px' }} />
                        <a href={experience.url} target="_blank" rel="noopener noreferrer">Company Link</a>
                        {experience.roles.map((role, roleIndex) => (
                            <div key={roleIndex}>
                                <h4>{role.title}</h4>
                                <p>{role.description}</p>
                                <p>{role.startDate} - {role.endDate} ({role.location})</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Example3;
