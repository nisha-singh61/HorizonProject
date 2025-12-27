import React, { useEffect, useRef } from "react";

function Awards() {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="awards-modern-wrapper py-5" ref={sectionRef}>
      {/* Dynamic Background Elements */}
      <div className="bg-blur-circle-top"></div>

      <div className="container py-5">
        <div className="row g-0 align-items-center">
          {/* Content Column: Using an Offset Layout */}
          <div className="col-lg-7 z-index-2">
            <div className="awards-content-card glass-panel fade-up-scroll delay-1">
              <div className="hero-badge mb-4">Market Leader 2025</div>

              <h1 className="display-4 fw-bold mb-4">
                Redefining the <span className="text-gradient">Horizon</span> of
                Trading
              </h1>

              <p className="lead text-secondary mb-5">
                Axis isn't just a platform; it's a high-performance engine for
                serious investors. We've built the infrastructure so you can
                focus entirely on your strategy.
              </p>

              {/* Modern Grid-based Asset Display */}
              <div className="asset-grid fade-up-scroll delay-3">
                {[
                  { icon: "fa-chart-line", label: "Stocks & IPOs" },
                  { icon: "fa-seedling", label: "Mutual Funds" },
                  { icon: "fa-file-invoice-dollar", label: "Bonds & G-Secs" },
                  { icon: "fa-bolt", label: "Strategic F&O" },
                  { icon: "fa-globe", label: "Global ETFs" },
                  { icon: "fa-coins", label: "Commodities" },
                ].map((item, index) => (
                  <div key={index} className="asset-pill">
                    <i className={`fa-solid ${item.icon} me-2`}></i>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Column: Offset and overlapping */}
          <div className="col-lg-5 ps-lg-0 mt-5 mt-lg-0">
            <div className="visual-stack-container fade-up-scroll delay-2">
              <div className="main-visual-wrapper float-anim-1">
                <img
                  src="media/images/largestBroker.png"
                  alt="Horizon Platform"
                  className="img-fluid main-award-img"
                />
              </div>
              {/* Decorative Card Element */}
              <div className="floating-data-card float-anim-2">
                <div className="d-flex align-items-center">
                  <div className="stat-circle me-3">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                  </div>
                  <div>
                    <div className="fw-bold small text-dark">+24% Activity</div>
                    <div className="text-muted smaller">Weekly Growth</div>
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

export default Awards;
