import React from "react";

function About() {
  const brandBlue = "#3d77cd";

  return (
    <div className="about-container container-fluid bg-light py-5">
      <div className="container">
        {/* Hero Section */}
        <header className="row justify-content-center text-center py-5">
          <div className="col-lg-8">
            <span
              className="badge mb-3 px-3 py-2 text-uppercase fw-bold"
              style={{ backgroundColor: brandBlue, letterSpacing: "1px" }}
            >
              Our Vision
            </span>
            <h1 className="display-4 fw-bold text-dark mb-4">
              Redefining the boundaries of <br />
              <span className="brand-gradient">digital finance.</span>
            </h1>
            <p className="lead text-muted mx-lg-5">
              Horizon is charting the course for the next generation of
              investors by building a more inclusive and efficient financial
              ecosystem.
            </p>
          </div>
        </header>

        {/* Info Cards Grid */}
        <section className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          <div className="col">
            <div className="card h-100 border-0 shadow-sm p-4 info-card">
              <div className="card-body">
                <div className="mb-4" style={{ color: brandBlue }}>
                  <i className="bi bi-rocket-takeoff fs-1"></i>
                </div>
                <h3 className="h5 fw-bold text-dark">The Mission</h3>
                <p className="text-muted small mb-0">
                  Launched on October 6th, 2024, to democratize access to global
                  markets by eliminating complexities and high fees.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 border-0 shadow-sm p-4 text-white terminal-card info-card">
              <div className="card-body">
                <div className="mb-4" style={{ color: brandBlue }}>
                  <i className="bi bi-cpu fs-1"></i>
                </div>
                <h3 className="h5 fw-bold text-white">Axis Terminal</h3>
                <p className="text-light small opacity-75 mb-0">
                  Our flagship trading terminal provides cutting-edge,
                  low-latency technology for millions of users worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 border-0 shadow-sm p-4 info-card">
              <div className="card-body">
                <div className="mb-4" style={{ color: brandBlue }}>
                  <i className="bi bi-lightbulb fs-1"></i>
                </div>
                <h3 className="h5 fw-bold text-dark">Venture Edge</h3>
                <p className="text-muted small mb-0">
                  Our incubation arm actively funds and supports emerging
                  fintech solutions that align with our core design philosophy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="row align-items-center py-5 rounded-5 bg-white shadow-sm mx-1">
          <div className="col-lg-6 px-lg-5 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4 text-dark display-6">
              Innovation is our constant
            </h2>
            <p className="text-muted mb-4">
              We host open educational resources and a vibrant community forum
              to empower all investors with the knowledge they need.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-brand rounded-pill px-4 fw-bold">
                Platform Blog
              </button>
              <button className="btn btn-outline-dark rounded-pill px-4">
                Design Philosophy
              </button>
            </div>
          </div>

          <div className="col-lg-6 px-lg-5">
            <div className="row g-3">
              <div className="col-6">
                <div className="p-4 rounded-4 text-center stat-box">
                  <h4 className="fw-bold mb-0 text-dark">Oct 2024</h4>
                  <small className="text-muted text-uppercase small">
                    Founded
                  </small>
                </div>
              </div>
              <div className="col-6">
                <div className="p-4 rounded-4 text-center stat-box">
                  <h4 className="fw-bold mb-0 text-dark">Billions</h4>
                  <small className="text-muted text-uppercase small">
                    Annual Vol.
                  </small>
                </div>
              </div>
              <div className="col-12 text-center pt-3">
                <p className="small mb-0 text-muted">
                  See what the media is{" "}
                  <a
                    href="#"
                    className="reporting-link fw-bold text-decoration-none"
                    style={{ color: brandBlue }}
                  >
                    reporting on us
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
