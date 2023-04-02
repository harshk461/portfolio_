import React from 'react'
import './education.css'
import { Cat } from 'react-kawaii'

export default function Education() {
    return (
        <div className="education-body">
            <div className="education-title">
                <h3>Education</h3>
                <div className="underline">
                    <div className="dot"></div>
                </div>
            </div>
            <div className="education-content">
                <div className="education-box">
                    <div className="education-year">
                        <p>2021-2025</p>
                    </div>
                    <div className="divider" style={{ width: "10px", height: "50px", backgroundColor: "white", borderRadius: "50px" }}></div>
                    <div className="education-desc">
                        <span>Netaji Subhas University of Technology</span>
                        <span>Branch: Information Technology</span>
                    </div>
                </div>
                <div className="education-box">
                    <div className="education-year">
                        <p>2021</p>
                    </div>
                    <div className="divider" style={{ width: "10px", height: "50px", backgroundColor: "white", borderRadius: "50px" }}></div>
                    <div className="education-desc">
                        <span>Kendriya Vidyalaya Chhawla</span>
                        <span>Class : 12th (Percentage: 88.8%)</span>
                    </div>
                </div>
                <div className="education-box">
                    <div className="education-year">
                        <p>2019</p>
                    </div>
                    <div className="divider" style={{ width: "10px", height: "50px", backgroundColor: "white", borderRadius: "50px" }}></div>
                    <div className="education-desc">
                        <span>Kendriya Vidyalaya Chhawla</span>
                        <span>Class : 10th (Percentage: 86.8%)</span>
                    </div>
                </div>
            </div>
            <div className="education-icon" style={{ marginTop: "40px" }}>
                <Cat size={320} mood="excited" color="#596881" />
            </div>
        </div>
    )
}
