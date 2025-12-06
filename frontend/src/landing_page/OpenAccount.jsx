import React from 'react';

const DASHBOARD_SIGNUP_URL = import.meta.env.VITE_DASHBOARD_SIGNUP_URL;

function OpenAccount() {
   const handleSignInClick = () => {
        window.location.href = DASHBOARD_SIGNUP_URL;
    };

  return (
    <div className="container open-account-section p-5 mb-5">
      <div className="row text-center">
        <h1 className="open-account-title mt-5">
          Open a Zerodha account
        </h1>
        <p className="open-account-subtitle mt-3 mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button 
        onClick={handleSignInClick} 
        className="btn btn-primary open-account-btn">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;