import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import './work.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import { BiMobileAlt } from 'react-icons/bi'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import Footer from '../../components/Footer/footer'

export default function Work() {
    return (
        <div className="work-body">
            <Navbar />
            <div className="work-title">
                <h3>MY WORKS</h3>
                <div className="underline">
                    <div className="dot"></div>
                </div>
            </div>
            <div className="work-content">
                <div className="work-box">
                    <div className="work-image">
                        <div className="work-image-banner">
                            <div className="work-icon">
                                <a href="https://github.com/harshk461/VTalk"><BiMobileAlt size={25} /></a>
                            </div>
                            <div className="work-icon">
                                <a href="https://github.com/harshk461/ChatApp"><FaGithub size={25} /></a>
                            </div>
                        </div>
                        <img src={img1} alt='Chat App' />
                    </div>
                    <div className="work-desc">
                        <span className="work-desc-title">Chat-App</span>
                        <span className="work-desc-desc">Interactive Chat App</span>
                    </div>
                </div>
                <div className="work-box">
                    <div className="work-image">
                        <div className="work-image-banner">
                            <div className="work-icon">
                                <a href="https://github.com/harshk461/Crypto-Tracker"><FaGithub size={25} /></a>
                            </div>
                        </div>
                        <img src={img2} alt='Music Player' />
                    </div>
                    <div className="work-desc">
                        <span className="work-desc-title">Crypto-Tracker</span>
                        <span className="work-desc-desc">Manage your crypto</span>
                    </div>
                </div>
                <div className="work-box">
                    <div className="work-image">
                        <div className="work-image-banner">
                            <div className="work-icon">
                                <a href="https://blog-hk.netlify.app/"><FaGlobe size={25} /></a>
                            </div>
                            <div className="work-icon">
                                <a href="https://github.com/harshk461/Blog"><FaGithub size={25} /></a>
                            </div>
                        </div>
                        <img src={img3} alt='Blogs' />
                    </div>
                    <div className="work-desc">
                        <span className="work-desc-title">Blog UI</span>
                        <span className="work-desc-desc">Gain Knowledge</span>
                    </div>
                </div>
                <div className="work-box">
                    <div className="work-image">
                        <div className="work-image-banner">
                            <div className="work-icon">
                                <a href="https://github.com/harshk461/ChatApp"><FaGithub size={25} /></a>
                            </div>
                        </div>
                        <img src={img4} alt='Billing GUI' />
                    </div>
                    <div className="work-desc">
                        <span className="work-desc-title">Billing GUI(Python)</span>
                        <span className="work-desc-desc">Make your billing handy</span>
                    </div>
                </div>
                <div className="work-box">
                    <div className="work-image">
                        <div className="work-image-banner">
                            <div className="work-icon">
                                <a href="https://weather-hk.netlify.app/"><FaGlobe size={25} /></a>
                            </div>
                            <div className="work-icon">
                                <a href="https://github.com/harshk461/weather-hk"><FaGithub size={25} /></a>
                            </div>
                        </div>
                        <img src={img5} alt='Weather' />
                    </div>
                    <div className="work-desc">
                        <span className="work-desc-title">Weather Forecast</span>
                        <span className="work-desc-desc">Get current weather</span>
                    </div>
                </div>
                <div className="work-box">
                    <div className="work-image">
                        <div className="work-image-banner">
                            <div className="work-icon">
                                <a href="https://music1-hk.netlify.app/"><FaGlobe size={25} /></a>
                            </div>
                            <div className="work-icon">
                                <a href="https://github.com/harshk461/music-player1"><FaGithub size={25} /></a>
                            </div>
                        </div>
                        <img src={img6} alt='Music Player' />
                    </div>
                    <div className="work-desc">
                        <span className="work-desc-title">Music Player</span>
                        <span className="work-desc-desc">Enjoy some music...</span>
                    </div>
                </div>
                <div className="work-box">
                    <div className="work-image">
                        <div className="work-image-banner">
                            <div className="work-icon">
                                <a href="https://github.com/harshk461/Quotely"><FaGithub size={25} /></a>
                            </div>
                        </div>
                        <img src={img7} alt='Quotely' />
                    </div>
                    <div className="work-desc">
                        <span className="work-desc-title">Quotely</span>
                        <span className="work-desc-desc">Post some quotes...</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
