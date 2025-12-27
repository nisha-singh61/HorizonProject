import React from "react";

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;

const Signup = () => {
  const handleSignInClick = () => {
    window.location.href = DASHBOARD_SIGNUP_URL;
  };

  return (
    <div className="horizon-signup-wrapper min-vh-100 d-flex align-items-center justify-content-center p-3">
      <div className="signup-glass-container container overflow-hidden">
        <div className="row g-0 h-100">
          
          {/* Left Panel: Branding & Stats */}
          <div className="col-lg-5 d-none d-lg-flex flex-column justify-content-between p-5 branding-panel position-relative">
            <div className="reveal delay-1">
              <div className="brand-logo-circle mb-4">
                <i className="fa-solid fa-layer-group fa-2x text-white"></i>
              </div>
              <h1 className="display-5 fw-bold text-white mb-3">
                Experience <br />
                <span className="text-blue-light">The Horizon.</span>
              </h1>
              <p className="text-white-50 lead pe-4">
                Institutional-grade infrastructure meets a minimalist design. 
                Trade global markets with 0ms visual lag.
              </p>
            </div>

            <div className="stats-grid reveal delay-3">
              <div className="row g-3">
                <div className="col-6">
                  <div className="stat-pill">
                    <i className="fa-solid fa-microchip mb-2"></i>
                    <span className="d-block fw-bold">99.9%</span>
                    <small className="text-white-50">Uptime</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-pill">
                    <i className="fa-solid fa-shield-halved mb-2"></i>
                    <span className="d-block fw-bold">Excellent</span>
                    <small className="text-white-50">Security</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Action Area */}
          <div className="col-lg-7 p-4 p-md-5 bg-white d-flex flex-column justify-content-center">
            <div className="reveal delay-2">
              <div className="mb-4">
                <span className="badge-new mb-2">Secure Gateway</span>
                <h2 className="fw-bold text-dark display-6 mb-2">Welcome Back</h2>
                <p className="text-muted">
                  Connect your <strong className="text-blue">Horizon Axis</strong> account to access your personalized trading dashboard.
                </p>
              </div>

              <div className="feature-list-simple mb-5">
                <div className="feature-item-small">
                  <div className="icon-wrap-blue"><i className="fa-solid fa-check"></i></div>
                  <div>
                    <span className="fw-bold d-block">Zero-Lag Interface</span>
                    <small className="text-muted">Built on the latest React architecture.</small>
                  </div>
                </div>
                <div className="feature-item-small">
                  <div className="icon-wrap-blue"><i className="fa-solid fa-check"></i></div>
                  <div>
                    <span className="fw-bold d-block">Simulated Real-Time Data</span>
                    <small className="text-muted">Test strategies with live streaming API feeds.</small>
                  </div>
                </div>
              </div>

              <div className="action-card p-4 rounded-4 border mb-4">
                <p className="small text-muted mb-3">
                  <i className="fa-solid fa-circle-info me-2 text-blue"></i>
                  You are being redirected to our secure authentication server.
                </p>
                <button
                  onClick={handleSignInClick}
                  className="btn-horizon-primary w-100 py-3 shadow-lg"
                >
                  <i className="fa-solid fa-right-to-bracket me-2"></i>
                  Enter Horizon Terminal
                </button>
              </div>

              <div className="text-center">
                <a href="#" className="text-decoration-none small text-muted hover-blue">
                  New to Horizon? <span className="fw-bold text-blue">Explore Documentation</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;