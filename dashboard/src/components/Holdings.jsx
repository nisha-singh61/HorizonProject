import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Increased the interval for less aggressive polling
const REFRESH_INTERVAL_MS = 15000; 

const Holdings = () => {
    const [allHoldings, setAllHoldings] = useState([]);

    // Use useCallback to memoize the function for useEffect dependencies
    const loadHoldings = useCallback(async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/allHoldings`, { withCredentials: true });
            // Ensure you are working with an array
            setAllHoldings(Array.isArray(res.data) ? res.data : []); 
        } catch (error) {
            console.error("Error loading holdings:", error);
        }
    }, []); // Dependency on API_BASE_URL (though it's constant)

    useEffect(() => {
        loadHoldings();

        // Use the defined constant interval
        const interval = setInterval(loadHoldings, REFRESH_INTERVAL_MS);

        return () => clearInterval(interval);
    }, [loadHoldings]); // Dependency on the memoized function

const labels = allHoldings.map((s) => s.name);

const data = {
labels,
datasets: [
{
label: "Stock Price",
data: allHoldings.map((s) => (s.qty * s.price) || 0),
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