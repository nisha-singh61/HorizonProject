import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row p-5 align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <h1 className="mb-3 fs-2">Transparent, Flat-Rate Pricing</h1>
          <p>
            Horizon champions clear and competitive pricing. We offer flat,
            low-cost fees across all major segments, ensuring you always know
            exactly what you're paying.
          </p>
          <div className="custom-links">
            <a href="">
              View Complete Fee Structure <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Spacer for large screens */}
        <div className="d-none d-lg-block col-lg-2"></div>

        {/* Pricing Boxes */}
        <div className="col-12 col-md-6 col-lg-6 p-3">
          <div className="row text-center">
            <div className="col-12 col-sm-6 p-3 border pricing-box mb-3 mb-sm-0">
              <h1 className="mb-3">₹0</h1>
              <p>
                Brokerage for Equity Delivery and
                <br />
                all Direct Mutual Funds
              </p>
            </div>
            <div className="col-12 col-sm-6 p-3 border pricing-box">
              <h1 className="mb-3">₹20</h1>
              <p>Flat maximum charge for Intraday and F&Q</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
