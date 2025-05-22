import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Proudly made in India. We are committed to delivering quality products and services that cater to every Indian household. Thank you for placing your trust in us.</p>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com/ruchi" target="_blank" rel="noopener noreferrer">
                            <img src={assets.facebook_icon} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/ruchi" target="_blank" rel="noopener noreferrer">
                            <img src={assets.twitter_icon} alt="Twitter" />
                        </a>
                        <a href="https://linkedin.com/company/ruchi" target="_blank" rel="noopener noreferrer">
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className="footer-content-centre">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us </li>
                        <li>Delivey</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@delivey.com</li>
                    </ul>

                </div>

            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 @ RUCHI.com - All Rights Reserved.</p>

        </div>
    )
}

export default Footer