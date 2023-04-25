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
    let [isLoading, setisLoading] = useState(false);
    const reset = () => {
        setname('');
        setemail('');
        setmessage('');
        setsubject('');
    };
    const response_message = (name) => {
        const res_msg = `
        Dear ${name},
        
        Thank you for reaching out to me through my portfolio's contact page. I appreciate your interest in my work and the time you took to send me a message.
        
        I want to let you know that I have received your message and will respond to you as soon as possible. If you have any urgent inquiries, please don't hesitate to let me know.
        
        Thank you again for your message, and I look forward to connecting with you soon.
        
        Best regards,
        Harsh
        `;
        return res_msg;
    }
    const handleSubmit = async () => {
        var new_load = true;
        setisLoading(new_load);
        if (name === '' || email === '' || subject === '' || message === '') {
            toast.warning("Enter all fields");
        }
        else {
            new_load = true;
            setisLoading(new_load);
            await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, {
                reply_to: "hk2152573@gmail.com",
                name: name.toUpperCase,
                email: email,
                subject: subject,
                message: message,
            }, process.env.REACT_APP_EMAILJS_USERID)
                .then(res => {
                    if (res.text === 'OK') {
                        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID_2, {
                            name: name,
                            message: response_message(name),
                            email: email,
                            reply_to: email,
                        }, process.env.REACT_APP_EMAILJS_USERID)
                            .then(res => {
                                if (res.text === 'OK') {
                                    console.log("Sent");
                                }
                            }).catch((e) => {
                                toast.error("Error Occurred");
                            });
                        toast.success("Message sent successfully...");
                    }
                })
                .catch((err) => {
                    toast.error("Error Occurred...");
                });
            new_load = false;
            setisLoading(new_load);
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
