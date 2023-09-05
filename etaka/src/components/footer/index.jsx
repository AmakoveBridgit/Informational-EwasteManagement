import React from "react";
import { useState } from "react";
import './style.css'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-section">

                    <h4>COMPANY</h4>
                    <ul>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>OFFICES</h4>
                    <ul>
                        <li>
                            <a href="#">Karen, Nairobi</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <a href="#">Tel: +254000034278</a>
                        </li>
                        <li>
                            <a href="#">info@e-taka.com</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="foot-section">
                    <ul className="social-icons">
                        <li>
                            <a href="#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>

                    <small>E-Taka 2023, all rights reserved</small>
                </div>
                </div>
        </footer>
    );
};