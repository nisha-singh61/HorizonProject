// src/components/SignInPrompt.jsx
import React from 'react';

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;

const Signup = () => {

    const handleSignInClick = () => {
        window.location.href = DASHBOARD_SIGNUP_URL;
    };

    return (
        <div className="signin-prompt-container">
            <div className="signin-prompt-box">
                
                <div className="kite-logo-container"> 
                    <img src="/media/images/logo.png" style={{ width: "50px" }} alt="logo" />
                </div>
                
                <h1 className="prompt-title">KITE - Seamless Trading By Zerodha</h1>
                
                <p className="prompt-text">
                    This platform integrates with the Zerodha Kite login for secure access to a powerful interface, currently showcasing:
                </p>
                <ul className="feature-list">
                    <li> Interface: A clean, modern layout.</li>
                    <li> Simulated Data: Visualize market trends using stock data.</li>
                    <li> Integrated Login: Securely connects to the Zerodha Kite authentication gateway.</li>
                </ul>

                <p className="additional-info">
                    **Action Required:** Click below to be securely redirected to the official **Zerodha login page** for authentication.
                </p>
                
                <button 
                    onClick={handleSignInClick} 
                    className="signup-button"
                >
                    Sign In via Zerodha Kite
                </button>
                <div className="prompt-note">
                    New to the market? <a href="#" className="custom-link">Learn how to get started</a>.
                </div>
            </div>
        </div>
    );
};

export default Signup;