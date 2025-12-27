import React, { useEffect, useRef } from "react";

function Awards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // This adds the class that triggers all CSS transitions
            entry.target.classList.add("start-animation");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="awards-section py-5 overflow-hidden" ref={sectionRef}>
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Left Column: Image with Floating & Entrance */}
          <div className="col-12 col-md-6 p-4 text-center fade-up-scroll delay-1">
            <div className="float-anim-1">
              <img
                src="media/images/largestBroker.png"
                alt="Largest Broker Award"
                className="img-fluid awards-img shadow-lg rounded-4"
                style={{ width: "420px" }}
              />
            </div>
          </div>

          {/* Right Column: Text and Icon Lists */}
          <div className="col-12 col-md-6 p-4 text-center text-md-start">
            <div className="hero-badge fade-up-scroll delay-2">
              Market Leader
            </div>

            <h1 className="hero-heading fade-up-scroll delay-3">
              Horizon: Your <span className="brand-text">Foundation</span> for
              Growth
            </h1>

            <p className="hero-description fade-up-scroll delay-4">
              Axis, the flagship trading platform of Horizon, is trusted by a
              rapidly growing community of traders. We provide the
              infrastructure to scale your investment journey.
            </p>

            <div className="row g-3 fade-up-scroll delay-5">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="list-item-hover">
                    <i className="fa-solid fa-circle-check brand-text me-2"></i>{" "}
                    Stocks & IPOs
                  </li>
                  <li className="list-item-hover">
                    <i className="fa-solid fa-circle-check brand-text me-2"></i>{" "}
                    Mutual Funds
                  </li>
                  <li className="list-item-hover">
                    <i className="fa-solid fa-circle-check brand-text me-2"></i>{" "}
                    Bonds
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="list-item-hover">
                    <i className="fa-solid fa-circle-check brand-text me-2"></i>{" "}
                    Strategic F&O
                  </li>
                  <li className="list-item-hover">
                    <i className="fa-solid fa-circle-check brand-text me-2"></i>{" "}
                    Global ETFs
                  </li>
                  <li className="list-item-hover">
                    <i className="fa-solid fa-circle-check brand-text me-2"></i>{" "}
                    Commodities
                  </li>
                </ul>
              </div>
            </div>

            {/* Press Branding */}
            <div className="mt-5 pt-4 border-top fade-up-scroll delay-5 opacity-75">
              <img
                src="media/images/pressLogos.svg"
                alt="Press"
                className="img-fluid"
                style={{ maxHeight: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
