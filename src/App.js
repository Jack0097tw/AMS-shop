import React from 'react';
import './App.css';
import Home from './Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import ProductDetail from './ProductDetail';
import ProductsPage from './ProductsPage';
import ServicesPage from './ServicesPage';
import PortfolioPage from './PortfolioPage';
import LoginPage from './LoginPage';
import CartPage from './CartPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/Portfolio" element={<PortfolioPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
