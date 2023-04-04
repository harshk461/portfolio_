import React from 'react'
import './footer.css'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-social-links">
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
            <div className="footer-desc">
                <span>© 2023, All right reserved <span style={{ color: "#72E2AE" }}>Harshkkk.</span></span>
            </div>
        </footer>
    )
}
