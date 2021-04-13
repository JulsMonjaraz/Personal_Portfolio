import React from 'react'
import {AiFillGithub} from 'react-icons/ai';
import {RiFacebookCircleFill} from 'react-icons/ri';
import {AiFillInstagram} from 'react-icons/ai';
import './Footer.css'

function Footer() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-text-container">
                <p className = "footer-text">Copyriht © 2021 @Joules</p>
                <p className = "footer-text"> All rights reserved</p>

            </div>
            <div className="footer-social-media">
                <span  className = "icon-btn" href = "#">
                 <AiFillGithub 
                  size = {30}
                  className = "social-icon"
                onClick = {() => openInNewTab('https://github.com/JulsMonjaraz')}/>
                 </span>
             
               <span className = "icon-btn" href = "#">
                 <RiFacebookCircleFill 
                 size = {30}
                 className = "social-icon"
                 onClick = {() => openInNewTab('https://www.facebook.com/ash.cahu')}/>
               </span>

               <span className = "icon-btn" href = "#">
                 <AiFillInstagram 
                  size = {30}
                  className = "social-icon"
                  onClick = {() => openInNewTab('https://www.instagram.com/juls_45733/')}/>
               </span>
            
              </div>

            </div>

        </footer>
    )
}

export default Footer