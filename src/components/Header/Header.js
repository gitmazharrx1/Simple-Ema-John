import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="" />
      <div>
        <a href="#1">Order</a>
        <a href="#2">Order Review</a>
        <a href="#3">Manege Inventory</a>
        <a href="#4">Login</a>
      </div>
    </nav>
  );
};

export default Header;
