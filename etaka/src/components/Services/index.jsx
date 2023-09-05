
import React from "react";
import './style.css'


export const Services = () => {
    
    return (
        <div className="centred-section">
        <div className="section-container">
            <div className="header">
                <h1 className="title">Services</h1>
            </div>
            <div className="service-content">
                <div className="left-col">
                    <h1 className="mini-title">Give your old elctronics a new life</h1>
                    <p className="service-text">Sell them to us, and we will recycle them and sell the recycled products at a fraction of the cost of new ones.</p>
                    <a href="#"><img src="media/button.png"></img></a>
                </div>
                <div className="right-col">
                    <img className="phone-image" src="media/E-Taka.png"/>
                </div>
            </div>
            </div>
        </div>
    )
}