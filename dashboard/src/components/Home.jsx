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

  // --- 1. MEMOIZED LOGOUT FUNCTION ---
  const handleLogout = useCallback(async () => {
    console.log("Logging out...");
    try {
      await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Server-side logout failed:", err);
    }

    removeCookie("token", { path: "/" });
    removeCookie("isLoggedIn", { path: "/" });
    navigate("/login");
  }, [removeCookie, navigate]);

  // --- 2. USER VERIFICATION ---
  useEffect(() => {
    let isMounted = true;

    const verifyUser = async () => {
      console.log("Cookie Check - isLoggedIn:", cookies.isLoggedIn);

      // If cookie isn't there yet, wait 800ms (safety for slow browsers)
      if (!cookies.isLoggedIn) {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      // Final check for the cookie
      if (!cookies.isLoggedIn) {
        console.warn("No 'isLoggedIn' cookie found. Redirecting to login.");
        if (isMounted) navigate("/login");
        return;
      }

      try {
        console.log("Sending POST request to:", `${API_BASE_URL}/`);

        const { data } = await axios.post(
          `${API_BASE_URL}/`,
          {},
          { withCredentials: true }
        );

        console.log("Backend Response Data:", data);

        if (isMounted) {
          if (!data.status) {
            console.error("Verification status false. Logging out.");
            handleLogout();
          } else {
            console.log("Verification Success! User:", data.user);
            setUser(data.user);
            setLoading(false);
          }
        }
      } catch (err) {
        console.error(
          "Verification API Error:",
          err.response?.status,
          err.message
        );
        if (isMounted) handleLogout();
      }
    };

    verifyUser();

    return () => {
      isMounted = false;
    };
  }, [cookies.isLoggedIn, navigate, handleLogout]);

  // --- 3. SECURITY (BACK BUTTON) ---
  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);
    const handlePopState = () => {
      handleLogout();
      window.location.href = HORIZON_URL;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [handleLogout]);

  // --- 4. RENDER LOGIC ---
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h3>Loading Dashboard...</h3>
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
