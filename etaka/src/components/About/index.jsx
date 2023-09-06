import React from "react";
import './style.css';
import { VCutout } from "../../atoms";



export const About = () => {
    return (
        <div className="centred-section">
          <div className="section-container">
            <div className="header">
                <h1 className="title">About Us</h1>
                <h2>Vision</h2>
                <p>To empower responsible e-waste disposal in Kenya.</p>
            </div>
      <div className="header">
      <h1 className="title">Core Values</h1>
      </div>
        <div className="values-container">
        <VCutout backgroundColor="#093121" triangleColor="#093121" h1="Customer Satisfaction"  text="We are committed to providing a high-quality service to its customers by making it easy for people to recycle their e-waste, and providing them with a fair price for their old devices." imageUrl="images/Vector.png" />
        <VCutout backgroundColor="#093121" triangleColor="#093121" h1="Community Engagement"  text="We seek to engage with the community and raising awareness about the importance of e-waste recycling. " imageUrl="images/Vector (2).png"   />
        <VCutout backgroundColor="#093121" triangleColor="#093121" h1="Sustainabilty"  text="We are committed to providing a high-quality service to its customers by making it easy for people to recycle their e-waste, and providing them with a fair price for their old devices." imageUrl="images/Vector (3).png" />
      </div>
      </div>
      </div>
    );
  };