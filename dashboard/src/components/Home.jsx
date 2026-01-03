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
      // LOG 1: Check if cookie is detected
      console.log("Checking isLoggedIn cookie:", cookies.isLoggedIn);

      if (!cookies.isLoggedIn) {
        console.warn("No 'isLoggedIn' cookie found. Redirecting to login.");
        if (isMounted) navigate("/login");
        return;
      }

      try {
        // LOG 2: Verification request
        console.log("Sending verification to backend...");
        const { data } = await axios.post(
          `${API_BASE_URL}/`,
          {},
          { withCredentials: true }
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
        console.error("Verification Error:", err);
        if (isMounted) handleLogout();
      }
    };

    verifyUser();

    return () => {
      isMounted = false;
    };
  }, [cookies.isLoggedIn, navigate, handleLogout]);

  // Prevent back button after logout
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
