import React from "react";

function Brokerage() {
  return (
    <section className="brokerage-modern-wrapper py-5">
      <div className="container">
        <div className="row g-0 main-info-card overflow-hidden shadow-lg">
          
          {/* Left Column: The Fine Print */}
          <div className="col-lg-8 info-content-side p-4 p-md-5">
            <div className="section-header mb-5">
              <span className="accent-line"></span>
              <h2 className="h4 fw-bold">Important Service Disclosures</h2>
              <p className="text-muted small">Transparency is our priority. Here are the specific charges for additional services.</p>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-phone-volume"></i></div>
                <div className="info-text">
                  <h4 className="h6 fw-bold mb-1">Call & Trade Orders</h4>
                  <p>Additional fee of <strong>₹50 + GST</strong> per order for manual desk execution or RMS square-offs.</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-leaf"></i></div>
                <div className="info-text">
                  <h4 className="h6 fw-bold mb-1">Digital Smart Notes</h4>
                  <p>Eco-friendly digital contract notes delivered to your inbox at <strong>no cost</strong>.</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-print"></i></div>
                <div className="info-text">
                  <h4 className="h6 fw-bold mb-1">Physical Documentation</h4>
                  <p>Hard copies available at <strong>₹20</strong> per note plus courier charges for archival needs.</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-globe"></i></div>
                <div className="info-text">
                  <h4 className="h6 fw-bold mb-1">NRI Special Accounts</h4>
                  <p>Non-PIS: 0.5% or ₹100. PIS: 0.5% or ₹200 per executed trade.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Action Panel */}
          <div className="col-lg-4 action-side p-4 p-md-5 d-flex align-items-center">
            <div className="action-card-inner text-center w-100">
              <h3 className="h5 fw-bold text-white mb-4">Calculate Your Fees</h3>
              <p className="text-white-50 small mb-4">
                Use our real-time calculator to see exact breakdowns of STT, GST, and SEBI charges before you trade.
              </p>
              
              <div className="d-grid gap-3">
                <a href="/calculator" className="btn btn-light-blur">
                  Brokerage Calculator
                </a>
                <a href="/charges" className="btn btn-outline-light-custom">
                  Detailed Charge List
                </a>
              </div>

              <div className="statutory-note mt-5">
                <i className="fa-solid fa-circle-info me-2"></i>
                Note: All charges exclude statutory taxes.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Brokerage;