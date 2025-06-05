import React, { useState, useRef, useEffect } from "react";
import "./Nav.css";
import "./ToggleButton.css";
import { useTheme } from "../context/ThemeContext";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const menuRef = useRef();
  const { darkMode, toggleTheme } = useTheme();
  console.log(darkMode);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = (section) => {
    setActive(section);
    setMenuOpen(false); // Close after click

    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <nav className={`inner-nav ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <h2>La Min Hein</h2>
      </div>
      <div className={`menu ${menuOpen ? "show" : ""}`} ref={menuRef}>
        <ul>
          {["Home", "About", "Project", "Contact"].map((item) => (
            <li
              key={item}
              className={`${active === item ? "active" : ""} ${
                darkMode ? "dark-li" : "light-li"
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="Buttons">
        <div className="Mood">
          <input
            id="theme-toggle"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            checked={darkMode}
            onChange={toggleTheme}
          />
          <label htmlFor="theme-toggle" className="theme"></label>
        </div>

        <div className="toggleButton" onClick={toggleMenu}>
          <div className={`bar ${darkMode ? "light" : "black"}`}></div>
          <div className={`bar ${darkMode ? "light" : "black"}`}></div>
          <div className={`bar ${darkMode ? "light" : "black"}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
