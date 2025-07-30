import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/AMS-logo2.png'} alt="企業Logo導覽列" className="company-logo-nav" onError={(e) => {console.log('圖片載入失敗:', e.target.src)}} />
      </Link>
      
      {/* 桌面版選單 */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">商品展示</Link></li>
        <li><Link to="/services">服務項目</Link></li>
        <li><Link to="/Portfolio">作品鑑賞</Link></li>
        <li><Link to="/about">DIY小知識</Link></li>
      </ul>

      <div className="nav-user-actions">
        <Link to="/login" className="user-action-link">帳戶登入</Link>
        <Link to="/cart" className="user-action-link">購物車</Link>
      </div>
      <div className="nav-icons">
        <a href="https://lin.ee/lb9cd8i" target="_blank" rel="noopener noreferrer" title="加入LINE" className="social-icon-link">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@15.7.0/icons/line.svg" alt="Line" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/ams_auto_detailing?igsh=ZzZoaTZ2aTVldWh4" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-icon-link">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@15.7.0/icons/instagram.svg" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://maps.app.goo.gl/Fc5o8Ewdh8TBQuhFA" target="_blank" rel="noopener noreferrer" title="Google地圖" className="social-icon-link">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@15.7.0/icons/googlemaps.svg" alt="Google Map" className="social-icon" />
        </a>
      </div>

      {/* 漢堡選單按鈕和手機版選單 */}
      <div className="hamburger-container">
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* 手機版選單 */}
        {isMenuOpen && (
          <ul className="nav-links-mobile">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/products" onClick={closeMenu}>商品展示</Link></li>
            <li><Link to="/services" onClick={closeMenu}>服務項目</Link></li>
            <li><Link to="/Portfolio" onClick={closeMenu}>作品鑑賞</Link></li>
            <li><Link to="/about" onClick={closeMenu}>DIY小知識</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 