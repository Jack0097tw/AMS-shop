import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // 處理登入邏輯
      console.log('登入:', formData);
    } else {
      // 處理註冊邏輯
      if (formData.password !== formData.confirmPassword) {
        alert('密碼不一致');
        return;
      }
      console.log('註冊:', formData);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
      <div className="login-container">
        <h2>{isLogin ? '會員登入' : '會員註冊'}</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">電子郵件</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">密碼</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">確認密碼</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLogin}
              />
            </div>
          )}
          
          <button type="submit" className="login-btn">
            {isLogin ? '登入' : '註冊'}
          </button>
        </form>
        
        <div className="login-switch">
          <p>
            {isLogin ? '還沒有帳號？' : '已有帳號？'}
            <button 
              type="button" 
              onClick={() => setIsLogin(!isLogin)}
              className="switch-btn"
            >
              {isLogin ? '立即註冊' : '立即登入'}
            </button>
          </p>
        </div>
        
        <div className="back-home">
          <Link to="/" className="back-link">返回首頁</Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage; 