import React, { useEffect, useRef } from "react";

function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("start-animation");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // FIXED: Using statsRef correctly
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-modern-outer py-5" ref={statsRef}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Left Column: The Dashboard Showcase */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="stats-visual-container fade-up-scroll delay-1">
              <div className="stats-blob"></div>

              <div className="showcase-card float-anim-1">
                <img
                  src="media/images/ecosystem.png"
                  className="img-fluid showcase-img"
                  alt="Horizon Ecosystem"
                />

                {/* Floating Micro-Stat Card */}
                <div className="floating-badge shadow-sm">
                  <div className="badge-icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <div className="fw-bold small">Trade-Guard</div>
                    <div className="text-muted smaller">Active Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information Architecture */}
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="ps-lg-5">
              <div className="hero-badge fade-up-scroll delay-1">
                Integrity & Innovation
              </div>

              <h1 className="display-5 fw-bold mb-4 fade-up-scroll delay-2">
                Build Your Wealth on <br />
                <span className="text-gradient">Solid Ground</span>
              </h1>

              <div className="stats-grid mt-4">
                {/* Feature 1 */}
                <div className="stat-card fade-up-scroll delay-3">
                  <div className="stat-icon-box">
                    <i className="fa-solid fa-building-columns"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-1">Built on Trust</h3>
                    <p className="small text-muted mb-0">
                      Transparency and security are at our core. Manage
                      significant capital with absolute peace of mind.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="stat-card fade-up-scroll delay-4">
                  <div className="stat-icon-box">
                    <i className="fa-solid fa-ban"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-1">Zero Gimmicks</h3>
                    <p className="small text-muted mb-0">
                      No spam, no aggressive notifications, and no gamification.
                      Just clean, professional tools.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="stat-card fade-up-scroll delay-5">
                  <div className="stat-icon-box">
                    <i className="fa-solid fa-layer-group"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-1">The Horizon Universe</h3>
                    <p className="small text-muted mb-0">
                      A complete ecosystem of financial tools and partnerships
                      tailored to your long-term strategy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-2 fade-up-scroll delay-5">
                <a href="#" className="modern-btn me-3">
                  Explore Asset Classes
                </a>
                <a href="#" className="modern-link">
                  Try Demo <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
