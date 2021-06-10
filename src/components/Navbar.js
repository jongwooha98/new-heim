// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import logo from '../assets/logo.png';

function Navbar() {
  // const [expanded, setExpanded] = useState('');
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-dark ">
      <div className="navbar__container container-fluid">
        <Link className="navbar-brand" to="/">
          NEW HEIM
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="toggler-icon fas fa-bars" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarToggler"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggler"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/team">
                    Who we are
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="/team">
                    What we offer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="team">
                    Meet the team
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
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
