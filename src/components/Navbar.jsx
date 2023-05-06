import '../styles/Navbar.css'
import logo from '../assets/images/icon.png'
import React, { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" width={90} />
      </div>
      <nav className={`links ${showMenu ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="menu-icon" onClick={handleMenuClick}>
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
}

export default Header;

