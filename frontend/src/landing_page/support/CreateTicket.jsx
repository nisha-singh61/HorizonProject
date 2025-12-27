import React, { useState } from "react";

function AccordionCard({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`support-topic-card ${isOpen ? "is-open" : ""}`}>
      <div className="card-header-action" onClick={() => setIsOpen(!isOpen)}>
        <div className="d-flex align-items-center gap-3">
          <div className="icon-box-modern">
            <i className={`${icon}`}></i>
          </div>
          <h3 className="topic-title">{title}</h3>
        </div>
        <i
          className={`fa-solid fa-angle-${isOpen ? "up" : "down"} toggle-icon`}
        ></i>
      </div>

      {isOpen && (
        <div className="card-body-expandable">
          <div className="content-inner">{children}</div>
        </div>
      )}
    </div>
  );
}

function CreateTicket() {
  const categories = [
    { t: "Account Setup", i: "fa-solid fa-user-plus" },
    { t: "Portfolio & Console", i: "fa-solid fa-chart-line" },
    { t: "Horizon Terminal", i: "fa-solid fa-terminal" },
    { t: "Wallet & Funds", i: "fa-solid fa-wallet" },
    { t: "Mutual Funds", i: "fa-solid fa-vault" },
    { t: "Security", i: "fa-solid fa-shield-halved" },
  ];

  return (
    <div className="support-hub-wrapper py-5">
      <div className="container">
        {/* Modern Header Segment */}
        <div className="row mb-5 align-items-end">
          <div className="col-lg-7">
            <div className="hub-badge mb-2">Help Center</div>
            <h1 className="hub-display-title">
              How can we <span className="text-gradient">assist you?</span>
            </h1>
          </div>
          <div className="col-lg-5 text-lg-end d-none d-lg-block">
            <p className="text-muted small mb-0">
              Average response time: <strong>&lt; 15 mins</strong>
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Main Content Area */}
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="topic-grid">
              {categories.map((item, index) => (
                <AccordionCard key={index} title={item.t} icon={item.i}>
                  <ul className="support-link-list">
                    <li>
                      <a href="#">General Onboarding Guide</a>
                    </li>
                    <li>
                      <a href="#">Technical troubleshooting</a>
                    </li>
                    <li>
                      <a href="#">Commonly Asked Questions</a>
                    </li>
                  </ul>
                </AccordionCard>
              ))}
            </div>
          </div>

          {/* Glass-Effect Sidebar */}
          <div className="col-lg-4 order-1 order-lg-2">
            <div className="sticky-sidebar">
              <div className="notice-card mb-4">
                <div className="notice-header">
                  <h5>Live Alerts</h5>
                  <div className="pulse-dot"></div>
                </div>
                <div className="notice-body">
                  <div className="alert-item">
                    <span className="type">NSE</span>
                    <p>Surveillance scrips updated for Dec 2025</p>
                  </div>
                  <div className="alert-item">
                    <span className="type info">INFO</span>
                    <p>Rights Entitlements updates</p>
                  </div>
                </div>
              </div>

              <div className="cta-support-card p-4">
                <h4>Can't find an answer?</h4>
                <p>Talk to our human support team directly.</p>
                <button className="modern-btn-primary w-100 mt-2">
                  Open Support Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
