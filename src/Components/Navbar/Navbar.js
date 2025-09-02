import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({}); 

  const dropdownRef = useRef(null); 
  const submenuRef = useRef(null); 

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

 
  const toggleSubmenu = (menuName) => {
    setIsSubmenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <nav>
      <ul className="navbar">
        <li><a href="/">HOME</a></li>
        <li><a href="/About">ABOUT</a></li>
        <li><a href="/Education">EDUCATION</a></li>

        <li className="dropdown" ref={dropdownRef}>
          <a href="#" onClick={toggleDropdown}>PROJECTS ▾</a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-submenu">
                <a href="#" onClick={() => toggleSubmenu("frontEnd")}>
                  FRONT-END ▸
                </a>
                {isSubmenuOpen.frontEnd && (
                  <ul className="dropdown-submenu-menu">
                    <li><a href="/Game">GAME 🎮</a></li>
                    <li><a href="/Calculator">CALCULATOR 🧮</a></li>
                  </ul>
                )}
              </li>
              <li className="dropdown-submenu">
                <a href="#" onClick={() => toggleSubmenu("fullStack")}>
                  FULL STACK ▸
                </a>
                {isSubmenuOpen.fullStack && (
                  <ul className="dropdown-submenu-menu">
                    <li><a href="/Template">E-COMMERCE 🛍️</a></li>
                    <li><a href="/Formpage">FORM PAGE  📄</a></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li><a href="/Contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
