import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

function ServicesPage() {
  const services = [
    {
      name: '專業洗車',
      img: process.env.PUBLIC_URL + '/AMS價目表-02.jpg',
    },
    {
      name: '車身打蠟',
      img: process.env.PUBLIC_URL + '/AMS價目表-03.jpg',
    },
    {
      name: '內裝清潔',
      img: process.env.PUBLIC_URL + '/AMS價目表-04.jpg',
    },
  ];
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
          <h1>服務項目</h1>
          <p>我們擁有多年汽車美容經驗，提供專業洗車、打蠟、內裝清潔等全方位服務，讓您的愛車煥然一新。</p>
        </section>
        <div className="services-gallery">
            {services.map(service => (
              <div className="service-item" key={service.name}>
                <img src={service.img} alt={service.name} className="service-img" />
                <div className="service-name">{service.name}</div>
              </div>
            ))}
        </div>


      </div>
      <Footer />
    </>
  );
}

export default ServicesPage; 