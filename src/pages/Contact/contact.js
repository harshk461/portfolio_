import React, { useState } from 'react'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import Navbar from '../../components/Navbar/navbar'
import './contact.css'
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/loader'
import Footer from '../../components/Footer/footer'

export default function Contact() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const reset = () => {
        setname('');
        setemail('');
        setmessage('');
        setsubject('');
    };

    const handleSubmit = async () => {
        if (name === '' || email === '' || subject === '' || message === '') {
            toast.warning("Enter all fields");
        }
        else {
            setisLoading(true);
            await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID.toString(), process.env.REACT_APP_EMAILJS_TEMPLATE_ID.toString(), {
                reply_to: "hk2152573@gmail.com",
                name: name.toUpperCase,
                email: email,
                subject: subject,
                message: message,
            }, process.env.REACT_APP_EMAILJS_USERID.toString())
                .then(res => {
                    if (res.text === 'OK') {
                        toast.success("Message sent successfully...");
                    }
                })
                .catch((err) => {
                    toast.error("Error Occurred...");
                });
            setisLoading(false);
            reset();
        }

    }

    return (
        <div className="contact-body">
            <Navbar />
            <div className="contact-title">
                <h3>CONTACT US</h3>
                <div className="underline">
                    <div className="dot"></div>
                </div>
            </div>
            <div className="contact-content">
                <div className="contact-left">
                    <div className="contact-left-header">
                        <h2 style={{ fontSize: "1.5rem" }}>Contact Information</h2>
                        <p style={{ color: "gray", marginTop: "10px", lineHeight: "1.1", fontSize: "1.2rem" }}>
                            Welcome to my portfolio website! If you have any questions or inquiries about my work, feel free to get in touch with me. You can reach me by filling out the contact form below or by sending an email to the address provided. I will do my best to respond as soon as possible. Thank you for your interest in my portfolio and I look forward to hearing from you!
                        </p>
                    </div>
                    <div className="divider" style={{ width: "80px", height: "5px", borderRadius: "20px", backgroundColor: "grey" }}>

                    </div>
                    <div className="contact-left-tray">
                        <div className="contact-box">
                            <div className="contact-box-left">
                                <div className="box-icon">
                                    <FaPhoneAlt size={25} />
                                </div>
                            </div>
                            <div className="contact-box-right">
                                <h3>Contact on phone</h3>
                                <p>+91 8595568214</p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-box-left">
                                <div className="box-icon">
                                    <FaEnvelope size={25} />
                                </div>
                            </div>
                            <div className="contact-box-right">
                                <h3>Contact on mail</h3>
                                <p>hk2152573@gmail.com</p>
                                <p>testmailhk102@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-box-left">
                                <div className="box-icon">
                                    <FaLocationArrow size={25} />
                                </div>
                            </div>
                            <div className="contact-box-right">
                                <h3>Contact on Address</h3>
                                <p>Dwarka,Delhi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="input-field-box">
                        <p>Name</p>
                        <input type="text" placeholder='Enter your name...' value={name} onChange={e => setname(e.target.value)} />
                    </div>
                    <div className="input-field-box">
                        <p>Email</p>
                        <input type="text" placeholder='Enter your email...' value={email} onChange={e => setemail(e.target.value)} />
                    </div>
                    <div className="input-field-box">
                        <p>Subject</p>
                        <input type="text" placeholder='Enter Subject..' value={subject} onChange={e => setsubject(e.target.value)} />
                    </div>
                    <div className="input-field-box">
                        <p>Message</p>
                        <textarea name="message" placeholder='Enter your message...' value={message} onChange={e => setmessage(e.target.value)} ></textarea>
                    </div>
                    <div className="submit-tray">
                        <button className="submit" onClick={handleSubmit}>SEND MAIL</button>
                        <Loader display={isLoading} />
                    </div>
                </div>
            </div>

            <ToastContainer />
            <Footer />
        </div>
    )
}
