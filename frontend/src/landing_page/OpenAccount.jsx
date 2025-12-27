import React from 'react';

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;

function OpenAccount() {
  const handleSignInClick = () => {
    window.location.href = DASHBOARD_SIGNUP_URL;
  };

  return (
    <section className="cta-modern-wrapper py-5">
      <div className="container">
        <div className="cta-card-premium">
          {/* Decorative Background Glows */}
          <div className="glow-element top-left"></div>
          <div className="glow-element bottom-right"></div>

          <div className="row align-items-center justify-content-between position-relative z-index-2">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="cta-title">
                Ready to own your <br />
                <span className="text-gradient">Financial Future?</span>
              </h1>
              <p className="cta-text mt-3">
                Join 1M+ traders using the Axis platform. Experience lightning-fast 
                execution and expert-grade tools with zero hidden costs.
              </p>
            </div>

            <div className="col-lg-4 text-center mt-4 mt-lg-0">
              <div className="btn-stack">
                <button 
                  onClick={handleSignInClick} 
                  className="modern-primary-btn"
                >
                  Create Free Account
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
                <p className="tiny-info mt-3">No credit card required • 5 min setup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;