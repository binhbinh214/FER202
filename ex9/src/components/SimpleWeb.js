import React from 'react';
import '../App.css';
import logo from '../images/fptulogo.jpg'; 

function SimpleWeb() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="FPT Logo" className="logo" />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        <section id="about" className="section">
          <h2>About</h2>
          <p>This is the about section of the website.</p>
        </section>
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SimpleWeb;
