import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"; 
import axios from "axios";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Menu from "./Menu";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Home = () => {
    const navigate = useNavigate();
    // The token is secure, isLoggedIn is a public marker
    const [cookies, setCookie, removeCookie] = useCookies(["token", "isLoggedIn"]); 
    const [user, setUser] = useState("");

    useEffect(() => {
        let isMounted = true; // Flag to prevent state updates on unmounted component

        const verifyUser = async () => {
            // 1. Initial client-side check
            if (!cookies.isLoggedIn) { 
                if (isMounted) navigate("/login");
            } else {
                try {
                    // 2. Server-side verification (sends HTTP-only token)
                    const { data } = await axios.post(
                        `${API_BASE_URL}`, 
                        {},
                        { withCredentials: true } 
                    );

                    if (isMounted) { // Check before state/navigation updates
                        if (!data.status) {
                            // Server validation failed (token expired, tampered)
                            removeCookie("token", { path: "/" }); // Added path
                            removeCookie("isLoggedIn", { path: "/" }); // Added path
                            navigate("/login");
                        } else {
                            // Success
                            setUser(data.user); 
                        }
                    }
                } catch (error) {
                    if (isMounted) { // Check before state/navigation updates
                        // Network error, assume unauthenticated
                        removeCookie("token", { path: "/" });
                        removeCookie("isLoggedIn", { path: "/" });
                        navigate("/login");
                    }
                }
            }
        };
        verifyUser();
        
        return () => {
            isMounted = false; // Cleanup function runs when component unmounts
        };
        
    }, [cookies, navigate, removeCookie]);

    const handleLogout = async () => {
        try {
            // Attempt server-side session cleanup
            await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
        } catch (error) {
            console.error("Server-side logout failed:", error); 
        }
        
        // Clear both cookies client-side (essential)
        removeCookie("token", { path: "/" }); 
        removeCookie("isLoggedIn", { path: "/" }); 
        
        navigate("/login");
    };

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