import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Section Title */}
      <div className="row p-3 mt-5 text-muted">
        <h3 className="text-center">People</h3>
      </div>

      {/* Team Member */}
      <div className="row p-3 about-section team-section align-items-center">
        {/* Image Column */}
        <div className="col-md-6 col-12 p-3 text-center">
          <img
            src="media/images/nishaSingh.svg"
            alt="Nithin Kamath"
            className="team-img"
          />
          <h5 className="mt-4">Nisha Singh</h5>
          <h6 className="text-muted mt-2">Lead Developer / Component Architect</h6>
        </div>

        {/* Info Column */}
        <div className="col-md-6 col-12 p-3 team-info">
          <p>
            I am the architect responsible for building and maintaining core
            front-end components like this one, ensuring a seamless and
            responsive user experience for Horizon's clients. My focus is on
            robust, scalable, and modern React development, leveraging the
            latest in design and performance optimization.
          </p>
          <p>
            My day-to-day work involves collaborating with the design team,
            writing clean, modular code, and integrating RESTful APIs to bring
            data to life on the Axis platform.
          </p>
          <p>
            I thrive on tackling complex UI challenges and delivering highly
            performant applications.
          </p>
          <p>
            Connect on{" "}
            <a href="#" className="about-link">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="about-link">
              Contact
            </a>{" "}
            /{" "}
            <a href="#" className="about-link">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
