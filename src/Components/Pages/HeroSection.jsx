import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { Button } from '../Button';
import './HeroSection.css'
import Navbar from '../Navbar';
import {AiFillGithub} from 'react-icons/ai';
import {RiFacebookCircleFill} from 'react-icons/ri';
import {AiFillInstagram} from 'react-icons/ai';




function HeroSection() {

  useEffect(() => {
    showButton()
    console.log('running');
  }, [])

  const [button, setButton] = useState(false);

  const showButton = ()=>{
        if (window.innerWidth < 470) {
            setButton(true);      
        }
        else{
            setButton(false);
        }

    }

    window.addEventListener('resize',showButton)
    
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    
      

    return (
        <div className = "hero-container" id = "home">
         <div className="content">
             <h1>Hi. my name is Julio</h1>
             <p>I'am a software engineer.</p>
             {
               button 
               ? 
               (
                <Button 
                classN = "hero__btn"
                children = "Let's talk"
                buttonStyle = {'btn--outline'}
                buttonSize = {'btn--medium'}
                />
               )
               :
               (
                <Button 
                classN = "hero__btn"
                children = "Let's talk"
                buttonStyle = {'btn--outline'}
                buttonSize = {'btn--large'}
                />
               )
             }
             
             <div className="social-media">
             <a  className = "icon-btn">
                <AiFillGithub 
                className = "social-icon"
                onClick = {() => openInNewTab('https://github.com/JulsMonjaraz')}/>
             </a>
             
             <a className = "icon-btn">
               <RiFacebookCircleFill 
               className = "social-icon"
               onClick = {() => openInNewTab('https://www.facebook.com/ash.cahu')}/>
             </a>

             <a className = "icon-btn">
               <AiFillInstagram 
                className = "social-icon"
                onClick = {() => openInNewTab('https://www.instagram.com/juls_45733/')}/>
             </a>
             
         </div>
         </div>
        </div>
    )
}

export default HeroSection
