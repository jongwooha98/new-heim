// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

// Scroll to top of page(section) when navigating
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
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
          <i className="toggler-icon fas fa-bars" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-collapse__top">
            <Link className="navbar-brand" to="/" onClick={handleCollapse}>
              NEW HEIM
            </Link>
            <button
              className="navbar-collapse__toggler"
              onClick={handleCollapse}
            >
              <i className="toggler-icon far fa-times-circle" />
            </button>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleCollapse}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleCollapse}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/team" onClick={handleCollapse}>
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleCollapse}>
                Reservation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
