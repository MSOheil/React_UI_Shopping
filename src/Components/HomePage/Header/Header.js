import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

import "./Header.css";
function Header() {
  const ShowNave = () => {
    console.log(1);
    document.getElementById("home-navbar").classList.add("active");
  };
  const CloseNave = () => {
    document.getElementById("home-navbar").classList.remove("active");
  };
  return (
    <section id="header">
      {/* //ToDo: Import logo later */}
      <Link to="/">
        <img alt="site-logo" className="header-logo"></img>
      </Link>
      <nav>
        <ul id="home-navbar">
          <li className="close-btn">
              <a onClick={CloseNave}>
                <TfiClose />
              </a>
          </li>
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
          <li id="sh-lg">
            <Link id="home-nav-links" to="/shopcart">
              <AiFillShopping />
            </Link>
          </li>
        </ul>
      </nav>
      <div id="mobile">
        <i>
          <AiFillShopping />
        </i>
        <i>
          <TfiAlignJustify id="bar" onClick={ShowNave} />
        </i>
      </div>
    </section>
  );
}

export default Header;
