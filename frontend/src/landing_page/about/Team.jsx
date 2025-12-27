import React from "react";

function Team() {
  const brandBlue = "#3d77cd";

  return (
    <div className="team-hub-wrapper py-5">
      <div className="container">
        {/* Section Header - Aligned Left for a modern look */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <h6
              className="text-uppercase fw-bold mb-2"
              style={{ color: brandBlue, letterSpacing: "3px" }}
            >
              The Minds Behind Horizon
            </h6>
            <h2 className="display-4 fw-800 text-dark">Meet Our Leadership</h2>
          </div>
        </div>

        {/* Featured Profile Card */}
        <div className="architect-card shadow-lg overflow-hidden">
          <div className="row g-0">
            {/* Left Side: Visual Identity */}
            <div className="col-lg-5 position-relative bg-dark-gradient d-flex align-items-end justify-content-center overflow-hidden">
              <div className="vertical-label-bg">ARCHITECT</div>
              <div className="image-wrapper-modern">
                <img
                  src="media/images/nishaSingh.svg"
                  alt="Nisha Singh"
                  className="img-fluid team-img-modern"
                />
              </div>
              <div className="experience-tag">
                <span className="fw-bold">UI/UX</span> Systems
              </div>
            </div>

            {/* Right Side: Content (Your Exact Text) */}
            <div className="col-lg-7 p-4 p-md-5 bg-white">
              <div className="mb-4">
                <h3 className="fw-800 text-dark mb-1">Nisha Singh</h3>
                <span
                  className="badge rounded-pill px-3 py-2 mb-4"
                  style={{ backgroundColor: "#f0f5ff", color: brandBlue }}
                >
                  LEAD DEVELOPER
                </span>

                <h4 className="h5 fw-bold mb-3" style={{ color: brandBlue }}>
                  Component Architect
                </h4>

                <p
                  className="bio-text text-muted mb-4"
                  style={{ lineHeight: "1.8" }}
                >
                  I am the architect responsible for building and maintaining
                  core front-end components, ensuring a seamless and responsive
                  user experience for Horizon's clients. My focus is on{" "}
                  <strong className="text-dark">
                    robust, scalable, and modern React development
                  </strong>
                  , leveraging performance optimization at every layer.
                </p>

                <p
                  className="bio-text text-muted"
                  style={{ lineHeight: "1.8" }}
                >
                  My day-to-day work involves collaborating with the design
                  team, writing clean modular code, and integrating RESTful APIs
                  to bring real-time data to life on the Axis platform.
                </p>
              </div>

              {/* Connect Links */}
              <div className="d-flex flex-wrap gap-3 mt-5">
                <a href="#" className="modern-social-btn">
                  <i className="bi bi-house-door me-2"></i> Homepage
                </a>
                <a href="#" className="modern-social-btn">
                  <i className="bi bi-envelope me-2"></i> Contact
                </a>
                <a href="#" className="modern-social-btn github-btn">
                  <i className="bi bi-github me-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
