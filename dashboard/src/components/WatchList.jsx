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

// Local data imported for initial state or fallback
import defaultWatchlist from "../data/defaultWatchlist";
import { DoughnutChart } from "./DoughnoutChart";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const WatchList = () => {
  // Initialize state with an empty array.
  const [userWatchlist, setUserWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to fetch the user's watchlist on component load
  useEffect(() => {
    const fetchWatchlist = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/myWatchlist`, {
          withCredentials: true,
        });

        // CRITICAL DEFENSIVE CHECK: Handle different API response formats
        // Prioritize data.data, then response.data, otherwise empty array
        const fetchedData =
          response.data && Array.isArray(response.data.data)
            ? response.data.data
            : response.data;

        // Set state only if it is a confirmed array, otherwise use local fallback
        // NOTE: If the API returns an empty array, it will still use the empty array.
        setUserWatchlist(
          Array.isArray(fetchedData) ? fetchedData : defaultWatchlist
        );
      } catch (error) {
        console.error("Error fetching watchlist:", error);
        // On error, use the local defaultWatchlist as a fallback
        setUserWatchlist(defaultWatchlist);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWatchlist();
  }, []);

  // DEFENSIVE DATA DERIVATION: Ensure userWatchlist is an array before calling map
  const isWatchlistArray = Array.isArray(userWatchlist);

  const labels = isWatchlistArray
    ? userWatchlist.map((stock) => stock["name"])
    : [];

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: isWatchlistArray ? userWatchlist.map((stock) => stock.price) : [],
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

  // Show empty message only if data is loaded but is an empty array
  if (!isLoading && userWatchlist.length === 0) {
    return (
      <div className="watchlist-container">
        <p>Your watchlist is empty. Try adding some stocks!</p>
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
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
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
