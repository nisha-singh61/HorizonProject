import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Menu from "./Menu";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const HORIZON_URL = import.meta.env.VITE_HORIZON_URL || "http://localhost:5174";

const Home = () => {
  const navigate = useNavigate();
  // Leaving the second slot empty removes the 'setCookie' unused warning
  const [cookies, , removeCookie] = useCookies(["token", "isLoggedIn"]);
  const [user, setUser] = useState("");

  // --- 1. MEMOIZED LOGOUT FUNCTION ---
  const handleLogout = useCallback(async () => {
    try {
      await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
    } catch {
      // No variable needed in catch() to avoid 'unused var' warning
      console.error("Server-side logout failed");
    }

    removeCookie("token", { path: "/" });
    removeCookie("isLoggedIn", { path: "/" });
    navigate("/login");
  }, [removeCookie, navigate]);

  // --- 2. USER VERIFICATION ---
  useEffect(() => {
    let isMounted = true;

    const verifyUser = async () => {
      if (!cookies.isLoggedIn) {
        if (isMounted) navigate("/login");
      } else {
        try {
          const { data } = await axios.post(
            `${API_BASE_URL}`,
            {},
            { withCredentials: true }
          );

          if (isMounted) {
            if (!data.status) {
              handleLogout();
            } else {
              setUser(data.user);
            }
          }
        } catch {
          if (isMounted) handleLogout();
        }
      }
    };
    verifyUser();

    return () => {
      isMounted = false;
    };
  }, [cookies.isLoggedIn, navigate, handleLogout]);

  // --- 3. SECURITY LISTENERS (BACK BUTTON & TAB SWITCH) ---
  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);

    const handleSecurityExit = () => {
      handleLogout();
      window.location.href = HORIZON_URL;
    };

    const handlePopState = () => handleSecurityExit();

    const handleVisibilityChange = () => {
      if (document.hidden) handleLogout();
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handleLogout]);

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
