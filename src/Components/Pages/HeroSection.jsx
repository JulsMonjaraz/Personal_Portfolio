import React,{useState,useEffect} from 'react'
import { Button } from '../Button';
import './HeroSection.css'
import {AiFillGithub} from 'react-icons/ai';
import {RiFacebookCircleFill} from 'react-icons/ri';
import {AiFillInstagram} from 'react-icons/ai';

import { useTranslation } from "react-i18next"




function HeroSection() {

  const [t] =  useTranslation("global")

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
             <h1>{t("hero.title")}</h1>
             <p>{t("hero.subtitle")}</p>
             {
               button 
               ? 
               (
                <Button 
                classN = "hero__btn"
                children = {t("hero.btn-text")}
                buttonStyle = {'btn--outline'}
                buttonSize = {'btn--medium'}
                />
               )
               :
               (
                <Button 
                classN = "hero__btn"
                children = {t("hero.btn-text")}
                buttonStyle = {'btn--outline'}
                buttonSize = {'btn--large'}
                />
               )
             }
             
             <div className="social-media">
             <span  className = "icon-btn">
                <AiFillGithub 
                className = "social-icon"
                onClick = {() => openInNewTab('https://github.com/JulsMonjaraz')}/>
             </span>
             
             <span className = "icon-btn">
               <RiFacebookCircleFill 
               className = "social-icon"
               onClick = {() => openInNewTab('https://www.facebook.com/ash.cahu')}/>
             </span>

             <span className = "icon-btn">
               <AiFillInstagram 
                className = "social-icon"
                onClick = {() => openInNewTab('https://www.instagram.com/juls_45733/')}/>
             </span>
             
         </div>
         </div>
        </div>
    )
}

export default HeroSection
