import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({});
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsSubmenuOpen({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle submenu visibility
  const toggleSubmenu = (menuName) => {
    setIsSubmenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/About">ABOUT</Link></li>
        <li><Link to="/Education">EDUCATION</Link></li>

        <li className="dropdown" ref={dropdownRef}>
          <span onClick={toggleDropdown} className="dropdown-toggle">
            PROJECTS ▾
          </span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-submenu">
                <span onClick={() => toggleSubmenu("frontEnd")}>
                  FRONT-END ▸
                </span>
                {isSubmenuOpen.frontEnd && (
                  <ul className="dropdown-submenu-menu">
                    <li><Link to="/Game">GAME 🎮</Link></li>
                    <li><Link to="/Calculator">CALCULATOR 🧮</Link></li>
                  </ul>
                )}
              </li>

              <li className="dropdown-submenu">
                <span onClick={() => toggleSubmenu("fullStack")}>
                  FULL STACK ▸
                </span>
                {isSubmenuOpen.fullStack && (
                  <ul className="dropdown-submenu-menu">
                    <li><Link to="/Template">E-COMMERCE 🛍️</Link></li>
                    <li><Link to="/Formpage">FORM PAGE 📄</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li><Link to="/Contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
