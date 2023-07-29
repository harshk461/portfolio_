import React from 'react'

export default function Skill_Box({ percent, name, animate }) {
    return (
        <div className={`percent-box animate__animated ${animate}`}>
            <h3>{name} - <span>({percent}%)</span></h3>
            <div className="percent-bar">
                <div className="percent-bar-fill" style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    )
}
