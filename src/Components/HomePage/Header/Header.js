import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import "./Header.css";
function Header() {
  return (
    <section id="header">
      {/* //ToDo: Import logo later */}
      <Link to="/">
        <img alt="site-logo" className="header-logo"></img>
      </Link>
      <nav>
        <ul id="home-navbar">
          <li>
            <Link id="home-nav-links" className="active" to="/home">
              خانه
            </Link>
          </li>
          <li>
            <Link id="home-nav-links" to="/shop">
              فروشگاه
            </Link>
          </li>
          <li>
            <Link id="home-nav-links" to="/blog">
              بلاگ
            </Link>
          </li>
          <li>
            <Link id="home-nav-links" to="/aboutus">
              درباره
            </Link>
          </li>
          <li>
            <Link id="home-nav-links" to="/contactus">
              تماس با ما
            </Link>
          </li>
          <li>
            <Link id="home-nav-links" to="/shopcart">
              <AiFillShopping />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
