import React from "react";

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;

function Universe() {
  const handleSignInClick = () => {
    window.location.href = DASHBOARD_SIGNUP_URL;
  };

  const partners = [
    {
      img: "media/images/horizonWealth.svg",
      title: "Horizon Wealth",
      desc: "Our dedicated asset management arm, focusing on building high-quality, low-cost index funds.",
    },
    {
      img: "media/images/alphaEngine.png",
      title: "Alpha Engine",
      desc: "Advanced quantitative platform for building and backtesting complex options strategies.",
    },
    {
      img: "media/images/insightsPro.png",
      title: "Insight Pro",
      desc: "Institutional-grade research tools, fundamental analysis, and sector deep-dives.",
    },
    {
      img: "media/images/strategyFlow.png",
      title: "Strategy Flow",
      desc: "Automate trade execution based on simple to highly complex technical indicators.",
    },
    {
      img: "media/images/catalyst.png",
      title: "Catalyst Portfolios",
      desc: "Managed investment baskets curated to help you invest in market trends with one click.",
    },
    {
      img: "media/images/protectMe.png",
      title: "ProtectMe",
      desc: "Personalized advisory for selecting the right life, health, and term insurance policies.",
    },
  ];

  return (
    <section className="universe-section py-5">
      <div className="container py-5 text-center">
        <div className="hero-badge mx-auto mb-3">The Ecosystem</div>
        <h1 className="universe-main-title mb-3">
          The Horizon <span className="text-gradient">Universe</span>
        </h1>
        <p className="universe-subtitle mb-5 mx-auto">
          A seamless ecosystem of partner platforms designed to supercharge your
          trading and investment experience.
        </p>

        <div className="row g-4">
          {partners.map((partner, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="universe-card">
                <div className="card-image-box">
                  <img
                    src={partner.img}
                    alt={partner.title}
                    className="partner-logo"
                  />
                </div>
                <div className="card-body-content">
                  <h3 className="h5 fw-bold mb-2">{partner.title}</h3>
                  <p className="small text-muted mb-0">{partner.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4">
          <button
            onClick={handleSignInClick}
            className="modern-signup-btn shadow-lg"
          >
            Create Free Account
          </button>
        </div>
      </div>
    </section>
  );
}

export default Universe;
