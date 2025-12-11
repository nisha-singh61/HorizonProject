import React from "react";

function Stats() {
  return (
    <div className="container p-3 stats-section">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 p-4">
          <h1 className="fs-2 mb-4">Integrity and Innovation</h1>

          <h2 className="fs-5 mb-2">Built on Trust</h2>
          <p className="text-muted mb-3">
            Horizon is committed to transparency and user security. Our advanced
            Axis platform is used by a dedicated community of investors managing
            significant capital, proving our reliability in a dynamic market.
          </p>

          <h2 className="fs-5 mb-2">No spam or gimmicks</h2>
          <p className="text-muted mb-3" style={{ lineHeight: "1.6" }}>
            We avoid distraction. No aggressive notifications, no gamified
            investing, just clean, high-performance applications that let you
            focus entirely on your financial goals.{" "}
            <a href="/philosophies" className="stats-link">
              Our philosophies.
            </a>
          </p>

          <h2 className="fs-5 mb-2">The Horizon universe</h2>
          <p className="text-muted mb-3" style={{ lineHeight: "1.6" }}>
            More than just trading. We foster an ecosystem of financial tools
            and partnerships to provide tailored solutions and deeper insights
            specific to your long-term wealth strategy.
          </p>

          <h2 className="fs-5 mb-2">Do better with money</h2>
          <p className="text-muted" style={{ lineHeight: "1.6" }}>
            Through innovative features like Trade-Guard (our version of Kill
            Switch) and integrated risk alerts, we actively encourage
            responsible decision-making and help you avoid impulsive trades.
          </p>
        </div>

        <div className="col-12 col-lg-6 p-4 text-center">
          <img
            src="media/images/ecosystem.svg"
            className="stats-img mb-3"
          />
          <div className="custom-links">
            <a href="" className="d-block d-md-inline mx-md-3 mb-2 mb-md-0">
              View All Asset Classes <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="" className="d-block d-md-inline mx-md-3">
              Try Kito demo <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
