import React from "react";
import "./App.css";

const Apps = () => {
  return (
    <div className="apps-container">
      <div className="apps-content">
        <div className="apps-header">
          <div>
            <h1 className="apps-title">Trading Ecosystem</h1>
            <p className="apps-subtitle">
              Enterprise-grade infrastructure for real-time market execution.
            </p>
          </div>
          {/* aria-live makes screen readers announce status changes */}
          <div className="system-status" role="status" aria-live="polite">
            <span className="status-dot"></span>
            System Live: 12ms Latency
          </div>
        </div>

        <div className="tools-grid">
          <div className="tool-card main-feature">
            <div className="shape-container" aria-hidden="true">
              <div className="shape-chart"></div>
            </div>
            <h3>Pro Charting</h3>
            <p>
              Execute technical analysis with ultra-low latency data feeds and
              customizable indicator layers.
            </p>
            <div className="card-footer">
              <button
                className="tool-btn"
                aria-label="Launch professional charting terminal"
              >
                Launch Terminal
              </button>
              <span className="version-tag">v4.2.0</span>
            </div>
          </div>

          <div className="tool-card">
            <div className="shape-container" aria-hidden="true">
              <div className="shape-mobile"></div>
            </div>
            <h3>Mobile Access</h3>
            <p>Synchronized cross-platform trading with biometric security.</p>
            <button
              className="tool-btn secondary"
              aria-label="Download mobile trading application"
            >
              Get App
            </button>
          </div>

          <div className="tool-card">
            <div className="shape-container" aria-hidden="true">
              <div className="shape-algo"></div>
            </div>
            <h3>Algo Trading</h3>
            <p>
              Deploy Python-based strategies via high-frequency API endpoints.
            </p>
            <button
              className="tool-btn secondary"
              aria-label="View algorithmic trading API documentation"
            >
              API Docs
            </button>
          </div>

          <div className="tool-card full-width">
            <div className="analytics-preview" aria-hidden="true">
              <div className="bar shadow"></div>
              <div className="bar shadow" style={{ height: "60%" }}></div>
              <div className="bar shadow" style={{ height: "90%" }}></div>
              <div className="bar shadow" style={{ height: "40%" }}></div>
            </div>
            <div className="wide-content">
              <h3>Market Analytics</h3>
              <p>Real-time sentiment tracking and volume profile analysis.</p>
              <button
                className="tool-btn"
                aria-label="Explore real-time market sentiment data"
              >
                Explore Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
