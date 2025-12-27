import React, { useState } from "react";

function AccordionCard({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const brandColor = "#3d77cd";

  return (
    <div
      className={`card border-0 rounded-4 mb-3 transition-all ${
        isOpen || isHovered ? "shadow" : "shadow-sm"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        transform: isHovered
          ? "scale(1.03)"
          : isOpen
          ? "translateY(-5px)"
          : "scale(1)",
        zIndex: isHovered ? 2 : 1,
        border: isHovered ? `1px solid ${brandColor}` : "1px solid transparent",
      }}
    >
      <div
        className="card-body p-4 d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: isHovered ? brandColor : "#f0f5ff",
              transition: "all 0.3s ease",
            }}
          >
            <i
              className={`${icon} fs-5`}
              style={{
                color: isHovered ? "#ffffff" : brandColor,
                transition: "color 0.3s ease",
              }}
            ></i>
          </div>
          <h6
            className="mb-0 fw-bold"
            style={{
              color: isHovered ? brandColor : "#212529",
              transition: "color 0.3s ease",
            }}
          >
            {title}
          </h6>
        </div>
        <i
          className={`fa fa-chevron-${isOpen ? "up" : "down"} small`}
          style={{
            color: isHovered ? brandColor : "#6c757d",
            transition: "all 0.3s ease",
          }}
        ></i>
      </div>

      {isOpen && (
        <div className="card-footer bg-white border-0 px-4 pb-4 pt-0">
          <div className="border-top pt-3">{children}</div>
        </div>
      )}
    </div>
  );
}

function CreateTicket() {
  const brandColor = "#3d77cd";

  const categories = [
    { t: "Account Setup", i: "fa fa-plus-circle" },
    { t: "Portfolio & Console", i: "fa fa-desktop" },
    { t: "Horizon Terminal", i: "fa fa-paper-plane" },
    { t: "Wallet & Funds", i: "fa fa-wallet" },
    { t: "Mutual Funds", i: "fa fa-coins" },
    { t: "Profile & Security", i: "fa fa-shield-halved" },
  ];

  return (
    <div className="container-fluid py-5 bg-light min-vh-100 font-sans-serif">
      <style>
        {`
          @keyframes bell-ring {
            0% { transform: rotate(0); }
            10% { transform: rotate(15deg); }
            20% { transform: rotate(-15deg); }
            30% { transform: rotate(10deg); }
            40% { transform: rotate(-10deg); }
            50% { transform: rotate(0); }
            100% { transform: rotate(0); }
          }
          .ringing-bell {
            display: inline-block;
            animation: bell-ring 2s infinite;
            transform-origin: top center;
          }
        `}
      </style>

      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h4 className="fw-bold mb-0" style={{ color: "#1a1d23" }}>
                Topic Categories
              </h4>
              <span
                className="badge rounded-pill px-3 py-2 fw-medium"
                style={{ backgroundColor: "#e0eaff", color: brandColor }}
              >
                6 Active Major Segments
              </span>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-3">
              {categories.map((item, index) => (
                <div className="col" key={index}>
                  <AccordionCard title={item.t} icon={item.i}>
                    <ul className="list-unstyled mb-0 small text-muted">
                      <li className="py-2 border-bottom border-light-subtle">
                        <a href="#" className="text-decoration-none text-muted">
                          General Inquiry
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#" className="text-decoration-none text-muted">
                          Technical Support
                        </a>
                      </li>
                    </ul>
                  </AccordionCard>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            {/* Sidebar Notices */}
            <div className="card border-0 rounded-4 bg-white shadow-sm mb-4 overflow-hidden">
              <div
                className="p-3 text-white fw-bold d-flex align-items-center justify-content-between"
                style={{ backgroundColor: brandColor }}
              >
                <span>Market Notices</span>
                <i className="fa fa-bell ringing-bell"></i>
              </div>
              <div className="card-body">
                <div className="alert border-0 bg-light rounded-3 small py-2 mb-3">
                  <span className="badge bg-danger me-2">LIVE</span>
                  Surveillance scrips – Dec 2025
                </div>
                <div className="alert border-0 bg-light rounded-3 small py-2 mb-0">
                  <i className="fa fa-info-circle me-2 text-muted"></i>
                  Rights Entitlements updates
                </div>
              </div>
            </div>

            {/* Support Action */}
            <div className="card border-0 rounded-4 bg-white shadow-sm p-4 text-center">
              <h6 className="fw-bold mb-3">Don't see your topic?</h6>
              <p className="small text-muted mb-4">
                Our support team is available 24/7 to help you with any queries.
              </p>
              <button
                className="btn py-2 w-100 rounded-3 fw-bold text-white shadow-sm"
                style={{ backgroundColor: brandColor }}
              >
                Open New Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
