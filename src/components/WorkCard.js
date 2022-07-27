import "./WorkCard.css";
import React from 'react';
import alphaprep from "../assets/alphaprep.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={alphaprep} alt=""/>
                <h2 className="project-title">AlphaPrep</h2>
                <div className="pro-details">
                    <p>This is the project description</p>
                    <div className="pro-btns">
                      <NavLink to="github.com" className="btn">View</NavLink>
                      <NavLink to="github.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WorkCard