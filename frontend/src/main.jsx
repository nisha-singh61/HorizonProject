import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './landing_page/signup/Signup';

import ScrollToTop from './ScrollToTop';


axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ScrollToTop />
  <Navbar />
  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/product' element={<ProductPage />} />
    <Route path='/pricing' element={<PricingPage />} />
    <Route path='/support' element={<SupportPage />} />
    <Route path='/signup' element={<Signup />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);
