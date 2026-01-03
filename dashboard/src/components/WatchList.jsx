import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

// Local fallback data (keep a copy in dashboard/src/data/defaultWatchlist.js)
import defaultWatchlist from "../data/defaultWatchlist";
import { DoughnutChart } from "./DoughnoutChart";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const WatchList = () => {
  const [userWatchlist, setUserWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWatchlist = async () => {
      setIsLoading(true);
      try {
        // withCredentials: true is vital for sending the JWT cookie to Render
        const response = await axios.get(`${API_BASE_URL}/myWatchlist`, {
          withCredentials: true,
        });

        // Backend returns the array directly or inside response.data
        const fetchedData = response.data;

        setUserWatchlist(
          Array.isArray(fetchedData) && fetchedData.length > 0
            ? fetchedData
            : defaultWatchlist
        );
      } catch (error) {
        console.error("Error fetching watchlist from backend:", error);
        // Fallback to local data if backend fails
        setUserWatchlist(defaultWatchlist);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWatchlist();
  }, []);

  // Prepare data for Doughnut Chart
  const labels = userWatchlist.map((stock) => stock.name);
  const chartData = {
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
        <div className="loader">
          <p>Syncing with market data...</p>
        </div>
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
          placeholder="Search eg: infy, bse, nifty fut, gold mcx"
          className="search"
        />
        <span className="counts"> {userWatchlist.length} / 50</span>
      </div>

      <ul className="list">
        {userWatchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      {/* Only render chart if we have data */}
      {userWatchlist.length > 0 && <DoughnutChart data={chartData} />}
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price.toLocaleString()}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions stockName={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ stockName }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button
            className="buy"
            onClick={() => generalContext.openBuyWindow(stockName)}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button
            className="sell"
            onClick={() => generalContext.openSellWindow(stockName)}
          >
            Sell
          </button>
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

        <Tooltip
          title="More"
          placement="top"
          arrow
          slots={{ transition: Grow }}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchList;
