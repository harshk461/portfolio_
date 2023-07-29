import React from 'react'
import { VscSquirrel } from 'react-icons/vsc'
import { FcPhoneAndroid } from 'react-icons/fc'
import { AiOutlineRobot } from 'react-icons/ai'
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
                        <p>Web development is the creation and maintenance of websites and web applications, combining front-end (visual elements) and back-end (server-side functionalities) development to build user-friendly and efficient online experiences.</p>
                    </div>
                </div>
                <div className="service-box animate__backInRight animate__animated">
                    <div className="service-title">
                        <FcPhoneAndroid />
                        <h3>02</h3>
                    </div>
                    <div className="service-desc">
                        <h2>App Development</h2>
                        <p>App development combines UI/UX design, coding, and problem-solving to craft innovative mobile apps. It creates seamless digital experiences, making tasks convenient and enjoyable for users on the go, enhancing their daily lives.</p>
                    </div>
                </div>
                <div className="service-box animate__backInRight animate__animated">
                    <div className="service-title">
                        <AiOutlineRobot />
                        <h3>03</h3>
                    </div>
                    <div className="service-desc">
                        <h2>Machine Learning</h2>
                        <p>Machine learning uses algorithms and statistical models to enable computers to learn from data and improve their performance without explicit programming. From image and speech recognition to personalized recommendations, it fuels innovation across industries, transforming how we interact with technology and solving complex problems in new and efficient ways.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
