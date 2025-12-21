import React from "react";

function Hero() {
  const brandBlue = "#3d77cd";
  const hoverGrey = "#7b7777";

  return (
    <div
      className="container border-bottom mb-5 lh-lg"
      style={{ maxWidth: "1140px" }}
    >
      <div className="row align-items-center py-5">
        {/* Left Content */}
        <div className="col-lg-6 text-center text-lg-start p-lg-5">
          <h1 className="hero-title display-4 fw-bold">Horizon Products</h1>
          <h3 className="mt-3 hero-subtitle text-muted fw-normal">
            Experience Axis: The powerful, unified trading terminal designed for
            every investor.
          </h3>
          <div className="custom-links mt-4">
            <p className="mb-0 fs-6">
              Explore the full suite of our{" "}
              {/* Bootstrap classes for text decoration and state, inline style for specific brand color */}
              <a
                href="#"
                className="text-decoration-none fw-bold transition-all"
                style={{ color: brandBlue }}
                onMouseEnter={(e) => (e.target.style.color = hoverGrey)}
                onMouseLeave={(e) => (e.target.style.color = brandBlue)}
              >
                technology and features{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </div>

        {/* Right Content - Product Grid */}
        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <i
                  className="fa fa-line-chart fs-3 mb-2"
                  style={{ color: brandBlue }}
                ></i>
                <h5 className="fw-bold">Real-time Data</h5>
                <p className="small text-muted mb-0">
                  Ultra-low latency feeds for precision execution.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <i
                  className="fa fa-shield fs-3 mb-2"
                  style={{ color: brandBlue }}
                ></i>
                <h5 className="fw-bold">Secure Trading</h5>
                <p className="small text-muted mb-0">
                  Institutional grade encryption and safety.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <i
                  className="fa fa-globe fs-3 mb-2"
                  style={{ color: brandBlue }}
                ></i>
                <h5 className="fw-bold">Global Access</h5>
                <p className="small text-muted mb-0">
                  Trade across multiple international markets.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <i
                  className="fa fa-mobile fs-3 mb-2"
                  style={{ color: brandBlue }}
                ></i>
                <h5 className="fw-bold">Mobile First</h5>
                <p className="small text-muted mb-0">
                  Manage your wealth from any device, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
