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
  // cookies[0] is the object, cookies[2] is removeCookie
  const [cookies, , removeCookie] = useCookies(["token", "isLoggedIn"]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // --- 1. MEMOIZED LOGOUT FUNCTION ---
  const handleLogout = useCallback(async () => {
    try {
      // Attempt server-side logout to clear HTTP-only cookie
      await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Server-side logout failed:", err);
    }

    // Clear client-side markers
    removeCookie("token", { path: "/" });
    removeCookie("isLoggedIn", { path: "/" });

    // Redirect to login
    navigate("/login");
  }, [removeCookie, navigate]);

  // --- 2. USER VERIFICATION ---
  useEffect(() => {
    let isMounted = true;

    const verifyUser = async () => {
      // Check for the client-side cookie first
      if (!cookies.isLoggedIn) {
        if (isMounted) navigate("/login");
        return;
      }

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
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("Verification error:", err);
        if (isMounted) handleLogout();
      }
    };

    verifyUser();

    return () => {
      isMounted = false;
    };
  }, [cookies.isLoggedIn, navigate, handleLogout]);

  // --- 3. SECURITY LISTENERS (BACK BUTTON) ---
  useEffect(() => {
    // Push current state to prevent "Back" button from showing sensitive data after logout
    window.history.pushState(null, null, window.location.pathname);

    const handlePopState = () => {
      handleLogout();
      // Redirect to the external landing page
      window.location.href = HORIZON_URL;
    };

    window.addEventListener("popstate", handlePopState);

    // NOTE: Removed 'visibilitychange' listener.
    // It was triggering handleLogout() whenever the tab briefly lost focus during redirect.

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handleLogout]);

  // Show a simple loading state while verifying the user
  if (loading && cookies.isLoggedIn) {
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
