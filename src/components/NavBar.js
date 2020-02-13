import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="Nav">
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/donate">Donate</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
