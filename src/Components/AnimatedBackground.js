import React from 'react';
// We import the App.css here because it holds our .app-container styles
import '../App.css'; 

function AnimatedBackground({ children }) {
  return (
    <div className="app-container">
      {/* {children} represents everything wrapped inside this component in App.js */}
      {children}
    </div>
  );
}

export default AnimatedBackground;