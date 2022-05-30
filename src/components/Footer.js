import "./Footer.css";

import React from 'react';

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Accra, Ghana</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    +233501236800</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    oforige@icloud.com</h4>
                </div>
            </div>
            <div className="right"></div>
            <h4>About</h4>
            <p>Hi there, I'm Gerald Ofori. A software engineer who speciliazes not only in frontend development but can work as a backend developer as well.</p>
            <div className="socials">
            <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
            <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
            <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
            </div>
        </div>
    </div>
  )
}

export default Footer
