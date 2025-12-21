import React from "react";

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;

function Hero() {
  const handleSignInClick = () => {
    window.location.href = DASHBOARD_SIGNUP_URL;
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5 d-block mx-auto img-fluid hero-img"
        />
        <h1 className="mt-5 fs-3">The Next Generation of Investing</h1>
        <p className="mb-5 fs-5">
          A high-speed, secure, and intuitive platform designed for modern
          traders and investors. Access equities, bonds, F&O, and MFs effortlessly.
        </p>

        <button onClick={handleSignInClick} className="btn fs-5 mb-5 hero-btn">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
