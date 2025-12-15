import React from "react";

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;

function Universe() {
  const handleSignInClick = () => {
    window.location.href = DASHBOARD_SIGNUP_URL;
  };

  return (
    <div
      className="container universe-container"
      style={{
        marginTop: "6rem",
        lineHeight: "2",
        fontSize: "1.05em",
        maxWidth: "1140px",
      }}
    >
      <div className="row text-center">
        <h1 className="universe-title mb-4">The Horizon Universe</h1>
        <p className="universe-intro">
          Extend your Axis trading and investment experience even further with
          our partner platforms and ecosystem.
        </p>

        {/* Row 1 */}
        <div className="row mt-4">
          <div className="col-4 p-4">
            <img
              src="media/images/horizonWealth.svg"
              className="img-fluid mb-3"
              alt="Horizon Wealth"
              style={{ maxHeight: "250px" }}
            />
            <p>
              Horizon Wealth is our dedicated asset management arm, focusing on
              building high-quality, low-cost index funds for long-term goal
              planning.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/alphaEngine.png"
              alt="Alpha Engine"
              className="mb-3"
              style={{
                maxHeight: "250px",
              }}
            />
            <p>
              Alpha Engine: An advanced quantitative platform for building,
              backtesting, and paper trading complex options strategies without
              writing a single line of code.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/insightsPro.png"
              className="img-fluid mb-3"
              alt="Insights Pro"
              style={{ maxHeight: "250px" }}
            />
            <p>
              Insight Pro provides institutional-grade research tools,
              fundamental analysis, competitive benchmarking, and comprehensive
              sector deep-dives for informed decisions.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row mt-4">
          <div className="col-4 p-4">
            <img
              src="media/images/strategyFlow.png"
              className="img-fluid mb-3"
              alt="Strategy Flow"
              style={{ maxHeight: "250px" }}
            />
            <p>
              **Strategy Flow:** A visual systematic trading interface allowing
              users to automate trade execution based on simple to highly
              complex technical indicators.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/catalyst.png"
              className="img-fluid mb-3"
              alt="Catalyst Portfolios"
              style={{ maxHeight: "250px" }}
            />
            <p>
              Catalyst Portfolios: Managed investment baskets and thematic
              portfolios professionally curated to help you invest in market
              trends with a single click.
            </p>
          </div>
          <div className="col-4 p-4">
            <img
              src="media/images/protectMe.png"
              className="img-fluid mb-3"
              alt="ProtectMe"
              style={{ maxHeight: "250px" }}
            />
            <p>
              ProtectMe: Your personal advisory platform for objective,
              personalized guidance on selecting the right life, health, and
              term insurance policies.
            </p>
          </div>
        </div>
        <button
          onClick={handleSignInClick}
          className="universe-btn p-2 btn fs-5 mb-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
