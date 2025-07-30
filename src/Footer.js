import React from 'react';
import './Home.css';

function Footer() {
  return (
    <section className="footer footer-row">
      <img src={process.env.PUBLIC_URL + '/AMS logo1.png'} alt="企業Logo頁尾" className="company-logo-footer" />
      <div className="footer-info">
        <h2>專業汽車美容</h2>
        <ul>
          <li>電話號碼:  0 9 8 8 5 7 5 2 7 5</li>
          <li>地址:  彰化縣花壇鄉中山路一段182號</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer; 