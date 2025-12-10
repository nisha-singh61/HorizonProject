import React from "react";

function Hero() {
  return (
    <div
      className="container border-bottom mb-5 lh-lg"
      style={{ maxWidth: "1140px" }}
    >
      <div className="text-center mt-5 p-5">
        <h1 className="hero-title">Zerodha Products</h1>
        <h3 className="mt-3 hero-subtitle">
          Sleek, modern and intuitive trading platforms
        </h3>
        <div className="custom-links">
          <p className="mb-5 fs-6 p-4">
            Check out our{" "}
            <a href="">
              investment offerings{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
