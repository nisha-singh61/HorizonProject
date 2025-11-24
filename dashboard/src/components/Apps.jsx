import React from "react";
import "./App.css";

const Apps = () => {
  return (
    <div className="apps-container">
      <div className="apps-content">
        <h1 className="apps-title">Trading Tools & Apps</h1>
        <p className="apps-subtitle">
          Professional tools built for traders and analysts.
        </p>

        <div className="tools-grid">
          {/* Tool 1 */}
          <div className="tool-card">
            <div className="tool-icon">📈</div>
            <h3>Pro Charting</h3>
            <p>
              Advanced indicators, drawing tools, and chart patterns for
              technical analysis.
            </p>
            <button className="tool-btn">Launch Charts</button>
          </div>

          {/* Tool 2 */}
          <div className="tool-card">
            <div className="tool-icon">📱</div>
            <h3>Mobile Trading App</h3>
            <p>
              Trade on the go with fast execution, live prices, and alerts.
            </p>
            <button className="tool-btn">Download App</button>
          </div>

          {/* Tool 3 */}
          <div className="tool-card">
            <div className="tool-icon">🤖</div>
            <h3>Algo Trading</h3>
            <p>
              Automate your strategies with powerful algorithmic trading tools.
            </p>
            <button className="tool-btn">Start Automating</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
