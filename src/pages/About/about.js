import React from 'react'
import aboutImage from '../../assets/about-image.jpg'
import './about.css'
import 'animate.css';
import Navbar from '../../components/Navbar/navbar';

export default function About() {
    return (
        <div className="about-body">
            <Navbar />
            <div className="about-title">
                <h2>About Me</h2>
                <div className="underline">
                    <div className="dot"></div>
                </div>
            </div>
            <div className="about-content animate__animated animate__bounceInUp">
                <div className="about-left">
                    <img src={aboutImage} />
                    <span><div className="image-dot-top image-dot"></div></span>
                    <span><div className="image-dot-bottom image-dot "></div></span>
                    <span><div className="image-dot-left image-dot "></div></span>
                    <span><div className="image-dot-right image-dot"></div></span>
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
                        <a className="resume-download" href='https://drive.google.com/file/d/1Fzo83I1CTRYu5SMUPLZoYPSVbJCvv48q/view' target="_blank">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
