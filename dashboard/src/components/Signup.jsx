import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './FormStyles.css'; 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
        
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${API_BASE_URL}/signup`,
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            const { success, message } = data;
            
            if (success) {
                handleSuccess(message);
                
                // ⬅️ CRITICAL CORRECTION: Use hard redirect (full page reload) 
                // to force the browser to commit the new authentication cookie 
                // before requesting the protected home page.
                window.location.href = "/";
                
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
            // Added error handling for network/server failures
            handleError(error.response?.data?.message || "An error occurred during signup."); 
        }
        
        // Reset inputs regardless of success/failure
        setInputValue({
            email: "",
            password: "",
            username: "",
        });
    };

    return (
        <div className="login-page-wrapper">
            <div className="form_container">
                <h2>Signup Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Enter your username"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <span>
                        Already have an account? <Link to={"/login"}>Login</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Signup;