import React from 'react';

function Navbar({ goHome }) {
  return (
    <nav className="navbar">
      <h1 className="logo" onClick={goHome}>Quiz-ezzy</h1>
    </nav>
  );
}

export default Navbar;