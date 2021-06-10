// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import logo from '../assets/logo.png';

function Navbar() {
  // const [expanded, setExpanded] = useState('');
  return (
    <nav className="navbar navbar-expand-md sticky-top navbar-dark">
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
            <li class="nav-item dropdown">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
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
