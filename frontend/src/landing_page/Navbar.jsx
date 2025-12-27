import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;
  return (
    <div className="navbar-floating-wrapper sticky-top">
      <nav className="navbar navbar-expand-lg navbar-island shadow-lg">
        <div className="container-fluid px-lg-4">
          <NavLink className="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              style={{ width: "110px" }}
              alt="Logo"
            />
          </NavLink>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navIslandContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navIslandContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link-island">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link-island">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="nav-link-island">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/support" className="nav-link-island">
                  Support
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <a
                href={DASHBOARD_SIGNUP_URL}
                className="btn btn-link text-decoration-none fw-bold text-muted px-3 login-btn-hover"
              >
                Login
              </a>

              <NavLink
                to="/signup"
                className="btn btn-brand-cta rounded-pill px-4 shadow-sm"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
