import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Menu from "./Menu";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const HORIZON_URL = import.meta.env.VITE_HORIZON_URL;

const Home = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token", "isLoggedIn"]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState("Checking session...");

  const handleLogout = useCallback(async () => {
    try {
      await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Server-side logout failed:", err);
    }
    removeCookie("token", { path: "/" });
    removeCookie("isLoggedIn", { path: "/" });
    navigate("/login");
  }, [removeCookie, navigate]);

  useEffect(() => {
    let isMounted = true;

    const verifyUser = async () => {
      // RETRY LOOP: Give the browser 3 seconds to find the manual cookie
      let cookieCheckAttempts = 0;
      while (cookieCheckAttempts < 3 && !cookies.isLoggedIn) {
        console.log(`Waiting for cookie... Attempt ${cookieCheckAttempts + 1}`);
        await new Promise((res) => setTimeout(res, 1000));
        cookieCheckAttempts++;
      }

      console.log("Final Cookie Check - isLoggedIn:", cookies.isLoggedIn);

      if (!cookies.isLoggedIn) {
        console.warn("No cookie found. Redirecting to login.");
        if (isMounted) navigate("/login");
        return;
      }

      try {
        setStatusMessage("Waking up server (this may take a minute)...");
        console.log("Sending verification to backend...");

        const { data } = await axios.post(
          `${API_BASE_URL}/`,
          {},
          { withCredentials: true, timeout: 60000 } // Wait up to 60s for Render to wake up
        );

        console.log("Backend verification response:", data);

        if (isMounted) {
          if (!data.status) {
            handleLogout();
          } else {
            setUser(data.user);
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("Verification Error (Backend might be offline):", err);
        // If the server times out, don't immediately kick user out, try again or show error
        if (isMounted) {
          setStatusMessage("Server error. Please refresh the page.");
          // If it's a 401/403, then definitely logout
          if (err.response?.status === 401) handleLogout();
        }
      }
    };

    verifyUser();

    return () => {
      isMounted = false;
    };
  }, [cookies.isLoggedIn, navigate, handleLogout]);

  // Back button protection
  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    const handlePopState = () => {
      handleLogout();
      window.location.href = HORIZON_URL;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [handleLogout]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h3>{statusMessage}</h3>
        <p style={{ color: "gray", fontSize: "14px" }}>Please don't refresh.</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Menu user={user} onLogout={handleLogout} />
      <div className="main-content">
        <TopBar user={user} onLogout={handleLogout} />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
