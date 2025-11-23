import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [availableQty, setAvailableQty] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // NEW: Loading state

  const { closeSellWindow } = useContext(GeneralContext);

  useEffect(() => {
    const fetchAvailableQty = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/holdings/${uid}`);

        // FIX 1 → handle null/undefined/no holdings
        if (!response.data) {
          setAvailableQty(0);
          return;
        }

        // FIX 2 → correctly read qty
        setAvailableQty(response.data.qty ?? 0);

      } catch (err) {
        console.error("Error fetching holdings:", err);
        setAvailableQty(0);
      }
    };

    if (uid) fetchAvailableQty();
  }, [uid]);

  // UPDATED: Add loading and better error handling
  const handleSellClick = async () => {
    if (stockQuantity <= 0) {
      alert("Quantity must be at least 1.");
      return;
    }

    if (stockQuantity > availableQty) {
      alert(`Not enough shares to sell. You only have ${availableQty}.`);
      return;
    }

    setIsLoading(true);
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      alert("Sell order placed!");
      closeSellWindow();
    } catch (err) {
      console.error("Sell failed:", err);
      alert("Sell failed: " + (err.response?.data || "Unknown error"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container buy-window" id="sell-window" draggable="true">
      <h3 className="window-title">Sell {uid}</h3>

      <p className="available-qty">
        Available Quantity: <strong>{availableQty}</strong>
      </p>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty</legend>
            <input
              type="number"
              min="1"
              max={availableQty}
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick} disabled={isLoading}>
            {isLoading ? "Selling..." : "Sell"} {/* UPDATED: Show loading text */}
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;