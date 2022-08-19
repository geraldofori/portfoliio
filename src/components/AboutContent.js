import "./AboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import Develop1 from "../assets/develop1.png";
import Develop2 from "../assets/develop2.jpg";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I</h1>
            <p> I am Software Developer with a lot of 2 years experience yada yada yada you know the rest</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Develop1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Develop2} className="img" alt="true"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent