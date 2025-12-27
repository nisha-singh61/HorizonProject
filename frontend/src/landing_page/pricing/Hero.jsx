import React from "react";

function Hero() {
  return (
    <div className="pricing-hero-wrapper pb-5">
      {/* Dynamic Header Section */}
      <div className="container px-4">
        <div className="row py-5 mt-5 text-center justify-content-center">
          <div className="col-lg-8">
            <div className="hero-badge mx-auto mb-3">Pricing Transparency</div>
            <h1 className="pricing-main-title display-4 fw-bold">
              Fees that empower <span className="text-gradient">your growth.</span>
            </h1>
            <p className="mt-3 text-muted pricing-lead mx-auto">
              No complex calculations. No hidden percentages. Just straightforward 
              rates designed for the modern investor.
            </p>
          </div>
        </div>

        {/* The 3-Column Bento Grid */}
        <div className="row g-4 align-items-stretch">
          
          {/* Box 1: Equity */}
          <div className="col-lg-4 col-md-6">
            <div className="pricing-glass-card h-100">
              <div className="card-top">
                <img src="media/images/pricingEquity.png" alt="Equity" className="pricing-img" />
              </div>
              <div className="card-bottom">
                <h2 className="h4 fw-bold mb-2">Equity Delivery</h2>
                <div className="price-tag mb-3">₹0 <small>Brokerage</small></div>
                <p className="small text-muted mb-0">
                  Build your legacy portfolio with zero friction. Every delivery trade is 100% free.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2: Featured Intraday (Dark Mode) */}
          <div className="col-lg-4 col-md-6">
            <div className="pricing-featured-card h-100">
              <div className="card-top">
                <img src="media/images/intradayTrades.png" alt="Intraday" className="pricing-img" />
              </div>
              <div className="card-bottom">
                <h2 className="h4 fw-bold mb-2">Day Trading & F&O</h2>
                <div className="price-tag-featured mb-3">₹20 <small>Flat Fee</small></div>
                <p className="small text-light-emphasis mb-0 opacity-75">
                  Professional speed. Institutional rates. Flat ₹20 per executed order on our Axis terminal.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3: Mutual Funds */}
          <div className="col-lg-4 col-md-12">
            <div className="pricing-glass-card h-100">
              <div className="card-top">
                <img src="media/images/directMutual.png" alt="Mutual Funds" className="pricing-img" />
              </div>
              <div className="card-bottom">
                <h2 className="h4 fw-bold mb-2">Mutual Funds</h2>
                <div className="price-tag mb-3">₹0 <small>Commission</small></div>
                <p className="small text-muted mb-0">
                  Direct funds mean higher returns. We charge absolutely nothing for MF transactions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Feature Bar */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="asset-banner p-4 p-lg-5">
              <div className="row align-items-center">
                <div className="col-lg-7 text-center text-lg-start">
                  <h2 className="h3 fw-bold mb-2 text-white">Institutional Asset Access</h2>
                  <p className="text-white-50 mb-0">
                    Trade IPOs, Bonds, and T-Bills with the same ease as stocks. 
                    Unified access to the entire Indian market ecosystem.
                  </p>
                </div>
                <div className="col-lg-5 text-center mt-4 mt-lg-0">
                  <img src="media/images/otherTrades.png" alt="Bonds" className="banner-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Stats Bento Row */}
        <div className="row mt-4 g-3">
          {[
            { val: "₹0", label: "Account Opening" },
            { val: "₹0", label: "Maintenance (Yr 1)" },
            { val: "₹20", label: "Options Trading" },
            { val: "0.03%", label: "Intraday Cap" }
          ].map((stat, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="stat-bento-box">
                <h5 className="fw-800 mb-0">{stat.val}</h5>
                <span className="small text-muted">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;