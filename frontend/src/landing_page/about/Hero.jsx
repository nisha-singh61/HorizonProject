import React, { useState } from "react";

function About() {
  const brandBlue = "#3d77cd";
  const hoverGrey = "#7b7777";

  const [btnHover, setBtnHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        {/* Hero Section */}
        <div className="row justify-content-center text-center py-5">
          <div className="col-lg-8">
            <span
              className="badge rounded-pill mb-3 px-3 py-2 text-uppercase fw-bold"
              style={{ backgroundColor: brandBlue }}
            >
              Our Vision
            </span>
            <h1 className="display-5 fw-bold text-dark mb-4">
              Redefining the boundaries of{" "}
              <span style={{ color: brandBlue }}>digital finance.</span>
            </h1>
            <p className="lead text-muted">
              Horizon is charting the course for the next generation of
              investors by building a more inclusive and efficient financial
              ecosystem.
            </p>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <div className="card-body">
                <div className="mb-3" style={{ color: brandBlue }}>
                  <i className="bi bi-rocket-takeoff fs-1"></i>
                </div>
                <h3 className="h5 fw-bold text-dark">The Mission</h3>
                <p className="text-muted small">
                  Launched on October 6th, 2024, to democratize access to global
                  markets by eliminating complexities and high fees.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-white bg-dark">
              <div className="card-body">
                <div className="mb-3" style={{ color: brandBlue }}>
                  <i className="bi bi-cpu fs-1"></i>
                </div>
                <h3 className="h5 fw-bold text-white">Axis Terminal</h3>
                <p className="text-light small">
                  Our flagship trading terminal provides cutting-edge,
                  low-latency technology for millions of users worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <div className="card-body">
                <div className="mb-3" style={{ color: brandBlue }}>
                  <i className="bi bi-lightbulb fs-1"></i>
                </div>
                <h3 className="h5 fw-bold text-dark">Venture Edge</h3>
                <p className="text-muted small">
                  Our incubation arm actively funds and supports emerging
                  fintech solutions that align with our core design philosophy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Grid */}
        <div className="row align-items-center py-5 rounded-4 bg-white shadow-sm mx-1">
          <div className="col-lg-6 px-5">
            <h2 className="fw-bold mb-4 text-dark">
              Innovation is our constant
            </h2>
            <p className="text-muted">
              We host open educational resources and a vibrant community forum
              to empower all investors.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a
                href="#"
                className="btn rounded-pill px-4 fw-bold shadow-sm"
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
                style={{
                  color: btnHover ? "white" : brandBlue,
                  backgroundColor: btnHover ? brandBlue : "white",
                  borderColor: brandBlue,
                  transition: "all 0.3s ease",
                }}
              >
                Platform Blog
              </a>
              <a href="#" className="btn btn-outline-dark rounded-pill px-4">
                Design Philosophy
              </a>
            </div>
          </div>

          <div className="col-lg-6 px-5 mt-4 mt-lg-0 border-start-lg">
            <div className="row g-3">
              <div className="col-6">
                <div className="p-3 border rounded text-center">
                  <h4 className="fw-bold mb-0 text-dark">Oct 2024</h4>
                  <small className="text-muted">Founded</small>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 border rounded text-center">
                  <h4 className="fw-bold mb-0 text-dark">Billions</h4>
                  <small className="text-muted">Annual Vol.</small>
                </div>
              </div>
              <div className="col-12 text-center pt-3">
                <p className="small mb-0 text-muted">
                  See what the media is{" "}
                  <a
                    href="#"
                    className="text-decoration-none fw-bold"
                    onMouseEnter={() => setLinkHover(true)}
                    onMouseLeave={() => setLinkHover(false)}
                    style={{
                      color: linkHover ? hoverGrey : brandBlue,
                      transition: "color 0.3s ease",
                    }}
                  >
                    reporting on us
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
