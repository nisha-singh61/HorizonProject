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
      { threshold: 0.1 }
    );

    if (pricingRef.current) observer.observe(pricingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pricing-modern-container py-5" ref={pricingRef}>
      <div className="container text-center mb-5">
        <div className="hero-badge fade-up-scroll delay-1 mx-auto">
          Pricing Transparency
        </div>
        <h1 className="display-4 fw-bold mt-3 fade-up-scroll delay-2">
          Simple Fees. <span className="text-gradient">No Hidden Math.</span>
        </h1>
        <p
          className="lead text-muted mx-auto fade-up-scroll delay-3"
          style={{ maxWidth: "600px" }}
        >
          We’ve replaced complex brokerage slabs with two simple pillars of
          value.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Main Value Card: Equity Delivery */}
          <div className="col-12 col-lg-5 fade-up-scroll delay-3">
            <div className="price-card primary-gradient-card h-100">
              <div className="card-header-asset">
                <div className="icon-circle shadow-sm">
                  <i className="fa-solid fa-gem"></i>
                </div>
                <span className="badge rounded-pill bg-white text-primary fw-bold">
                  Free Forever
                </span>
              </div>
              <div className="price-content">
                <h2 className="price-value text-white">₹0</h2>
                <h3 className="h4 text-white mb-3">Equity Delivery</h3>
                <p className="text-white-50">
                  Zero brokerage on all equity delivery trades and direct mutual
                  fund investments. Keep 100% of your long-term wealth.
                </p>
                <ul className="check-list text-white">
                  <li>
                    <i className="fa-solid fa-check me-2"></i> Free Account
                    Opening
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-2"></i> Direct Mutual
                    Funds
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-2"></i> Zero AMC for 1st
                    Year
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Secondary Card: Intraday & F&O */}
          <div className="col-12 col-lg-4 fade-up-scroll delay-5">
            <div className="price-card glass-secondary-card h-100">
              <div className="card-header-asset">
                <div className="icon-circle-outline">
                  <i className="fa-solid fa-bolt-lightning"></i>
                </div>
              </div>
              <div className="price-content">
                <h2 className="price-value">₹20</h2>
                <h3 className="h4 mb-3">Intraday & F&O</h3>
                <p className="text-muted">
                  Flat fee per executed order across Equity, Currency, and
                  Commodity trades. Whichever is lower: ₹20 or 0.03%.
                </p>
                <div className="mt-4 pt-3 border-top">
                  <a href="/pricing" className="modern-arrow-link">
                    Full Fee Schedule{" "}
                    <i className="fa-solid fa-arrow-right-long ms-2"></i>
                  </a>
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
