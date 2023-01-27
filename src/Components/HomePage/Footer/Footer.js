import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Footer() {
  return (
    <section id="home-footer" className="section-p1">
      <div className="col">
        <img className="logo" alt="company-Logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> Iran Esfahan Shahrak negin
        </p>
        <p>
          <strong>Phone:</strong> 09130611643
        </p>
        <p>
          <strong>Hourse:</strong> Always
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterCircle />
            <AiOutlineWhatsApp />
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store Or Google Play</p>
        <div className="row">
          <img src="" alt="goolePlay-image" />
          <img src="" alt="appstore-image" />
        </div>
        <p>Secured Payment GateWays</p>
        <img alt="Image-Payments" src="" />
      </div>
      <div className="copyright">
        <p>Created By MSoheil</p>
      </div>
    </section>
  );
}

export default Footer;
