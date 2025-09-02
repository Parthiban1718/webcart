




import "../Componets/Header.css";
import logo from "../images/product/logo.jpg";
import { Link } from "react-router-dom";
import React from "react";

export default function Header(props) {
  return (
    <header className="headerss">
      <div className="delivery-msg">
        Free Delivery on Orders Above Rs.499
      </div>

      <nav className="navbarss">
        <div className="logo">
          <img src={logo} alt="Fresh Market" className="logo-img" />
          <div className="smart">Smart Shopping</div>
        </div>

        <ul>
          <li><Link to="/Fruits">🍎 Fruits</Link></li>
          <li><Link to="/Vegetables">🥦 Vegetables</Link></li>
          <li><Link to="/Electronic">💻 Electronics</Link></li>
          <li><Link to="/Fashion">👗 Fashion</Link></li>
          <li><Link to="/Customer & Services">💬 Support</Link></li>
        </ul>
      </nav>

      <div className="search-cart">
        <input
          type="text"
          placeholder="Search Fresh Produce"
          className="search-bar"
          onChange={(e) => props.setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bottom-right">
        <span onClick={() => props.showPopup(1)}>
          🛒 My Cart ({props.headercount})
        </span>
      </div>

      {props.setWishlistMode && (
  <button onClick={() => props.setWishlistMode(!props.wishlistMode)}>
    {props.wishlistMode ? "Show All" : "Show Wishlist ❤️"}
  </button>
)}
    </header>
  );
}