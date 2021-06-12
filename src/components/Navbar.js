// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import logo from '../assets/logo.png';

function Navbar() {
  const handleCollapse = () => {
    document.getElementById('navbarNav').classList.remove('show');
    document.getElementById('navbarBtn').classList.add('collapsed');
    document.body.classList.toggle('lock-scroll');
  };

  function lockScroll() {
    document.body.classList.toggle('lock-scroll');
  }
  return (
    <nav className="navbar sticky-top">
      <div className="navbar__container container-fluid">
        <Link className="navbar-brand" to="/">
          NEW HEIM
        </Link>
        <button
          className="navbar-toggler"
          id="navbarBtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={lockScroll}
        >
          <i class="toggler-icon fas fa-bars" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleCollapse}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team" onClick={handleCollapse}>
                Who we are
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={handleCollapse}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team" onClick={handleCollapse}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleCollapse}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
