import React from "react";
import DressImage from "../../../Images/images.jfif";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NewArrivials() {
  return (
    <section id="product1">
      <h1>New Arrivals</h1>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        <div className="pro">
          <img src={DressImage} alt="Dress Image" />
          <div className="pro-description">
            <span>Addidas</span>
            <h5>This is best clothes</h5>
            <div className="start">
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
            </div>
            <h4>$78</h4>
          </div>
          <AiOutlineShoppingCart id="cart" />
        </div>
        <div className="pro">
          <img src={DressImage} alt="Dress Image" />
          <div className="pro-description">
            <span>Addidas</span>
            <h5>This is best clothes</h5>
            <div className="start">
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
            </div>
            <h4>$78</h4>
          </div>
          <AiOutlineShoppingCart id="cart" />
        </div>
        <div className="pro">
          <img src={DressImage} alt="Dress Image" />
          <div className="pro-description">
            <span>Addidas</span>
            <h5>This is best clothes</h5>
            <div className="start">
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
            </div>
            <h4>$78</h4>
          </div>
          <AiOutlineShoppingCart id="cart" />
        </div>
        <div className="pro">
          <img src={DressImage} alt="Dress Image" />
          <div className="pro-description">
            <span>Addidas</span>
            <h5>This is best clothes</h5>
            <div className="start">
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
            </div>
            <h4>$78</h4>
          </div>
          <AiOutlineShoppingCart id="cart" />
        </div>
        <div className="pro">
          <img src={DressImage} alt="Dress Image" />
          <div className="pro-description">
            <span>Addidas</span>
            <h5>This is best clothes</h5>
            <div className="start">
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
            </div>
            <h4>$78</h4>
          </div>
          <AiOutlineShoppingCart id="cart" />
        </div>
        <div className="pro">
          <img src={DressImage} alt="Dress Image" />
          <div className="pro-description">
            <span>Addidas</span>
            <h5>This is best clothes</h5>
            <div className="start">
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
              <AiFillStar id="starts" />
            </div>
            <h4>$78</h4>
          </div>
          <AiOutlineShoppingCart id="cart" />
        </div>
      </div>
    </section>
  );
}

export default NewArrivials;
