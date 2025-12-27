import React from "react";

function Team() {
  const brandBlue = "#3d77cd";

  return (
    <div className="team-container bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h6
              className="text-uppercase fw-bold mb-2"
              style={{ color: brandBlue, letterSpacing: "2px" }}
            >
              The Minds Behind Horizon
            </h6>
            <h2 className="display-5 fw-bold text-dark">Meet Our Leadership</h2>
            <div
              className="mx-auto mt-3"
              style={{
                width: "60px",
                height: "4px",
                backgroundColor: brandBlue,
                borderRadius: "2px",
              }}
            ></div>
          </div>
        </div>

        {/* Featured Profile Card */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="profile-card shadow-sm p-4 p-lg-5">
              <div className="row align-items-center g-5">
                {/* Image Section */}
                <div className="col-md-5 text-center">
                  <div className="image-wrapper mb-4">
                    <img
                      src="media/images/nishaSingh.svg"
                      alt="Nisha Singh"
                      className="team-img-modern"
                    />
                  </div>
                  <h3 className="fw-bold text-dark mb-1">Nisha Singh</h3>
                  <span className="role-badge fw-bold text-uppercase">
                    Lead Developer
                  </span>
                </div>

                {/* Content Section */}
                <div className="col-md-7 border-start-md px-lg-5">
                  <div className="mb-4">
                    <h4
                      className="h5 fw-bold mb-3"
                      style={{ color: brandBlue }}
                    >
                      Component Architect
                    </h4>
                    <p className="bio-text">
                      I am the architect responsible for building and
                      maintaining core front-end components, ensuring a seamless
                      and responsive user experience for Horizon's clients. My
                      focus is on
                      <strong>
                        {" "}
                        robust, scalable, and modern React development
                      </strong>
                      , leveraging performance optimization at every layer.
                    </p>
                    <p className="bio-text">
                      My day-to-day work involves collaborating with the design
                      team, writing clean modular code, and integrating RESTful
                      APIs to bring real-time data to life on the Axis platform.
                    </p>
                  </div>

                  {/* Connect Links */}
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <a href="#" className="social-link">
                      <i className="bi bi-house-door me-2"></i>Homepage
                    </a>
                    <a href="#" className="social-link">
                      <i className="bi bi-envelope me-2"></i>Contact
                    </a>
                    <a href="#" className="social-link">
                      <i className="bi bi-github me-2"></i>GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
