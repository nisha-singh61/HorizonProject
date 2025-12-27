import React from "react";

function Hero() {
  return (
    <section className="support-hero-section">
      {/* Dynamic Background Elements */}
      <div className="abstract-glow-1"></div>
      <div className="abstract-glow-2"></div>

      <div className="container position-relative">
        <div className="row g-5 align-items-center">
          {/* Left: Messaging */}
          <div className="col-lg-6">
            <div className="support-hero-content">
              <div className="mini-badge mb-3">Horizon Support Core</div>
              <h1 className="hero-title">
                Everything you need to{" "}
                <span className="text-highlight">Trade Smarter.</span>
              </h1>
              <p className="hero-description">
                Browse professional-grade documentation, track your KYC
                progress, or coordinate with our technical desk—all from one
                central hub.
              </p>

              <div className="search-glass-container">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search for guides, error codes, or topics..."
                />
                <button className="search-btn">Find Answers</button>
              </div>

              <div className="trending-topics mt-4">
                <span>Trending:</span>
                <a href="#">F&O Activation</a>
                <a href="#">API Keys</a>
                <a href="#">Instant Withdrawals</a>
              </div>
            </div>
          </div>

          {/* Right: Floating Visual Hub */}
          <div className="col-lg-6">
            <div className="visual-hub-container">
              {/* Primary Feature Card */}
              <div className="hub-card primary-hub-card shadow-lg">
                <div className="hub-icon-wrap">
                  <i className="fa-solid fa-microchip"></i>
                </div>
                <div className="hub-card-body">
                  <h4>Technical Desk</h4>
                  <p>Direct access to our infrastructure support engineers.</p>
                  <a href="#" className="hub-link">
                    Open Terminal Support{" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>

              {/* Secondary Cards Grid */}
              <div className="row g-3 mt-1">
                <div className="col-6">
                  <div className="hub-card-mini shadow-sm">
                    <i className="fa-solid fa-book-bookmark text-primary"></i>
                    <h5>Trading Guide</h5>
                  </div>
                </div>
                <div className="col-6">
                  <div className="hub-card-mini shadow-sm">
                    <i className="fa-solid fa-shield-check text-success"></i>
                    <h5>Security Center</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
