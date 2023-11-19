// DarkModeToggle.js
import React, { useState } from "react";
import "./styles/darkmode.css";
import "./styles/darkModeToggle.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div
      className={`toggle-switch ${darkMode ? "dark-mode" : "light-mode"}`}
      onClick={toggleDarkMode}
    >
      <input type="checkbox" checked={darkMode} readOnly />
      <div className="round-button">
        <div className="button-body"></div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
