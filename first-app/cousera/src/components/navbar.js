import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const NavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold " : "normal",
      textDecoration: isActive ? " none" : "underline",
    };
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        My Website
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul> */}
        <NavLink style={NavLinkStyle} to="/contact">
          Contact Us
        </NavLink>
        <NavLink style={NavLinkStyle} to="/about">
          About
        </NavLink>
        <NavLink style={NavLinkStyle} to="/">
          Home
        </NavLink>
      </div>
    </nav>
  );
}
