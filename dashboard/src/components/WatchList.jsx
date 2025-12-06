import React, { useState, useContext, useEffect } from "react"; // Added useEffect
import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
BarChartOutlined,
KeyboardArrowDown,
KeyboardArrowUp,
MoreHoriz,
} from "@mui/icons-material";

// **REMOVED:** import { watchlist } from "../data/data"; 
import { DoughnutChart } from "./DoughnoutChart";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const WatchList = () => {
    // NEW STATE for fetching user-specific watchlist
    const [userWatchlist, setUserWatchlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect to fetch the user's watchlist on component load
    useEffect(() => {
        const fetchWatchlist = async () => {
            setIsLoading(true);
            try {
                // Fetch the user's specific watchlist using the protected route
                const response = await axios.get(`${API_BASE_URL}/myWatchlist`, { 
                    withCredentials: true 
                });
                
                // Assuming the backend returns an array of stock objects 
                setUserWatchlist(response.data); 
            } catch (error) {
                console.error("Error fetching watchlist:", error);
                setUserWatchlist([]); 
            } finally {
                setIsLoading(false);
            }
        };

        fetchWatchlist();
    }, []); // Dependency array is empty to run only on mount

    //Data and labels are now derived from the fetched state
    const labels = userWatchlist.map((stock) => stock["name"]); 

    const data = {
        labels,
        datasets: [
            {
                label: "Price",
                data: userWatchlist.map((stock) => stock.price),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    if (isLoading) {
        return (
            <div className="watchlist-container">
                <p>Loading your personal watchlist...</p>
            </div>
        );
    }
    
    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts"> {userWatchlist.length} / 50</span> 
            </div>

            <ul className="list">
                {userWatchlist.map((stock) => { 
                    // Use a stable key (e.g., stock name) instead of index
                    return <WatchListItem stock={stock} key={stock.name} />; 
                })}
            </ul>

            <DoughnutChart data={data} />
        </div>
    );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    const handleMouseEnter = () => {
        setShowWatchlistActions(true);
    };

    const handleMouseLeave = () => {
        setShowWatchlistActions(false);
    };

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                {/* Note: Ensure your backend returns the boolean 'isDown' */}
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p> 
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDown className="down" />
                    ) : (
                        // ArrowUp should likely use the "up" class for styling
                        <KeyboardArrowUp className="up" /> 
                    )}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchlistActions && <WatchListActions uid={stock.name} />}
        </li>
    );
};

const WatchListActions = ({ uid }) => {
    // GeneralContext is correctly accessed here.
    const generalContext = useContext(GeneralContext); 

    const handleBuyClick = () => {
        generalContext.openBuyWindow(uid);
    };

    const handleSellClick = () => {
        generalContext.openSellWindow(uid);
    };

    return (
        <span className="actions">
            <span>
                <Tooltip
                    title="Buy (B)"
                    placement="top"
                    arrow
                    slots={{ transition: Grow }}
                    onClick={handleBuyClick}
                >
                    <button className="buy">Buy</button>
                </Tooltip>

                <Tooltip
                    title="Sell (S)"
                    placement="top"
                    arrow
                    slots={{ transition: Grow }}
                    onClick={handleSellClick}
                >
                    <button className="sell">Sell</button>
                </Tooltip>

                <Tooltip
                    title="Analytics (A)"
                    placement="top"
                    arrow
                    slots={{ transition: Grow }}
                >
                    <button className="action">
                        <BarChartOutlined className="icon" />
                    </button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="action">
                        <MoreHoriz className="icon" />
                    </button>
                </Tooltip>
            </span>
        </span>
    );
};