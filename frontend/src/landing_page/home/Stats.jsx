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
      { threshold: 0.15 } // Triggers when 15% is visible
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container py-5 stats-section" ref={statsRef}>
      <div className="row align-items-center g-5">
        {/* Left Column: Text Content */}
        <div className="col-12 col-lg-6">
          <div className="hero-badge fade-up-scroll delay-1">
            Integrity & Innovation
          </div>
          <h1 className="hero-heading fade-up-scroll delay-2">
            Build Your Wealth on{" "}
            <span className="brand-text">Solid Ground</span>
          </h1>

          <div className="stats-content mt-4">
            <div className="mb-4 fade-up-scroll delay-3">
              <h2 className="fs-5 fw-bold mb-2">Built on Trust</h2>
              <p className="text-muted">
                Horizon is committed to transparency and user security. Our
                advanced Axis platform is used by a dedicated community managing
                significant capital.
              </p>
            </div>

            <div className="mb-4 fade-up-scroll delay-4">
              <h2 className="fs-5 fw-bold mb-2">No spam or gimmicks</h2>
              <p className="text-muted">
                We avoid distraction. No aggressive notifications or
                gamification—just clean, high-performance tools for your
                financial goals.
              </p>
            </div>

            <div className="mb-4 fade-up-scroll delay-5">
              <h2 className="fs-5 fw-bold mb-2">The Horizon universe</h2>
              <p className="text-muted">
                More than trading. We foster an ecosystem of financial tools and
                partnerships tailored to your long-term wealth strategy.
              </p>
            </div>

            <div className="fade-up-scroll delay-5">
              <h2 className="fs-5 fw-bold mb-2">Do better with money</h2>
              <p className="text-muted">
                Through features like Trade-Guard and integrated risk alerts, we
                actively encourage responsible decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual/Image */}
        <div className="col-12 col-lg-6 text-center">
          <div className="fade-up-scroll delay-3">
            <div className="float-anim-2">
              {" "}
              {/* Using your floating keyframe */}
              <img
                src="media/images/ecosystem.png"
                className="img-fluid stats-img mb-4"
                alt="Ecosystem"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.08))" }}
              />
            </div>

            <div className="custom-links mt-3">
              <a href="#" className="hero-link mx-3">
                View All Asset Classes{" "}
                <i className="fa fa-long-arrow-right ms-2"></i>
              </a>
              <a href="#" className="hero-link mx-3">
                Try Kito demo <i className="fa fa-long-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
