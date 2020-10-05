import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { GiFishing } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClicked = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container fa-bars fa-times">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Lee's Tackle <GiFishing className="navbar-icon" />
                    </Link>
                    <div 
                        className="menu-icon" 
                        onClick={handleClicked}
                    >
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className="nav-links" 
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/products" 
                                className="nav-links" 
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/service" 
                                className="nav-links" 
                                onClick={closeMobileMenu}
                            >
                                Service
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/contact"
                                className="nav-links" 
                                onClick={closeMobileMenu}
                             >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
