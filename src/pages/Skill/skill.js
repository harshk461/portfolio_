import React from 'react'
import './skill.css'
import 'animate.css';
import Service from '../Services/service';
import Navbar from '../../components/Navbar/navbar';

export default function Skill() {
    return (
        <div className="skill-body">
            <Navbar />
            <div className="skill-title">
                <span>MY SKILLS</span>
                <div className="underline">
                    <div className="dot"></div>
                </div>
            </div>
            <div className="skill-tray">
                <div className="skill-box animate__animated animate__backInDown">
                    <div className="skill-percent-box">
                        <div className="fill"></div>
                        <div className="value">80%</div>
                    </div>
                    <h1>Front-end Developement</h1>
                </div>
                <div className="skill-box animate__animated animate__backInUp">
                    <div className="skill-percent-box">
                        <div className="fill"></div>
                        <div className="value">80%</div>
                    </div>
                    <h1>Back-end Developement</h1>
                </div>
                <div className="skill-box animate__animated animate__backInDown">
                    <div className="skill-percent-box">
                        <div className="fill"></div>
                        <div className="value">80%</div>
                    </div>
                    <h1> Developement</h1>
                </div>
                <div className="skill-box animate__animated animate__backInUp">
                    <div className="skill-percent-box">
                        <div className="fill"></div>
                        <div className="value">80%</div>
                    </div>
                    <h1>Programming Languages</h1>
                </div>
            </div>
            <div className="skill-percent">
                <div className="percent-box animate__animated animate__backInLeft">
                    <h3>Javascript - <span>(80%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className="percent-box animate__animated animate__backInRight">
                    <h3>Node Js - <span>(60%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "60%" }}></div>
                    </div>
                </div>
                <div className="percent-box animate__animated animate__backInLeft">
                    <h3>React Js - <span>(80%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className="percent-box animate__animated animate__backInRight">
                    <h3>HTML/CSS - <span>(80%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className="percent-box animate__animated animate__backInLeft">
                    <h3>Flutter - <span>(85%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "85%" }}></div>
                    </div>
                </div>
                <div className="percent-box animate__animated animate__backInRight">
                    <h3>Programming Lang. - <span>(85%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "85%" }}></div>
                    </div>
                </div>
            </div>
            <div className="skill-extra">
                <div className="skill-extra-box animate__animated animate__backInLeft">
                    <h2>Programming Languages</h2>
                    <div className="extra-tray">
                        <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience_details-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z">
                                </path>
                            </svg>
                            C/C++
                        </span>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience_details-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z">
                                </path>
                            </svg>
                            Python
                        </span>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience_details-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z">
                                </path>
                            </svg>
                            Dart
                        </span>
                    </div>
                </div>
                <div className="skill-extra-box animate__animated animate__backInRight">
                    <h2>Tools</h2>
                    <div className="extra-tray">
                        <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience_details-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z">
                                </path>
                            </svg>
                            Git
                        </span>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience_details-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z">
                                </path>
                            </svg>
                            GitHub
                        </span>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="experience_details-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z">
                                </path>
                            </svg>
                            Postman
                        </span>
                    </div>
                </div>
            </div>
            <Service />
        </div>
    )
}
