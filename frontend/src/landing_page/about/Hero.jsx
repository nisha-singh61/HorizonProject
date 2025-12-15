import React from "react";

function About() {
  return (
    <div className="container about-section">
      {/* Top Heading */}
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-4 text-center text-muted">
          We are redefining the boundaries of digital finance.
          <br />
          Horizon is charting the course for the next generation of investors.
        </h1>
      </div>

      {/* Main Content */}
      <div className="row p-5 mt-5 border-top about-content">
        <div className="col-md-6 pe-4">
          <p>
            We launched our platform on the 6th of October, 2024, with a
            singular mission: to democratize access to global and local
            financial markets. We aimed to eliminate complexities, high fees,
            and slow execution that traditionally hinder modern investors. We
            named our company Horizon, symbolizing the vast opportunities we
            open up for our clients.
          </p>
          <p>
            Today, our cutting-edge, low-latency technology and transparent
            pricing have quickly established us as a leading digital investment
            platform in the region.
          </p>
          <p>
            Millions of users rely on our flagship trading terminal, Axis,
            to execute sophisticated strategies and manage their wealth. Our
            platform processes billions in transaction volume annually, a
            testament to the trust our community places in our systems.
          </p>
        </div>

        <div className="col-md-6 ps-4">
          <p>
            Beyond execution, we are deeply committed to financial literacy. We
            host several popular open educational resources and a vibrant
            community forum to empower new and experienced investors alike.
          </p>
          <p>
            <a href="#" className="about-link">
              Venture Edge
            </a>
            , our incubation arm, actively funds and supports emerging fintech
            solutions that share our vision of creating a more inclusive and
            efficient financial ecosystem.
          </p>
          <p>
            Innovation is our constant. Stay updated with our latest
            advancements on our{" "}
            <a href="#" className="about-link">
              Platform Blog
            </a>{" "}
            or explore our impact in the news by seeing what the media is{" "}
            <a href="#" className="about-link">
              reporting on us
            </a>{" "}
            . You can also dive deeper into the core principles and product
            design of Horizon on our{" "}
            <a href="#" className="about-link">
              Design Philosophy
            </a>
            page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
