import React from 'react'
import { Button } from './Button';
import './Navbar.css'
import  {Link} from 'react-scroll'

function Navbar() {
    return (
        <div className = "navbar">
            <div className="navbar-container container">
                    <Link to = "#" className = "navbar-logo">
                        <img  className = "navbar-img"  src="images/enzo-white.png"/>
                        <p>Julio Monjaraz</p>
                    </Link>
                

                <ul className="navbar-menu">
 
                <li className = "nav-item">
                        <Link activeClass="active" to="proyects" spy={true} smooth={true} offset={-50} duration={1000} className="nav-links">
                              My work
                        </Link>
                    </li>
                    
                    <li className = "nav-item">
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={1000} className="nav-links">
                              About me
                        </Link>
                    </li>

                    <li className = "nav-item">
                        <Link  activeClass="active" to="" spy={true} smooth={true} offset={0} duration={500}className="nav-links">
                              Contact me
                        </Link>
                    </li>

                    

                </ul>
            </div>
        </div>
    )
}

export default Navbar;
