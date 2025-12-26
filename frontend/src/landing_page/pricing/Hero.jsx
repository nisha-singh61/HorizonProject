import React from "react";

function Hero() {
  return (
    /* Replaced maxWidth/padding with 'container' and 'px-4' */
    <div className="container px-4 mb-5 pb-5">
      
      {/* Header Section */}
      <div className="row py-5 mt-5 text-center justify-content-center">
        <div className="col-lg-8 col-md-10">
          <h1 className="pricing-title display-4 fw-bold">Horizon Pricing</h1>
          <h3 className="mt-3 text-muted pricing-subtitle fw-normal">
            Invest with confidence using our straightforward, low-cost fee structure. 
            Designed for clarity, built for performance.
          </h3>
        </div>
      </div>

      {/* 3-Column Pricing Grid */}
      <div className="row g-4 mt-2 justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4">
            <div className="card-body d-flex flex-column align-items-center">
              {/* Used 'img-fluid' and 'w-75' to manage size responsive-ly */}
              <img 
                src="media/images/pricingEquity.png" 
                alt="Equity"
                className="mb-4 img-fluid w-75" 
              />
              <h2 className="fs-3 fw-bold">Zero Equity Brokerage</h2>
              <div className="badge bg-success-subtle text-success mb-3 px-3 py-2">Free Delivery</div>
              <p className="text-muted small">
                Build your long-term portfolio without overhead. Every equity delivery 
                trade on the Horizon platform is ₹0—no hidden fees, no strings attached.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 bg-dark text-white">
            <div className="card-body d-flex flex-column align-items-center">
              <img 
                src="media/images/intradayTrades.png" 
                alt="Intraday"
                className="mb-4 img-fluid w-75" 
              />
              <h2 className="fs-3 fw-bold">High-Speed Trading</h2>
              <div className="badge bg-primary mb-3 px-3 py-2">₹20 Flat Fee</div>
              <p className="text-light opacity-75 small">
                Execute professional-grade intraday and F&O strategies on the 
                <strong> Axis</strong> terminal for a maximum of ₹20 or 0.03% per trade.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12">
          <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4">
            <div className="card-body d-flex flex-column align-items-center">
              <img 
                src="media/images/directMutual.png" 
                alt="Mutual Funds"
                className="mb-4 img-fluid w-75" 
              />
              <h2 className="fs-3 fw-bold">Direct Mutual Funds</h2>
              <div className="badge bg-info-subtle text-info mb-3 px-3 py-2">Zero Commissions</div>
              <p className="text-muted small">
                Maximize your compounding by skipping the middleman. Horizon offers 
                direct mutual funds with ₹0 commissions and zero DP transaction charges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Horizontal Card */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="bg-light rounded-4 p-5 d-flex flex-column flex-lg-row align-items-center justify-content-between shadow-sm border">
            <div className="text-center text-lg-start mb-4 mb-lg-0 col-lg-7">
              <h2 className="fs-3 fw-bold">Diversified Assets</h2>
              <p className="text-muted mb-0">
                Beyond stocks, Horizon gives you seamless access to new IPO launches, 
                Government Bonds, and T-Bills to round out your investment strategy.
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <img 
                src="media/images/otherTrades.png" 
                alt="IPO and Bonds"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Mini-Stats Grid */}
      <div className="row mt-4 g-3">
        <div className="col-6 col-md-3">
          <div className="p-3 border-0 rounded-3 text-center bg-white shadow-sm">
            <h5 className="mb-1 fw-bold">₹0</h5>
            <small className="text-muted">Account Opening</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-3 border-0 rounded-3 text-center bg-white shadow-sm">
            <h5 className="mb-1 fw-bold">₹0</h5>
            <small className="text-muted">Mutual Fund API</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-3 border-0 rounded-3 text-center bg-white shadow-sm">
            <h5 className="mb-1 fw-bold">₹20</h5>
            <small className="text-muted">F&O Trades</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="p-3 border-0 rounded-3 text-center bg-white shadow-sm">
            <h5 className="mb-1 fw-bold">0.03%</h5>
            <small className="text-muted">Intraday Max</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;