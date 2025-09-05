import React from 'react';

const Switch3D = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <div className="button">
        <div className="light"></div>
        <div className="dots"></div>
        <div className="characters"></div>
        <div className="shine"></div>
        <div className="shadow"></div>
      </div>
    </label>
  );
};

export default Switch3D;
