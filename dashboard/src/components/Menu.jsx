import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ user, onLogout }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Back to horizon
  const HORIZON_URL =
    import.meta.env.VITE_HORIZON_URL || "http://localhost:5174";
  const brandBlue = "#3d77cd";

  const handleBackToHorizon = () => {
    onLogout();
    window.location.href = HORIZON_URL;
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          {/* Dashboard */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          {/* Orders */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          {/* Holdings */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          {/* Positions */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          {/* Funds */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          {/* Apps */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        {/* Back to horizon logic */}
        <div className="exit-section px-3 mb-2 mt-2">
          <button
            onClick={handleBackToHorizon}
            className="btn btn-sm w-100 text-white shadow-sm"
            style={{
              backgroundColor: brandBlue,
              borderRadius: "8px",
              border: "none",
              padding: "8px",
            }}
          >
            <i className="fa-solid fa-arrow-left me-2"></i> Exit to Horizon
          </button>
        </div>

        {/* Profile and Logout Section */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          {/* Use the 'user' prop for the username display */}
          <p className="username">{user || "USERID"}</p>

          {/* Profile Dropdown (visible when isProfileDropdownOpen is true) */}
          {isProfileDropdownOpen && (
            <div className="dropdown">
              {/* Use the 'onLogout' prop to handle logout */}
              <button onClick={onLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
