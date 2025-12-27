import React from "react";

function Footer() {
  const brandBlue = "#3d77cd";

  return (
    <footer className="footer-wrapper border-top pt-5 pb-3">
      <div className="container px-4">
        <div className="row gy-4">
          
          {/* Brand and Socials */}
          <div className="col-lg-3 col-md-12">
            <img
              src="media/images/logo.svg"
              className="footer-logo mb-3"
              alt="Logo"
            />
            <p className="text-muted small mb-4">
              &copy; 2025, Horizon MERN Dashboard.<br />
              Built with precision for the next generation.
            </p>
            <div className="d-flex gap-3">
              <a href="#"><i className="fa-brands fa-x-twitter social-icon"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in social-icon"></i></a>
              <a href="#"><i className="fa-brands fa-github social-icon"></i></a>
              <a href="#"><i className="fa-brands fa-youtube social-icon"></i></a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="col-lg-2 col-6 col-md-3">
            <h6 className="footer-heading">Account</h6>
            <div className="d-flex flex-column">
              <a href="#" className="footer-link">User Profile</a>
              <a href="#" className="footer-link">Watchlist</a>
              <a href="#" className="footer-link">Order History</a>
              <a href="#" className="footer-link">Portfolio</a>
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="col-lg-2 col-6 col-md-3">
            <h6 className="footer-heading">Support</h6>
            <div className="d-flex flex-column">
              <a href="#" className="footer-link">Documentation</a>
              <a href="#" className="footer-link">Report a Bug</a>
              <a href="#" className="footer-link">GitHub Source</a>
              <a href="#" className="footer-link">Updates</a>
            </div>
          </div>

          {/* Links Column 3 */}
          <div className="col-lg-2 col-6 col-md-3">
            <h6 className="footer-heading">Company</h6>
            <div className="d-flex flex-column">
              <a href="#" className="footer-link">About Project</a>
              <a href="#" className="footer-link">Tech Stack</a>
              <a href="#" className="footer-link">Dev Journey</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Links Column 4 */}
          <div className="col-lg-3 col-6 col-md-3">
            <h6 className="footer-heading">Quick Links</h6>
            <div className="d-flex flex-column">
              <a href="#" className="footer-link">Market Overview</a>
              <a href="#" className="footer-link">Trading Rules</a>
              <a href="#" className="footer-link">Calculators</a>
              <a href="#" className="footer-link">Sectors</a>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        
        <div className="row mt-5">
          <div className="col-12">
            <div className="disclaimer-box shadow-sm">
              <p className="fw-bold text-danger mb-2">
                <i className="fa-solid fa-triangle-exclamation me-2"></i>
                EDUCATIONAL DEMONSTRATION ONLY
              </p>
              <p className="mb-2">
                This MERN stack application is a non-commercial portfolio project. All stock data and 
                financial executions are <strong>simulated</strong>. This project is not affiliated 
                with Zerodha, NSE, or any financial body.
              </p>
              <p className="mb-0">
                <strong>Developer:</strong> Nisha Singh Kushwaha | 
                <a href="mailto:nishakuswaha2004@gmail.com" className="text-decoration-none ms-1" style={{color: brandBlue}}>
                  nishakuswaha2004@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Final Bottom Bar */}
        <div className="mt-5 pt-3 border-top text-center">
          <div className="d-flex flex-wrap justify-content-center gap-4">
            <a href="#" className="bottom-link">Data Sources</a>
            <a href="#" className="bottom-link">API Policy</a>
            <a href="#" className="bottom-link">Privacy Note</a>
            <a href="#" className="bottom-link">Accessibility</a>
            <a href="#" className="bottom-link">Roadmap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;