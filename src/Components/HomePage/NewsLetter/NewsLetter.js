import React from "react";
import "./NewsLetter.css";
function NewsLetter() {
  return (
    <section id="newsLetter" className="section-p1 section-m1">
      <div className="news-text">
        <h4>Sign Up For NewsLetter</h4>
        <p>
          Get E-mail updated about out latest shop and{" "}
          <span>special offers.</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your Email Address"/>
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
}

export default NewsLetter;
