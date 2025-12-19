import React, { useState } from "react";

function Brokerage() {
  const [isHovered, setIsHovered] = useState(false);

  const listStyle = {
    textAlign: "left",
    lineHeight: "1.8",
    fontSize: "13px",
    color: "#555",
  };

  const linkHeaderStyle = {
    textDecoration: "none",
    color: "#3d77cd",
    fontWeight: "600",
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "#3d77cd" : "#ffffff",
    color: isHovered ? "#ffffff" : "#3d77cd",
    border: "2px solid #3d77cd",
    fontWeight: "600",
    transition: "all 0.3s ease",
    textDecoration: "none"
  };

  return (
    <div className="container brokerage-section py-5">
      <div className="row g-4 p-5 mt-2 bg-light rounded-4 shadow-sm border">
        <div className="col-lg-8 col-md-12 p-4">
          <div className="d-flex align-items-center mb-4">
            <div style={{width: "4px", height: "24px", backgroundColor: "#3d77cd", marginRight: "12px"}}></div>
            <a href="/calculator" style={linkHeaderStyle}>
              <h3 className="fs-5 mb-0">Interactive Brokerage Calculator</h3>
            </a>
          </div>
          
          <ul style={listStyle} className="list-unstyled">
            <li className="mb-3">
              <span className="badge bg-primary-subtle text-primary me-2">Service</span>
              <strong>Call & Trade:</strong> Manual orders via our desk or RMS auto-squareoff incur an additional fee of <span className="text-dark fw-bold">₹50 + GST</span> per order.
            </li>
            <li className="mb-3">
              <span className="badge bg-success-subtle text-success me-2">Eco-Friendly</span>
              <strong>Digital First:</strong> Smart contract notes are delivered instantly to your registered e-mail at no cost.
            </li>
            <li className="mb-3">
              <span className="badge bg-warning-subtle text-warning me-2">Optional</span>
              <strong>Physical Copies:</strong> Hard copies of contract notes are available upon request at <span className="text-dark fw-bold">₹20</span> per note plus courier charges.
            </li>
            <li className="mb-3">
              <span className="badge bg-info-subtle text-info me-2">Global</span>
              <strong>NRI Accounts:</strong> For non-PIS, charges are 0.5% or ₹100; for PIS, it is 0.5% or ₹200 per executed order.
            </li>
            <li className="mb-3">
              <span className="badge bg-danger-subtle text-danger me-2">Policy</span>
              <strong>Debit Balances:</strong> To maintain system integrity, accounts in debit will be charged <span className="text-dark fw-bold">₹40</span> per order on the <strong>Axis</strong> terminal.
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-12 p-4 border-start d-flex flex-column justify-content-center">
          <div className="text-center">
            <h3 className="fs-5 mb-4">Want more details?</h3>
            <a 
              href="/charges" 
              className="btn px-4 py-2 rounded-pill w-100 mb-3 shadow-sm d-inline-block"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Detailed List of Charges
            </a>
            <p className="text-muted small">
              View comprehensive tax breakdowns, including STT, GST, and SEBI charges for your Horizon account.
            </p>
            <div className="mt-4 p-3 bg-white rounded border border-info-subtle">
              <p className="mb-0 small text-info">
                <strong>Note:</strong> All charges are exclusive of statutory taxes and levies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;