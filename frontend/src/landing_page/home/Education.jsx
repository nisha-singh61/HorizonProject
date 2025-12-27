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
      { threshold: 0.2 }
    );

    if (eduRef.current) observer.observe(eduRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="education-wrapper py-5" ref={eduRef}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Left Column: Illustrative Image */}
          <div className="col-12 col-md-6 text-center fade-up-scroll delay-1">
            <div className="float-anim-3">
              {" "}
              {/* Faster floating for variety */}
              <img
                src="media/images/education.svg"
                alt="Market Education"
                className="img-fluid education-img"
                style={{ maxWidth: "90%" }}
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="col-12 col-md-6">
            <div className="hero-badge fade-up-scroll delay-1">
              Knowledge Hub
            </div>

            <h1 className="hero-heading fade-up-scroll delay-2">
              Free and Open <span className="brand-text">Market Education</span>
            </h1>

            <div className="edu-content">
              <div className="mb-5 fade-up-scroll delay-3">
                <p className="hero-description mb-3">
                  <strong>Invent</strong>, the largest online stock market
                  education platform covering everything from the basics to
                  advanced trading strategies.
                </p>
                <a href="/invent" className="hero-link">
                  Explore Invent <i className="fa fa-long-arrow-right ms-2"></i>
                </a>
              </div>

              <div className="fade-up-scroll delay-4">
                <p className="hero-description mb-3">
                  <strong>TradingQ&A</strong>, the most active trading and
                  investment community in India for all your market-related
                  queries.
                </p>
                <a href="/qa" className="hero-link">
                  Join the Community{" "}
                  <i className="fa fa-long-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
