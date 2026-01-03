import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import Home from "./components/Home";
import { CookiesProvider } from "react-cookie";

import axios from "axios";

import Login from "./components/Login";
import Signup from "./components/Signup";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <CookiesProvider>
    <BrowserRouter>
      <Routes>
         <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);