import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header({ children }) {
  return (
    <header className="header-container">
      <h1 className="header-title">Daniel Zavala</h1>
      <img
        className="header-image"
        src={coverImage}
        alt="Wooden background with subtle patterns"
      />
      {children}
    </header>
  );
}

export default Header;
