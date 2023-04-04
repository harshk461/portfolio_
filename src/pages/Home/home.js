import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import './home.css'
import userLogo from '../../assets/user_logo.png'

export default function Home() {
    return (
        <div className="home-body">
            <Navbar />
            <div className="home-content">
                <div className="home-image">
                    <img src={userLogo} />
                </div>
                <div className="home-title">
                    <h1>Hi, I am <TypeAnimation
                        sequence={[
                            'Harsh', // Types 'One'
                            2000, // Waits 1s
                            'Full-stack Developer', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'App Developer', // Types 'Three' without deleting 'Two'
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    /></h1>
                </div>
                <div className="home-desc">
                    <h7>Code your way to success with a developer who knows web and app like the back of their screen!</h7>
                </div>
                <div className="home-socials-link">
                    <a href="https://github.com/harshk461" target="_blank">
                        <div className="social-link">
                            <div className="link">
                                <FaGithub size={25} />
                            </div>
                            <div className="link-hover">
                                <FaGithub size={25} />
                            </div>
                        </div>
                    </a>
                    <a href="https://instagram.com/harshk_8597?igshid=ZDdkNTZiNTM=" target="_blank">
                        <div className="social-link">
                            <div className="link">
                                <FaInstagram size={25} />
                            </div>
                            <div className="link-hover">
                                <FaInstagram size={25} />
                            </div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/harshk87/" target="_blank">
                        <div className="social-link">
                            <div className="link">
                                <FaLinkedinIn size={25} />
                            </div>
                            <div className="link-hover">
                                <FaLinkedinIn size={25} />
                            </div>
                        </div>
                    </a>
                    <a href="https://leetcode.com/hk2152573/" target="_blank">
                        <div className="social-link">
                            <div className="link">
                                <SiLeetcode size={25} />
                            </div>
                            <div className="link-hover">
                                <SiLeetcode size={25} />
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}
