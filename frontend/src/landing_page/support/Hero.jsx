import React from "react";

function Hero() {
  const brandColor = "#3d77cd";

  return (
    <div className="bg-white border-bottom overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        className="position-absolute opacity-10 rounded-circle"
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: brandColor,
          filter: "blur(100px)",
          top: "-10%",
          right: "-10%",
        }}
      ></div>

      <div className="container position-relative py-5">
        <div className="row g-5 align-items-center py-4">
          {/* Left Column: Messaging & Search */}
          <div className="col-lg-7">
            <div
              className="d-inline-flex align-items-center rounded-pill px-3 py-1 mb-4 border"
              style={{ color: brandColor, backgroundColor: "#f0f5ff" }}
            >
              <span className="fw-bold small">HORIZON HELP CENTER</span>
            </div>

            <h1 className="display-4 fw-bold mb-4" style={{ color: "#1e293b" }}>
              Master your{" "}
              <span style={{ color: brandColor }}>Financial Frontier.</span>
            </h1>

            <p className="lead text-muted mb-5">
              Access technical documentation, trading guides, and account
              support powered by Horizon's core infrastructure.
            </p>

            {/* Premium Search Bar */}
            <div className="bg-white p-2 rounded-4 shadow-lg border d-flex align-items-center mb-3">
              <div className="flex-grow-1 d-flex align-items-center ps-3">
                <i
                  className="fa-solid fa-magnifying-glass me-3"
                  style={{ color: brandColor }}
                ></i>
                <input
                  type="text"
                  className="form-control border-0 shadow-none fs-5"
                  placeholder="Describe your issue..."
                />
              </div>
              <button
                className="btn btn-lg rounded-3 px-4 text-white fw-bold d-none d-md-block"
                style={{ backgroundColor: brandColor }}
              >
                Search
              </button>
            </div>

            <div className="small text-muted">
              Common:{" "}
              <span className="text-dark fw-medium">
                API Integration, Fund Transfer, KYC Status
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Support Cards */}
          <div className="col-lg-5">
            <div className="row g-3">
              <div className="col-12">
                <div
                  className="card border-0 p-4 rounded-4 text-white shadow"
                  style={{ backgroundColor: brandColor }}
                >
                  <div className="mb-3">
                    <i className="fa-solid fa-headset fa-2x"></i>
                  </div>
                  <h4 className="fw-bold">24/7 Priority Support</h4>
                  <p className="opacity-75 small">
                    Live chat with our technical desk for immediate trade
                    assistance.
                  </p>
                  <div className="mt-2 fw-bold small">
                    Connect Now <i className="fa-solid fa-arrow-right ms-2"></i>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-light border">
                  <i
                    className="fa-solid fa-graduation-cap mb-3 fa-xl"
                    style={{ color: brandColor }}
                  ></i>
                  <h6 className="fw-bold mb-1">Academy</h6>
                  <p className="text-muted extra-small mb-0">Learn Trading</p>
                </div>
              </div>

              <div className="col-6">
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-light border">
                  <i
                    className="fa-solid fa-file-invoice-dollar mb-3 fa-xl"
                    style={{ color: brandColor }}
                  ></i>
                  <h6 className="fw-bold mb-1">Tax Center</h6>
                  <p className="text-muted extra-small mb-0">Reports & P&L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
