import React from "react";

function About() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Impact Header */}
      <section className="about-hero py-5 text-center">
        <div className="container px-4">
          <div className="reveal-badge mx-auto mb-4">Established 2025</div>
          <h1 className="about-title display-3 fw-800">
            Building the{" "}
            <span className="text-gradient">Financial Frontier.</span>
          </h1>
          <p className="about-lead text-muted mx-auto mt-3">
            Horizon isn't just a trading platform; it's a fundamental
            infrastructure layer designed to make global markets accessible to
            everyone, everywhere.
          </p>
        </div>
      </section>

      <div className="container pb-5">
        {/* 2. The Bento Ecosystem Grid */}
        <div className="bento-grid">
          {/* Main Terminal Card (Dark Mode) */}
          <div className="bento-item bento-tall bg-dark text-white overflow-hidden p-5">
            <div className="bento-content">
              <div className="icon-pill mb-4">
                <i className="bi bi-cpu-fill"></i>
              </div>
              <h2 className="fw-bold h3">Axis Terminal</h2>
              <p className="opacity-75">
                Our core engine. A low-latency proprietary trading terminal
                processing billions in daily volume with 99.99% uptime.
              </p>
            </div>
            <div className="terminal-preview-bg"></div>
          </div>

          {/* Mission Card */}
          <div className="bento-item p-4 bg-white border">
            <div className="icon-circle bg-primary-subtle text-primary mb-3">
              <i className="bi bi-rocket-takeoff"></i>
            </div>
            <h3 className="h5 fw-bold">The Mission</h3>
            <p className="text-muted small">
              Democratizing wealth by removing the "knowledge tax" and high fees
              historically associated with institutional investing.
            </p>
          </div>

          {/* Venture Edge Card */}
          <div className="bento-item p-4 bg-white border">
            <div className="icon-circle bg-info-subtle text-info mb-3">
              <i className="bi bi-lightbulb"></i>
            </div>
            <h3 className="h5 fw-bold">Venture Edge</h3>
            <p className="text-muted small">
              Our venture arm, investing in the next generation of fintech
              innovators shaping the decentralized future.
            </p>
          </div>
        </div>

        {/* 3. The Statistics & Community Section */}
        <div className="row mt-5 pt-lg-5 align-items-center">
          <div className="col-lg-5 pe-lg-5">
            <h2 className="display-6 fw-bold mb-4">
              Innovation as Infrastructure
            </h2>
            <p className="text-muted mb-4">
              We believe financial literacy is a right. Through the Horizon
              Academy and our open-source API ecosystem, we provide the tools
              for true autonomy.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-dark rounded-pill px-4 py-2">
                Our Story
              </button>
              <button className="btn btn-outline-dark rounded-pill px-4 py-2">
                Join Team
              </button>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0">
            <div className="stats-container">
              <div className="stat-card">
                <span className="stat-number">2M+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">15ms</span>
                <span className="stat-label">Avg. Execution</span>
              </div>
              <div className="stat-card featured-stat">
                <span className="stat-number text-gradient">Billions</span>
                <span className="stat-label">Assets Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
