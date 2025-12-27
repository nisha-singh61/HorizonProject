import React, { useEffect, useRef } from "react";

function Pricing() {
  const pricingRef = useRef(null);

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

    if (pricingRef.current) observer.observe(pricingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pricing-wrapper py-5" ref={pricingRef}>
      <div className="container py-5">
        <div className="row align-items-center g-4">
          {/* Left Side: Headline and Description */}
          <div className="col-12 col-md-5 col-lg-4">
            <div className="hero-badge fade-up-scroll delay-1">
              Best-in-class Rates
            </div>
            <h1 className="hero-heading fade-up-scroll delay-2">
              Transparent, <span className="brand-text">Flat-Rate</span> Pricing
            </h1>
            <p className="hero-description fade-up-scroll delay-3">
              Horizon champions clear and competitive pricing. We offer flat,
              low-cost fees across all major segments, ensuring you always know
              exactly what you're paying.
            </p>
            <div className="fade-up-scroll delay-4">
              <a href="/pricing" className="hero-link">
                View Complete Fee Structure{" "}
                <i className="fa fa-long-arrow-right ms-2"></i>
              </a>
            </div>
          </div>

          {/* Spacer for large screens */}
          <div className="d-none d-lg-block col-lg-1"></div>

          {/* Right Side: Pricing Cards */}
          <div className="col-12 col-md-7 col-lg-7">
            <div className="row g-4">
              {/* Box 1 */}
              <div className="col-12 col-sm-6 fade-up-scroll delay-3">
                <div className="feature-card pricing-card text-center h-100">
                  <div className="pricing-icon mb-3">
                    <i className="fa-solid fa-gift fs-1"></i>
                  </div>
                  <h1 className="display-4 fw-800 brand-text mb-3">₹0</h1>
                  <p className="text-muted fw-500">
                    Brokerage for Equity Delivery and all Direct Mutual Funds
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="col-12 col-sm-6 fade-up-scroll delay-5">
                <div className="feature-card pricing-card text-center h-100">
                  <div className="pricing-icon mb-3">
                    <i className="fa-solid fa-bolt fs-1"></i>
                  </div>
                  <h1 className="display-4 fw-800 brand-text mb-3">₹20</h1>
                  <p className="text-muted fw-500">
                    Flat maximum charge for Intraday and F&O trades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
