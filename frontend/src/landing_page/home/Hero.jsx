import React from "react";

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;

function Hero() {
  const handleSignInClick = () => {
    window.location.href = DASHBOARD_SIGNUP_URL;
  };

  return (
    <div className="horizon-hero-wrapper min-vh-100 d-flex align-items-center overflow-hidden border-bottom">
      <div className="container py-5">
        <div className="row text-center justify-content-center">
          <div className="row mb-5 g-4 justify-content-center hero-grid-container">
            {[
              {
                icon: "fa-chart-area",
                title: "Smart Analysis",
                sub: "Real-time indicators",
                anim: "float-anim-1",
                delay: "delay-1",
              },
              {
                icon: "fa-briefcase",
                title: "Portfolio",
                sub: "Unified asset view",
                anim: "float-anim-2",
                delay: "delay-2",
              },
              {
                icon: "fa-bolt-lightning",
                title: "Direct Access",
                sub: "Instant execution",
                anim: "float-anim-3",
                delay: "delay-3",
              },
              {
                icon: "fa-shield-virus",
                title: "Horizon Core",
                sub: "Encrypted security",
                anim: "float-anim-1",
                delay: "delay-4",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`col-6 col-md-3 fade-up ${item.delay}`}
              >
                <div className={`feature-card ${item.anim}`}>
                  <i className={`fa-solid ${item.icon} fa-2x feature-icon`}></i>
                  <h6 className="feature-title">{item.title}</h6>
                  <p className="feature-subtitle">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="col-lg-8 mt-4 fade-up delay-5">
            <div className="hero-badge pulse-subtle">
              <i className="fa-solid fa-eye me-2"></i>
              Experience the Horizon Ecosystem
            </div>
            <h1 className="hero-heading">
              Expand Your <span className="brand-text">Horizon</span>
            </h1>
            <p className="hero-description">
              The definitive trading engine for the modern investor. Horizon
              combines advanced technical analysis with a sleek, minimalist
              interface to give you a competitive edge in global financial
              markets.
            </p>

            <div className="d-flex flex-column align-items-center gap-3">
              <button
                onClick={handleSignInClick}
                className="hero-main-btn pulse-blue"
              >
                Start Trading on Horizon
                <i className="fa-solid fa-chevron-right ms-2 arrow-slide"></i>
              </button>

              <div className="hero-benefits-list">
                {["Zero Commission", "Advanced Charting", "Mobile Sync"].map(
                  (text, i) => (
                    <span key={i} className="benefit-item">
                      <i className="fa-solid fa-check me-2 icon-blue"></i>
                      {text}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
