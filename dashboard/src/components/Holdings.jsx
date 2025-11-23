import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  const loadHoldings = async () => {
    try {
      const res = await axios.get("http://localhost:3002/allHoldings");
      setAllHoldings(res.data || []);
    } catch (error) {
      console.error("Error loading holdings:", error);
    }
  };

  useEffect(() => {
    loadHoldings();

    // AUTO REFRESH HOLDINGS EVERY 3 SECONDS
    const interval = setInterval(loadHoldings, 3000);

    return () => clearInterval(interval);
  }, []);

  const labels = allHoldings.map((s) => s.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((s) => s.price || 0),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Cur. Val</th>
              <th>P&amp;L</th>
              <th>Net Chg</th>
              <th>Day Chg</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock) => {
              const qty = stock.qty || 0;
              const avg = stock.avg || 0;
              const price = stock.price || 0;

              const curVal = qty * price;
              const profit = curVal - qty * avg;
              const isProfit = profit >= 0;

              return (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curVal.toFixed(2)}</td>
                  <td className={isProfit ? "profit" : "loss"}>
                    {profit.toFixed(2)}
                  </td>
                  <td className={isProfit ? "profit" : "loss"}>
                    {stock.net}
                  </td>
                  <td className={stock.day.includes("-") ? "loss" : "profit"}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
