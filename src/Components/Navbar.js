import React, { useState } from 'react';
import myLogo from './ingh.jpeg';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      setCurrentUser(username);
      setShowLoginModal(false);
      setUsername('');
      setPassword('');
    } else {
      alert("Please enter both a username and password.");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      setCurrentUser(username);
      setShowSignUpModal(false);
      setUsername('');
      setPassword('');
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser('');
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand-section">
          <img src={myLogo} alt="Quiz-Ezzy Logo" className="logo-image" />
          <h1 className="logo" style={{ color: '#00ffff', textShadow: '0 0 10px #00ffff', margin: 0 }}>
            QUIZ-EZZY
          </h1>
        </div>

        <div className="auth-buttons">
          {isLoggedIn ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ color: '#00ffff', fontWeight: 'bold', textShadow: '0 0 5px #00ffff' }}>
                Welcome, {currentUser}!
              </span>
              <button className="neon-btn-outline" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          ) : (
            <>
              <button className="neon-btn-outline" onClick={() => setShowLoginModal(true)}>
                Log In
              </button>
              <button className="neon-btn-filled" onClick={() => setShowSignUpModal(true)}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      {showLoginModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 style={{ color: '#00ffff', marginBottom: '20px', textShadow: '0 0 10px #00ffff' }}>LOG IN</h2>
            <form onSubmit={handleLoginSubmit}>
              <input 
                type="text" 
                placeholder="Username" 
                className="neon-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="neon-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="modal-actions">
                <button type="submit" className="neon-btn-outline">Enter</button>
                <button type="button" className="neon-btn-cancel" onClick={() => setShowLoginModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSignUpModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 style={{ color: '#b300ff', marginBottom: '20px', textShadow: '0 0 10px #b300ff' }}>SIGN UP</h2>
            <form onSubmit={handleSignUpSubmit}>
              <input 
                type="text" 
                placeholder="Choose Username" 
                className="neon-input-purple"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Choose Password" 
                className="neon-input-purple"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="modal-actions">
                <button type="submit" className="neon-btn-filled">Create</button>
                <button type="button" className="neon-btn-cancel" onClick={() => setShowSignUpModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;