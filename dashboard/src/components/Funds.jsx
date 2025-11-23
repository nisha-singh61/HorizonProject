import React from "react";
import { Link } from "react-router-dom";
import "./Funds.css";

const Funds = () => {
  return (
    <div className="funds-page">

      {/* Header */}
      <div className="funds-header">
        <p className="info-text">Instant, zero-cost fund transfers with UPI</p>

        <div className="buttons">
          <Link className="btn green">Add funds</Link>
          <Link className="btn blue">Withdraw</Link>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="funds-grid">

        {/* EQUITY COLUMN */}
        <div className="funds-card">
          <h3>Equity</h3>

          <div className="fund-table">

            <div className="row-item">
              <p>Available margin</p>
              <p className="value green">4,043.10</p>
            </div>

            <div className="row-item">
              <p>Used margin</p>
              <p className="value red">3,757.30</p>
            </div>

            <div className="row-item">
              <p>Available cash</p>
              <p className="value">4,043.10</p>
            </div>

            <hr />

            <div className="row-item">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>

            <div className="row-item">
              <p>Closing Balance</p>
              <p>3736.40</p>
            </div>

            <div className="row-item">
              <p>Payin</p>
              <p>4064.00</p>
            </div>

            <div className="row-item">
              <p>SPAN</p>
              <p>0.00</p>
            </div>

            <div className="row-item">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>

            <div className="row-item">
              <p>Exposure</p>
              <p>0.00</p>
            </div>

            <div className="row-item">
              <p>Options premium</p>
              <p>0.00</p>
            </div>

            <hr />

            <div className="row-item">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>

            <div className="row-item">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>

            <div className="row-item">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>

          </div>
        </div>

        {/* COMMODITY COLUMN */}
        <div className="funds-card">
          <div className="commodity-box">
            <p>You don't have a commodity account</p>
            <Link className="btn blue">Open Account</Link>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Funds;
