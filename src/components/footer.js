import React from 'react';

import IconFacebook from '../images/icon-facebook.svg';
import IconInstagram from '../images/icon-instagram.svg';
import IconPinterest from '../images/icon-pinterest.svg';
import IconTwitter from '../images/icon-twitter.svg';

const Footer = () => {
    return (
        <div className="footer d-flex">
            <h1>Shortly</h1>
            <div className="footer-links d-flex justify-content-around">
                <div>
                    <h2>Features</h2>
                    <ul>
                        <li><a href="#link-shortening">Link Shortening</a></li>
                        <li><a href="#branded-links">Branded Links</a></li>
                        <li><a href="#Analytics">Analytics</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Resources</h2>
                    <ul>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#developers">Developers</a></li>
                        <li><a href="#support">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Company</h2>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="careers">Careers</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-icons">
                <img src={IconFacebook} alt="Facebook Icon"/>
                <img src={IconTwitter} alt="Twitter Icon"/>
                <img src={IconPinterest} alt="Pinterest Icon"/>
                <img src={IconInstagram} alt="Instagram Icon"/>
            </div>
        </div>
    );
};

export default Footer;