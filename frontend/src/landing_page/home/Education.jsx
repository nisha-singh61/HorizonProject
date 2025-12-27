import React, { useEffect, useRef } from "react";

function Education() {
  const eduRef = useRef(null);

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

    if (eduRef.current) observer.observe(eduRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="edu-modern-section py-5" ref={eduRef}>
      <div className="container py-lg-5">
        <div className="row g-5 align-items-center">
          
          {/* Left Column: Text & Feature Cards */}
          <div className="col-12 col-lg-6">
            <div className="hero-badge fade-up-scroll delay-1">Knowledge Hub</div>
            <h1 className="display-5 fw-bold mb-4 fade-up-scroll delay-2">
              Master the Markets <br />
              <span className="text-gradient">From Zero to Alpha</span>
            </h1>
            
            <div className="edu-pathway mt-5">
              {/* Card 1: Invent */}
              <div className="edu-feature-card fade-up-scroll delay-3">
                <div className="edu-icon-wrap">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="edu-text">
                  <h3 className="h5 fw-bold mb-2">Invent Academy</h3>
                  <p className="small text-muted mb-3">
                    A comprehensive curriculum covering technical analysis, 
                    fundamental research, and advanced options strategies.
                  </p>
                  <a href="/invent" className="edu-action-link">
                    Start Learning <i className="fa-solid fa-arrow-right-long ms-2"></i>
                  </a>
                </div>
              </div>

              {/* Card 2: Community */}
              <div className="edu-feature-card fade-up-scroll delay-4">
                <div className="edu-icon-wrap variant-2">
                  <i className="fa-solid fa-users-viewfinder"></i>
                </div>
                <div className="edu-text">
                  <h3 className="h5 fw-bold mb-2">TradingQ&A Community</h3>
                  <p className="small text-muted mb-3">
                    Connect with over 500k+ traders. Get answers to complex 
                    queries and share your market thesis with experts.
                  </p>
                  <a href="/qa" className="edu-action-link">
                    Join Discussion <i className="fa-solid fa-arrow-right-long ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Visual Stack */}
          <div className="col-12 col-lg-6">
            <div className="edu-visual-stack fade-up-scroll delay-2">
              <div className="main-image-wrapper float-anim-1">
                <img
                  src="media/images/education.svg"
                  alt="Market Education"
                  className="img-fluid academy-img"
                />
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="achievement-card float-anim-2">
                <div className="d-flex align-items-center gap-3">
                  <div className="star-box"><i className="fa-solid fa-star"></i></div>
                  <div>
                    <div className="fw-bold small">Top Rated</div>
                    <div className="smaller text-muted">Trading Academy 2025</div>
                  </div>
                </div>
              </div>

              {/* Abstract decorative circle */}
              <div className="edu-deco-circle"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;