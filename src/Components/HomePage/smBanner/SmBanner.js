import React from "react";
import "./SmBanner.css";
function SmBanner() {
  return (
    <section id="sm-banner">
      <div className="banner-box">
        <h4>Crazy deals</h4>
        <h2>Buy 1 get 1 free</h2>
        <span>The best classic dress is on sale at cara</span>
        <button className="white">Learn More</button>
      </div>
      <div className="banner-box">
        <h1>Crazy deals</h1>
        <h2>Buy 1 get 1 free</h2>
        <span>The best classic dress is on sale at cara</span>
        <button className="white">Learn More</button>
      </div>
    </section>
  );
}

export default SmBanner;
