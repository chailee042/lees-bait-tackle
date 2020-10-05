import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GiFishing } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> About Us</h2>
                        <Link to="/services">Locations</Link>
                        <Link to="/products">Fishing</Link>
                        <Link to="/products">Deals</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Hours</h2>
                        <h4> Mon - Fri: 7AM to 7PM</h4>
                        <h4> Sat - Sun: 9AM to 5PM</h4>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                <div className="footer-link-items">
                        <h2> Contact Us</h2>
                        <Link to="/contact">LeesTackle@gmail.com</Link>
                        <Link to="/contact">612-555-5555</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Social Media</h2>
                        <Link to="/">YouTube</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Instagram</Link>
                    </div>
                </div>   
            </div> 
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Lee's Tackle
                            <GiFishing className="bar-logo" />
                        </Link>
                    </div>
                    <small className="website-rights">Lee's Tackle © 2020</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link" 
                            to="/" target="_blank" 
                            aria-label="Youtube"
                        >
                            <FaYoutube />
                        </Link>
                        <Link 
                            className="social-icon-link" 
                            to="/" target="_blank" 
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </Link>
                        <Link 
                            className="social-icon-link" 
                            to="/" target="_blank" 
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </section> 
        </div>
    );
}

export default Footer;
