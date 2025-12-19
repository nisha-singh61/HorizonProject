import React from "react";

function Hero() {
  return (
    <div
      className="container price-container"
      style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
    >
      {/* Header Section */}
      <div className="row p-5 mt-5 text-center">
        <h1 className="pricing-title">Horizon Pricing</h1>
        <h3 className="mt-3 text-muted pricing-subtitle">
          Invest with confidence using our straightforward, low-cost fee structure
        </h3>
      </div>

      {/* 2x2 Pricing Grid */}
      <div className="row mt-2 text-center">
        {/* Row 1 - Card 1: Equity */}
        <div className="col-6 p-5 border-bottom border-end">
          <img 
            src="media/images/pricingEquity.png" 
            alt="Equity"
            style={{ width: "350px" }}
            className="mb-3" 
          />
          <h2 className="fs-3">Zero Equity Brokerage</h2>
          <p className="text-muted px-4">
            Build your long-term portfolio without overhead. Every equity delivery 
            trade on the Horizon platform is ₹0—no hidden fees, no strings attached.
          </p>
        </div>

        {/* Row 1 - Card 2: Intraday */}
        <div className="col-6 p-5 border-bottom">
          <img 
            src="media/images/intradayTrades.png" 
            alt="Intraday"
            style={{ width: "300px" }}
            className="mb-3" 
          />
          <h2 className="fs-3">High-Speed Trading</h2>
          <p className="text-muted px-4">
            Execute professional-grade intraday and F&O strategies on the 
            <strong> Axis</strong> terminal for a maximum of ₹20 or 0.03% per trade.
          </p>
        </div>

        {/* Row 2 - Card 3: Mutual Funds */}
        <div className="col-6 p-5 border-end">
          <img 
            src="media/images/directMutual.png" 
            alt="Mutual Funds"
            style={{ width: "350px" }}
            className="mb-3" 
          />
          <h2 className="fs-3">Direct Mutual Funds</h2>
          <p className="text-muted px-4">
            Maximize your compounding by skipping the middleman. Horizon offers 
            direct mutual funds with ₹0 commissions and zero DP transaction charges.
          </p>
        </div>

        {/* Row 2 - Card 4: IPO & Bonds */}
        <div className="col-6 p-5">
          <img 
            src="media/images/otherTrades.png" 
            alt="IPO and Bonds"
            style={{ width: "300px" }}
            className="mb-3" 
          />
          <h2 className="fs-3">Diversified Assets</h2>
          <p className="text-muted px-4">
            Beyond stocks, Horizon gives you seamless access to new IPO launches, 
            Government Bonds, and T-Bills to round out your investment strategy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;