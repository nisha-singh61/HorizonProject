import React from "react";

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;

const Signup = () => {
  const handleSignInClick = () => {
    window.location.href = DASHBOARD_SIGNUP_URL;
  };

  return (
    <div className="signin-prompt-container min-vh-100 d-flex align-items-center justify-content-center bg-light p-3 p-md-0">
      <div
        className="container overflow-hidden" // Removed bg-white and shadow here to apply them to individual cards
        style={{ maxWidth: "1000px" }}
      >
        {/* Changed g-0 to gap-4 to create the space between cards */}
        <div className="row gap-lg-4 justify-content-center">
          
          {/* Left Panel: Dark Section */}
          <div className="col-lg-5 d-none d-lg-flex flex-column justify-content-between p-5 bg-dark text-white position-relative shadow-lg rounded-5">
            <div>
              <div className="axis-logo-container mb-5">
                <img
                  src="/media/images/logo.png"
                  className="img-fluid w-25 opacity-100"
                  alt="logo"
                />
              </div>
              <h1 className="display-5 fw-bold mb-4 pe-5">
                Unlock the Future of Investing.
              </h1>
              <p
                className="text-secondary mb-5 lead pe-4"
                style={{ fontSize: "1.1rem" }}
              >
                Access the most powerful trading infrastructure built for modern
                global markets.
              </p>
            </div>

            <div className="row g-3">
              <div className="col-6">
                <div className="bg-white text-dark p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center">
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-cpu-fill text-primary me-2"></i>
                    <span className="fw-bold small">99.9% Uptime</span>
                  </div>
                  <small className="text-muted">Low-latency execution</small>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-white text-dark p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center">
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-shield-lock-fill text-primary me-2"></i>
                    <span className="fw-bold small">Direct Access</span>
                  </div>
                  <small className="text-muted">Global markets</small>
                </div>
              </div>
              <div className="col-12 text-center pt-4">
                <button
                  onClick={handleSignInClick}
                  className="btn btn-primary rounded-pill px-5 py-2 fw-bold opacity-75"
                >
                  Sign Up
                </button>
                <div className="mt-2 small text-secondary opacity-50">
                  Explore Dashboard
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form Section */}
          <div className="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center bg-white shadow-lg rounded-5">
            <div className="d-lg-none mb-4 text-center">
              <img
                src="/media/images/logo.png"
                className="img-fluid w-25"
                alt="logo"
              />
            </div>

            <div className="mb-4">
              <img
                src="/media/images/logo.png"
                className="img-fluid w-10 mb-3 d-none d-lg-block"
                style={{ width: "40px" }}
                alt="logo"
              />
              <h2 className="fw-bold h3 mb-2">
                AXIS — Seamless Trading By Horizon
              </h2>
              <p className="text-muted">
                This platform integrates with the Horizon login for secure
                access to a powerful interface.
              </p>
            </div>

            <div className="bg-light bg-opacity-50 p-4 rounded-4 mb-4">
              <h6 className="fw-bold mb-3 small text-uppercase text-secondary tracking-wider">
                Features
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>
                  <div>
                    <span className="fw-bold d-block small">Interface</span>
                    <small className="text-muted">
                      A clean, modern layout designed for speed.
                    </small>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>
                  <div>
                    <span className="fw-bold d-block small">
                      Simulated Data
                    </span>
                    <small className="text-muted">
                      Visualize trends using real-time stock data.
                    </small>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>
                  <div>
                    <span className="fw-bold d-block small">
                      Integrated Login
                    </span>
                    <small className="text-muted">
                      Secure gateway via Axis authentication.
                    </small>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-light p-3 rounded-4 mb-4 border-start border-primary border-5 shadow-sm">
              <p className="small text-muted mb-0">
                <strong>Action Required:</strong> Click below to be securely
                redirected to the Horizon login page.
              </p>
            </div>

            <button
              onClick={handleSignInClick}
              className="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow mb-4 d-flex align-items-center justify-content-center gap-2"
            >
              <i className="bi bi-box-arrow-in-right fs-5"></i>
              Sign In via Horizon Axis
            </button>

            <div className="text-center small text-muted">
              New to the market?{" "}
              <a
                href="#"
                className="fw-bold text-decoration-none text-primary border-bottom border-primary pb-1"
              >
                Learn how to get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;