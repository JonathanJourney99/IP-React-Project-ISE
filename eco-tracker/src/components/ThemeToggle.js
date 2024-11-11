import React from 'react';

// ThemeToggle Component
const ThemeToggle = ({ toggleTheme, isDarkMode, modeText }) => {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="toggle-button">
        {modeText} {/* Display the appropriate text */}
      </button>
    </div>
  );
};

export default ThemeToggle;
