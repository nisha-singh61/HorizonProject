import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL || "#";

  // Toggle state handler for the custom icon
  const handleToggle = () => setIsOpen(!isOpen);

  // Auto-close mobile menu on route change
  useEffect(() => {
    const menu = document.getElementById("navIslandContent");
    // Check if Bootstrap's collapse is actually open before trying to hide it
    if (window.bootstrap && menu && menu.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(menu, { toggle: false });
      bsCollapse.hide();
      setIsOpen(false);
    }
  }, [location]);

  return (
    <div className="navbar-floating-wrapper sticky-top">
      <nav className="navbar navbar-expand-lg navbar-island shadow-lg">
        <div className="container-fluid px-lg-3">
          {/* Brand & Market Status */}
          <div className="d-flex align-items-center">
            <NavLink
              className="navbar-brand me-2"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="media/images/logo.svg"
                style={{ width: "100px" }}
                alt="Horizon Logo"
              />
            </NavLink>
            <div className="market-status-pill d-none d-xl-flex">
              <span className="pulse-dot"></span>
              <span className="status-text">Market Live</span>
            </div>
          </div>

          {/* Custom Animated Toggler */}
          <button
            className={`navbar-toggler custom-toggler ${isOpen ? "open" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navIslandContent"
            aria-controls="navIslandContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navIslandContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links-group">
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link-island active" : "nav-link-island"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "nav-link-island active" : "nav-link-island"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive ? "nav-link-island active" : "nav-link-island"
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    isActive ? "nav-link-island active" : "nav-link-island"
                  }
                >
                  Support
                </NavLink>
              </li>
            </ul>

            {/* Action Group */}
            <div className="d-flex align-items-center gap-2 nav-actions">
              <a href={DASHBOARD_SIGNUP_URL} className="btn-login-ghost">
                Log In
              </a>
              <NavLink to="/signup" className="btn-brand-cta-modern">
                Get Started <i className="bi bi-arrow-right-short ms-1"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
