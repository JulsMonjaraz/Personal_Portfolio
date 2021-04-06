import React from 'react'
import './About.css'

function About() {
    return (
        <div className = "About-container" id = "about">
            <div className="about__img-container">
                <img src="images/julio.jpg" alt="" className="my-img"/>
            </div>
            <div className="description-container">
            <h2 className = "about-title">About me</h2>
              <p className="description">I'm a software engineer based in Querétato-México. <br/>
              I help converting ideas and visions into meaningful and useful products.</p>
            </div>
           
            

        </div>
    )
}

export default About
