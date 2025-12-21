import React from "react";

function About() {
  const brandColor = { color: "#3d77cd" };
  const brandBg = { backgroundColor: "#3d77cd" };

  return (
    <>
      <style>
        {`
          .btn-horizon {
            color: #3d77cd;
            border-color: #3d77cd;
            background-color: white;
            transition: all 0.3s ease;
          }
          .btn-horizon:hover {
            background-color: #3d77cd !important;
            color: white !important;
          }
          /* New Hover Effect for the link */
          .brand-link {
            color: #3d77cd;
            transition: color 0.3s ease;
            text-decoration: none;
          }
          .brand-link:hover {
            color: #7b7777 !important;
          }
        `}
      </style>

      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row justify-content-center text-center py-5">
            <div className="col-lg-8">
              <span
                className="badge rounded-pill mb-3 px-3 py-2 text-uppercase fw-bold"
                style={brandBg}
              >
                Our Vision
              </span>
              <h1 className="display-5 fw-bold text-dark mb-4">
                Redefining the boundaries of{" "}
                <span style={brandColor}>digital finance.</span>
              </h1>
              <p className="lead text-muted">
                Horizon is charting the course for the next generation of
                investors by building a more inclusive and efficient financial
                ecosystem.
              </p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="card-body">
                  <div className="mb-3" style={brandColor}>
                    <i className="bi bi-rocket-takeoff fs-1"></i>
                  </div>
                  <h3 className="h5 fw-bold">The Mission</h3>
                  <p className="text-muted small">
                    Launched on October 6th, 2024, to democratize access to
                    global markets by eliminating complexities, high fees, and
                    slow execution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 text-white bg-dark">
                <div className="card-body">
                  <div className="mb-3" style={brandColor}>
                    <i className="bi bi-cpu fs-1"></i>
                  </div>
                  <h3 className="h5 fw-bold text-white">Axis Terminal</h3>
                  <p className="text-light small">
                    Our flagship trading terminal provides cutting-edge,
                    low-latency technology for millions of users managing
                    billions in annual volume.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="card-body">
                  <div className="mb-3" style={brandColor}>
                    <i className="bi bi-lightbulb fs-1"></i>
                  </div>
                  <h3 className="h5 fw-bold">Venture Edge</h3>
                  <p className="text-muted small">
                    Our incubation arm actively funds and supports emerging
                    fintech solutions that align with our core design
                    philosophy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center py-5 rounded-4 bg-white shadow-sm mx-1">
            <div className="col-lg-6 px-5">
              <h2 className="fw-bold mb-4">Innovation is our constant</h2>
              <p className="text-muted">
                We are deeply committed to financial literacy, hosting open
                educational resources and a vibrant community forum to empower
                all investors.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a
                  href="#"
                  className="btn btn-horizon rounded-pill px-4 fw-bold shadow-sm"
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
                    <h4 className="fw-bold mb-0">Oct 2024</h4>
                    <small className="text-muted">Founded</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border rounded text-center">
                    <h4 className="fw-bold mb-0">Billions</h4>
                    <small className="text-muted">Annual Vol.</small>
                  </div>
                </div>
                <div className="col-12 text-center pt-3">
                  <p className="small mb-0">
                    See what the media is{" "}
                    {/* CHANGED: Replaced style with brand-link class */}
                    <a href="#" className="brand-link fw-bold">
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
    </>
  );
}

export default About;
