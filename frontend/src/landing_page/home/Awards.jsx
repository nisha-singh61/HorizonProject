import React from "react";

function Awards() {
  return (
    <div className="container mt-5 awards-section">
      <div className="row align-items-center">
        {/* Image column */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid awards-img"
            width={"600px"}
          />
        </div>

        {/* Text column */}
        <div className="col-12 col-md-6 p-4 mt-md-5 text-center text-md-start">
          <h1 className="awards-title">Horizon: Your Foundation for Growth</h1>
          <p className="mb-4 awards-text">
            Axis, the flagship trading platform of Horizon, is trusted by a
            rapidly growing community of traders and investors. We offer access
            to a diversified range of assets including:
          </p>

          {/* Lists */}
          <div className="row">
            <div className="col-6 text-start">
              <ul className="awards-list">
                <li>Long-Term Equity (Stocks & IPOs)</li>
                <li>Goal-Based MFs (Direct Mutual Funds)</li>
                <li>Fixed Income Assets (Bonds & G-Secs)</li>
              </ul>
            </div>
            <div className="col-6 text-start">
              <ul className="awards-list">
                <li>Strategic Derivatives (F&O)</li>
                <li>Global Securities (ETFs & International Exposure)</li>
                <li>Commodity & Currency Trading</li>
              </ul>
            </div>
          </div>

          {/* Press logos */}
          <div className="text-center text-md-start mt-4">
            <img
              src="media/images/pressLogos.svg"
              alt="Press Logos"
              className="img-fluid awards-press-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
