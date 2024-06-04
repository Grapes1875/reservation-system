import React from "react";

import { Link, useLocation } from "react-router-dom";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

function Menu() {
  const location = useLocation;

  return (
    <div className="menu-container">
      <header>
        <Link to="/">
          <h1>Periodic Tables</h1>
        </Link>
      </header>
      <nav className="menu-nav">
        <div>
          <ul className="menu-ul">
            <li className="item menu-item">
              <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""} >
                <span />
                &nbsp;Dashboard
              </Link>
            </li>
            <li className="item menu-item">
              <Link to="/search" className={location.pathname === "/search" ? "active" : ""}>
                <span />
                &nbsp;Search
              </Link>
            </li>
            <li className="item menu-item">
              <Link to="/reservations/new" className={location.pathname === "/reservations/new" ? "active" : ""}>
                <span />
                &nbsp;New Reservation
              </Link>
            </li>
            <li className="item menu-item">
              <Link to="/tables/new" className={location.pathname === "/tables/new" ? "active" : ""}>
                <span />
                &nbsp;New Table
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Menu;