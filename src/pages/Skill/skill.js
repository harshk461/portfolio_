import React from 'react'
import './skill.css'
import 'animate.css';

export default function Skill() {
    return (
        <div className="skill-body">
            <div className="skill-title">
                <span>MY SKILLS</span>
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
                <div className="percent-box">
                    <h3>Javascript - <span>(80%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className="percent-box">
                    <h3>Node Js - <span>(60%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "60%" }}></div>
                    </div>
                </div>
                <div className="percent-box">
                    <h3>React Js - <span>(80%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className="percent-box">
                    <h3>HTML/CSS - <span>(80%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className="percent-box">
                    <h3>Flutter - <span>(85%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "85%" }}></div>
                    </div>
                </div>
                <div className="percent-box">
                    <h3>Programming Lang. - <span>(85%)</span></h3>
                    <div className="percent-bar">
                        <div className="percent-bar-fill" style={{ width: "85%" }}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
