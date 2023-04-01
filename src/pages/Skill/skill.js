import React from 'react'
import './skill.css'

export default function Skill() {
    return (
        <div className="skill-body">
            <div className="skill-title">
                <span>MY SKILLS</span>
            </div>
            <div className="skill-tray">
                <div className="skill-box">
                    <div className="skill-percent-box">
                        <div className="fill"></div>
                        <div className="value">80%</div>
                    </div>
                    <h1>Front-end Developement</h1>
                </div>
                <div className="skill-box">
                    <div className="skill-percent-box">
                        <div className="fill"></div>
                        <div className="value">80%</div>
                    </div>
                    <h1>Back-end Developement</h1>
                </div>
                <div className="skill-box">
                    <div className="skill-percent-box">
                        <div className="fill"></div>
                        <div className="value">80%</div>
                    </div>
                    <h1> Developement</h1>
                </div>
                <div className="skill-box">
                    <div className="skill-percent-box">
                        <div className="fill"></div>
                        <div className="value">80%</div>
                    </div>
                    <h1>Programming Languages</h1>
                </div>
            </div>
            <div className="skill-percent">
                <div className="percent-box">
                    <h3>Javascript - <span>(85%)</span></h3>
                </div>
            </div>

        </div>
    )
}
