import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '汽車清潔劑',
      price: 299,
      quantity: 2,
      image: '/清潔劑1.jpg'
    },
    {
      id: 2,
      name: '汽車美容蠟',
      price: 599,
      quantity: 1,
      image: '/products_exp2.jpg'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('購物車是空的！');
      return;
    }
    alert('即將跳轉到結帳頁面...');
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
      <div className="cart-container">
        <h2>購物車</h2>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>您的購物車是空的</p>
            <Link to="/products" className="continue-shopping-btn">
              繼續購物
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">NT$ {item.price}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    NT$ {item.price * item.quantity}
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="remove-btn"
                  >
                    刪除
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="cart-total">
                <h3>總計: NT$ {calculateTotal()}</h3>
              </div>
              <div className="cart-actions">
                <Link to="/products" className="continue-shopping-btn">
                  繼續購物
                </Link>
                <button onClick={handleCheckout} className="checkout-btn">
                  結帳
                </button>
              </div>
            </div>
          </>
        )}
        
        <div className="back-home">
          <Link to="/" className="back-link">返回首頁</Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default CartPage; 