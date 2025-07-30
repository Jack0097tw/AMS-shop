import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="home-content">
        <section className="about" id="about">
          <div className="about-img-wrapper">
            <img
              src={process.env.PUBLIC_URL + '/bxian.jpg'}
              alt="關於AMS"
              className="about-img"
              draggable={false}
            />
          </div>
          <h1>關於AMS</h1>
          <p>我們擁有多年汽車美容經驗，提供專業洗車、打蠟、內裝清潔等全方位服務，讓您的愛車煥然一新。</p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ServicesPage; 