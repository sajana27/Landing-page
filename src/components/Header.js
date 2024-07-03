import React from "react";
import { Link } from "react-router-dom";
// import Header from "./components/header";
import {
  FaHome,
  FaInfoCircle,
  FaAddressBook,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-info sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.jpeg"
            height="60"
            className="d-inline-block align-top"
            alt="CashFlow logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <FaInfoCircle /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                <FaAddressBook /> Contact
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                <FaUserPlus /> Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
