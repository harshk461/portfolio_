import React from 'react'
import { VscSquirrel } from 'react-icons/vsc'
import { FcPhoneAndroid } from 'react-icons/fc'
import './service.css'
import 'animate.css'

export default function Service() {
    return (
        <div className="service-body">
            <div className="service-title-box">
                <h3>Services</h3>
                <div className="underline">
                    <div className="dot"></div>
                </div>
            </div>
            <div className="service-tray">
                <div className="service-box animate__animated animate__backInLeft">
                    <div className="service-title">
                        <VscSquirrel />
                        <h3>01</h3>
                    </div>
                    <div className="service-desc">
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem dolorem et quasi sint debitis quae saepe! Incidunt, minima possimus?</p>
                    </div>
                </div>
                <div className="service-box animate__backInRight animate__animated">
                    <div className="service-title">
                        <FcPhoneAndroid />
                        <h3>02</h3>
                    </div>
                    <div className="service-desc">
                        <h2>App Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quidem dolorem et quasi sint debitis quae saepe! Incidunt, minima possimus?</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
