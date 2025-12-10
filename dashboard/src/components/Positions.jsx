import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
// import { positions } from "../data/data"; // Removed static import

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Increased the interval for less aggressive polling
// Matching the refresh interval of the Holdings component
const REFRESH_INTERVAL_MS = 15000; 

const Positions = () => {
    const [allPositions, setAllPositions] = useState([]);

    // Use useCallback to memoize the function for useEffect dependencies
    const loadPositions = useCallback(async () => {
        try {
            // Fetching positions from the protected endpoint
            const res = await axios.get(`${API_BASE_URL}/allPositions`, { 
                withCredentials: true 
            });
            setAllPositions(Array.isArray(res.data) ? res.data : []); 
        } catch (error) {
            console.error("Error loading positions:", error);
            setAllPositions([]);
        }
    }, []);

    useEffect(() => {
        loadPositions();

        // Set up polling to refresh the positions data
        const interval = setInterval(loadPositions, REFRESH_INTERVAL_MS);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [loadPositions]); // Dependency on the memoized function

    // If there are no positions, display the empty message
    if (allPositions.length === 0) {
        return (
            <div className="order-table">
                <h3 className="title">Positions (0)</h3>
                <p>You have no active positions today.</p>
            </div>
        );
    }
    
    return (
        <>
            <h3 className="title">Positions ({allPositions.length})</h3>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg.</th>
                            <th>LTP</th>
                            <th>P&amp;L</th>
                            <th>Net Chg</th>
                            <th>Day Chg</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPositions.map((stock, index) => {
                            const qty = stock.qty || 0;
                            const avg = stock.avg || 0;
                            const price = stock.price || 0;
                            
                            // Calculate Current Value, P&L, and determine profit/loss class
                            const curValue = qty * price;
                            const profit = curValue - qty * avg;
                            const isProfit = profit >= 0;
                            const profClass = isProfit ? "profit" : "loss";
                            
                            // Determine the Day Change class (assuming stock.day includes '-' for loss)
                            const dayClass = stock.day && stock.day.includes("-") ? "loss" : "profit";

                            return (
                                // Use stock.name as a key if it's unique, otherwise use a combination or index
                                <tr key={stock.name || index}> 
                                    <td>{stock.product}</td>
                                    <td>{stock.name}</td>
                                    <td>{qty}</td>
                                    <td>{avg.toFixed(2)}</td>
                                    <td>{price.toFixed(2)}</td>
                                    <td className={profClass}>
                                        {profit.toFixed(2)}
                                    </td>
                                    <td className={profClass}>
                                        {/* Assuming 'net' tracks overall change from buy */}
                                        {stock.net}
                                    </td>
                                    <td className={dayClass}>
                                        {stock.day}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Positions;