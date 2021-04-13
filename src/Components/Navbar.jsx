import React from 'react'
import './Navbar.css'
import  {Link} from 'react-scroll'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from "react";
import { useTranslation } from "react-i18next"


function Navbar() {

    const [t,i18n] = useTranslation("global")

    const [click, setclick] = useState(false);

    const closeMobileMenu = () => setclick(!click)
        

    return (
        <nav className = "navbar">
            <div className="navbar-container container">
                 <Link to = "home" className = "navbar-logo"  isDynamic = {true} spy={true} smooth={true} offset={0} duration={600}>
                        <img  className = "navbar-img"  src="images/logo-2.png" alt = "logo"/>
                 </Link>

                  <div className="menu-icon" onClick = {closeMobileMenu}>
                    {click ? <FaTimes/> : <FaBars/>}
                  </div>
                

                <ul className={click ? "navbar-menu active" : "navbar-menu"}>

                 <li className = "nav-item">
                        <Link  onClick = {closeMobileMenu}isDynamic = {true} activeClass="nav-selected" to="home" spy={true} smooth={true} offset={0} duration={500}className="nav-links">
                              {t("navbar.home")}
                        </Link>
                    </li>   
 
                <li className = "nav-item">
                        <Link onClick = {closeMobileMenu} isDynamic = {true} activeClass="nav-selected" to="proyects" spy={true} smooth={true} offset={-30} duration={500} className="nav-links">
                              {t("navbar.work")}
                        </Link>
                    </li>
                    
                    <li className = "nav-item">
                        <Link  onClick = {closeMobileMenu} isDynamic = {true} activeClass="nav-selected" to="contact" spy={true} smooth={true} offset={0} duration={1000} className="nav-links">
                             {t("navbar.contact")}
                        </Link>
                    </li>

                    <li className = "nav-item">
                            <img className = "lg-logo"onClick = {() => i18n.changeLanguage("es")} src="images/mex-logo.png" alt="spanih"/>
                    </li>

                    <li className = "nav-item">
                            <img className = "lg-logo"onClick = {() => i18n.changeLanguage("en")} src="images/usa-logo.png" alt="english"/>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
