import React from 'react'
import './About.css'
import {SiReact} from 'react-icons/si';
import {DiJavascript1} from 'react-icons/di';
import {DiHtml5} from 'react-icons/di';
import {DiCss3} from 'react-icons/di';
import {FaBootstrap} from 'react-icons/fa';
import {SiAdobexd} from 'react-icons/si';








function About() {
    return (
        <div className = "About-container" id = "about">
            <div className="my-info-section">

              <div className="about__img-container">
                <img src="images/julio.jpg" alt="" className="my-img"/>
              </div>
              <div className="description-container">
                 <h2 className = "about-title">Who i am?</h2>
                 <p className="description">I'm a software engineer based in Querétato-México. <br/>
                  I help converting ideas and visions into meaningful and useful products.</p>
              </div>

            </div>


            <div className="tech-stack-container">

                <h3 className = "skills-title">My skills</h3>

                <div className="tech-stack">
                 <SiReact  
                 className = "icon-stack" 
                 alt = "React"
                 size = {150}/>
                 <DiJavascript1 
                 className = "icon-stack" 
                 alt = "Javscript"
                 size = {150}/>
                 <DiHtml5 
                 className = "icon-stack" 
                 alt = "Html 5"
                 size = {150}/>
                 <DiCss3 
                 className = "icon-stack" 
                 alt = "Css3"
                 size = {150}/>
                 <FaBootstrap
                 className = "icon-stack" 
                 alt = "Bootstrap"
                 size = {150}
                 />
                 <SiAdobexd
                 className = "icon-stack" 
                 alt = "Bootstrap"
                 size = {150}
                 />
              

                </div>
            </div>

            

           
            

        </div>
    )
}

export default About
