import React from 'react'
import { Button } from './Button';
import './Navbar.css'
import  {Link} from 'react-scroll'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from "react";

function Navbar() {

    const [click, setclick] = useState(false);

    const closeMobileMenu = () => setclick(!click)
        

    return (
        <nav className = "navbar">
            <div className="navbar-container container">
                 <Link to = "home" className = "navbar-logo"  isDynamic = {true} spy={true} smooth={true} offset={0} duration={600}>
                        <img  className = "navbar-img"  src="images/logo-2.png"/>
                 </Link>

                  <div className="menu-icon" onClick = {closeMobileMenu}>
                    {click ? <FaTimes/> : <FaBars/>}
                  </div>
                

                <ul className={click ? "navbar-menu active" : "navbar-menu"}>

                 <li className = "nav-item">
                        <Link  onClick = {closeMobileMenu}isDynamic = {true} activeClass="nav-selected" to="home" spy={true} smooth={true} offset={0} duration={500}className="nav-links">
                              Home
                        </Link>
                    </li>   
 
                <li className = "nav-item">
                        <Link onClick = {closeMobileMenu} isDynamic = {true} activeClass="nav-selected" to="proyects" spy={true} smooth={true} offset={0} duration={500} className="nav-links">
                              My work
                        </Link>
                    </li>
                    
                    <li className = "nav-item">
                        <Link  onClick = {closeMobileMenu} isDynamic = {true} activeClass="nav-selected" to="contact" spy={true} smooth={true} offset={-50} duration={1000} className="nav-links">
                              Contact
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
