import React from 'react'
import aboutImage from '../../assets/about-image.jpg'
import './about.css'
import 'animate.css';

export default function About() {
    return (
        <div className="about-body">
            <div className="about-title">
                <h2>About Me</h2>

            </div>
            <div className="about-content animate__animated animate__bounceInUp">
                <div className="about-left">
                    <img src={aboutImage} />
                </div>
                <div className="about-right">
                    <div className="about-right-content">
                        <div className="about-right-content-title">
                            <h3>Hi,I am <span>Harsh</span></h3>
                        </div>
                        <ul>
                            <li>Name: <span>Harsh</span></li>
                            <li>Age: <span>19 years</span></li>
                            <li>Nationality: <span>Indian</span></li>
                            <li>Languages: <span>English,Hindi</span></li>
                            <li>Freelance: <span>Available</span></li>
                        </ul>
                        <button className="resume-download">Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
