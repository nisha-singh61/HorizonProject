import React from "react";

function Footer() {
  // Using the variable to fix the linter error and style headers/links
  const brandBlue = "#3d77cd";

  return (
    <footer className="footer-hub pt-5 pb-4">
      <div className="container">
        <div className="row gy-5">
          {/* Brand Identity Section */}
          <div className="col-lg-4">
            <div className="brand-card p-4 rounded-4 shadow-sm bg-white border">
              <img
                src="media/images/logo.svg"
                className="footer-logo mb-3"
                alt="Horizon Logo"
                style={{ width: "120px" }}
              />
              <p className="text-muted small mb-4">
                Redefining the trading experience with MERN stack efficiency.
                Built for speed, styled for the future.
              </p>
              <div className="social-pill-group">
                <a href="#" className="social-pill">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" className="social-pill">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="social-pill">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="social-pill">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Links Bento Grid */}
          <div className="col-lg-8">
            <div className="row gy-4">
              <div className="col-6 col-md-3">
                <div className="footer-nav-block">
                  <h6 className="footer-label" style={{ color: brandBlue }}>
                    <i className="bi bi-person-badge me-2"></i>Account
                  </h6>
                  <a href="#" className="f-link">
                    User Profile
                  </a>
                  <a href="#" className="f-link">
                    Watchlist
                  </a>
                  <a href="#" className="f-link">
                    Order History
                  </a>
                  <a href="#" className="f-link">
                    Portfolio
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="footer-nav-block">
                  <h6 className="footer-label" style={{ color: brandBlue }}>
                    <i className="bi bi-cpu me-2"></i>Support
                  </h6>
                  <a href="#" className="f-link">
                    Documentation
                  </a>
                  <a href="#" className="f-link">
                    Report a Bug
                  </a>
                  <a href="#" className="f-link">
                    GitHub Source
                  </a>
                  <a href="#" className="f-link">
                    System Status
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="footer-nav-block">
                  <h6 className="footer-label" style={{ color: brandBlue }}>
                    <i className="bi bi-building me-2"></i>Company
                  </h6>
                  <a href="#" className="f-link">
                    About Project
                  </a>
                  <a href="#" className="f-link">
                    Tech Stack
                  </a>
                  <a href="#" className="f-link">
                    Dev Journey
                  </a>
                  <a href="#" className="f-link">
                    Contact
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="footer-nav-block">
                  <h6 className="footer-label" style={{ color: brandBlue }}>
                    <i className="bi bi-link-45deg me-2"></i>Quick Links
                  </h6>
                  <a href="#" className="f-link">
                    Market Pulse
                  </a>
                  <a href="#" className="f-link">
                    Trading Rules
                  </a>
                  <a href="#" className="f-link">
                    Calculators
                  </a>
                  <a href="#" className="f-link">
                    Roadmap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Disclaimer Card with Original Email Style */}
        <div className="disclaimer-island mt-5">
          <div className="row align-items-center g-3">
            <div className="col-md-auto text-center text-md-start">
              <div className="warning-icon-bg mx-auto mx-md-0">
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
            </div>
            <div className="col-md text-center text-md-start">
              <h6 className="mb-1 fw-bold text-dark">
                EDUCATIONAL DEMONSTRATION ONLY
              </h6>
              <p className="mb-2 small text-muted">
                This MERN stack application is a non-commercial portfolio
                project. All stock data and financial executions are{" "}
                <strong>simulated</strong>.
              </p>
              <p className="mb-0 small">
                <strong>Developer:</strong> Nisha Singh Kushwaha |
                <a
                  href="mailto:nishakuswaha2004@gmail.com"
                  className="text-decoration-none ms-1 fw-bold"
                  style={{ color: brandBlue }}
                >
                  nishakuswaha2004@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 pt-4 border-top text-center text-md-start">
          <span className="small text-muted w-100 w-md-auto mb-3 mb-md-0">
            © 2025 Horizon Axis. Built with precision.
          </span>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <a href="#" className="meta-link">
              Data Sources
            </a>
            <a href="#" className="meta-link">
              API Policy
            </a>
            <a href="#" className="meta-link">
              Privacy Note
            </a>
            <a href="#" className="meta-link">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
