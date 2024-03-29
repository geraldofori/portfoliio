import "./HeroImg.css";

import React from 'react'

import CodeBackground from "../assets/code_background.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={CodeBackground} alt="Background_Image"/>
        </div>
        <div className="content">
            <p>Hi, I'm Gerald Ofori</p>
            <h2>A Computer/Software</h2>
            <h1>Engineer</h1><br/>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>

    </div>
  )
}

export default HeroImg