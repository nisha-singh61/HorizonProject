import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"; 
import axios from "axios";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Menu from "./Menu";

const Home = () => {
    // Note: 'token' is HTTP-only, 'isLoggedIn' is for client check
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["token", "isLoggedIn"]); 
    const [user, setUser] = useState("");

    useEffect(() => {
        const verifyUser = async () => {
            // Check the client-readable marker cookie
            if (!cookies.isLoggedIn) { 
                navigate("/login");
            } else {
                try {
                    // Send request to server to verify the secure HTTP-only token
                    const { data } = await axios.post(
                        "http://localhost:3002", 
                        {},
                        { withCredentials: true } 
                    );

                    if (!data.status) {
                        // If server validation fails (token expired, etc.)
                        removeCookie("token"); 
                        removeCookie("isLoggedIn"); 
                        navigate("/login");
                    } else {
                        // Success
                        setUser(data.user); 
                    }
                } catch (error) {
                    // Handle network or server errors
                    removeCookie("token"); 
                    removeCookie("isLoggedIn"); 
                    navigate("/login");
                }
            }
        };
        verifyUser();
        
    }, [cookies, navigate, removeCookie]);

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
        } catch (error) {
            console.error("Server-side logout failed:", error); 
        }
        
        // Clear both cookies client-side
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