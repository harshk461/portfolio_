import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
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
                            () => {
                                console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                            }
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
                    <div className="social-link">
                        <div className="link">
                            <a href="/"><FaGithub size={20} /></a>
                        </div>
                        <div className="link-hover">
                            <a href="/"><FaGithub size={20} /></a>
                        </div>
                    </div>
                    <div className="social-link">
                        <div className="link">
                            <a href="/"><FaInstagram size={20} /></a>
                        </div>
                        <div className="link-hover">
                            <a href="/"><FaInstagram size={20} /></a>
                        </div>
                    </div>
                    <div className="social-link">
                        <div className="link">
                            <a href="/"><FaFacebookF size={20} /></a>
                        </div>
                        <div className="link-hover">
                            <a href="/"><FaFacebookF size={20} /></a>
                        </div>
                    </div>
                    <div className="social-link">
                        <div className="link">
                            <a href="/"><FaLinkedinIn size={20} /></a>
                        </div>
                        <div className="link-hover">
                            <a href="/"><FaLinkedinIn size={20} /></a>
                        </div>
                    </div>
                    <div className="social-link">
                        <div className="link">
                            <a href="/"><FaTwitter size={20} /></a>
                        </div>
                        <div className="link-hover">
                            <a href="/"><FaTwitter size={20} /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
