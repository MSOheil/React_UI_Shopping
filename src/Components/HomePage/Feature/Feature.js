import React from "react";
import "./Feature.css";
import image from "../../../Images/download (1).jfif";
function Feature() {
  return (
    <section id="features" className="section-p1">
      <div className="feature-box">
        <img src={image} alt="This is feature" />
        <h6>Free Shoping</h6>
      </div>
      <div className="feature-box">
        <img src={image} alt="This is feature" />
        <h6>Free Shoping</h6>
      </div>
      <div className="feature-box">
        <img src={image} alt="This is feature" />
        <h6>Free Shoping</h6>
      </div>
      <div className="feature-box">
        <img src={image} alt="This is feature" />
        <h6>Free Shoping</h6>
      </div>
      <div className="feature-box">
        <img src={image} alt="This is feature" />
        <h6>Free Shoping</h6>
      </div>
      <div className="feature-box">
        <img src={image} alt="This is feature" />
        <h6>Free Shoping</h6>
      </div>
      
    </section>
  );
}

export default Feature;
