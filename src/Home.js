import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const bannerImages = [
  process.env.PUBLIC_URL + '/bxian.jpg',
  process.env.PUBLIC_URL + '/rong.jpg',
  process.env.PUBLIC_URL + '/xiaolai.jpg',
];

function Home() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-content">
      {/* 橫幅區塊 */}
      <section className="banner" id="home">
          <div className="banner-img-wrapper">
            {bannerImages.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`banner${idx+1}`}
                className={`banner-img${current === idx ? ' active' : ''}`}
                draggable={false}
              />
            ))}
          </div>
          <h1>AMS專業汽車美容</h1>
          <p>給您的愛車最頂級的呵護</p>
      </section>

      {/* 簡介區塊 */}
      <section className="intro" id="about">
        <div className="intro-overlay"></div>
        <div className="intro-content">
          <div className="intro-text">
            <h2>關於AMS</h2>
            <p>我們擁有多年汽車美容經驗，提供專業洗車、打蠟、內裝清潔等全方位服務，讓您的愛車煥然一新。內裝清潔等全方位服務，讓您的愛車煥然一新內裝清潔等全方位服務，讓您的愛車煥然一新內裝清潔等全方位服務，讓您的愛車煥然一新內裝清潔等全方位服務，讓您的愛車煥然一新</p>
          </div>
          <div className="intro-img">
            <img src={process.env.PUBLIC_URL + '/清潔劑1.jpg'} alt="店家展示" />
            <img src={process.env.PUBLIC_URL + '/products_exp3.jpg'} alt="店家展示" />
          
          </div>
        </div>
      </section>

      {/* 服務介紹區塊 */}
      <section className="services" id="services">
        <div className="services-content">
          <div className="services-text">
            <h2>專業服務</h2>
          </div>

        </div>
        <div className="services-circles">
            <div className="service-circle">
              <div className="service-circle-text">專業洗車</div>
            </div>
            <div className="service-circle">
              <div className="service-circle-text">打蠟保養</div>
            </div>
            <div className="service-circle">
              <div className="service-circle-text">內裝清潔</div>
            </div>
            <div className="service-circle">
              <div className="service-circle-text">玻璃鍍膜</div>
            </div>
        </div>
        <div className="services-img">
            <img src={process.env.PUBLIC_URL + '/products_exp3.jpg'} alt="服務展示" />
            <img src={process.env.PUBLIC_URL + '/products_exp4.jpg'} alt="服務展示" />
            <img src={process.env.PUBLIC_URL + '/service.jpg'} alt="服務展示" />
            <img src={process.env.PUBLIC_URL + '/service2.jpg'} alt="服務展示" />
            <img src={process.env.PUBLIC_URL + '/service3.jpg'} alt="服務展示" />
            <img src={process.env.PUBLIC_URL + '/service4.jpg'} alt="服務展示" />

          </div>
      </section>

      {/* 新商品區塊 */}
      <section className="products" id="products">
        <h1>PRODUCTS</h1>
        <h1>最新商品</h1>
        <div className="product-list">
          <Link className="product-item" to="/products/1">
            <div className="img-wrapper">
              <img src={process.env.PUBLIC_URL + '/清潔劑1.jpg'} alt="商品1" />
              <div className="quick-view">快速檢視</div>
            </div>
            <h2>清潔劑</h2>
            <div className="product-price">NT$1,200</div>
          </Link>
          <Link className="product-item" to="/products/2">
            <div className="img-wrapper">
              <img src={process.env.PUBLIC_URL + '/products_exp2.jpg'} alt="商品2" />
              <div className="quick-view">快速檢視</div>
            </div>
            <h2>test2</h2>
            <div className="product-price">NT$98000</div>
          </Link>
          <Link className="product-item" to="/products/3">
            <div className="img-wrapper">
              <img src={process.env.PUBLIC_URL + '/products_exp3.jpg'} alt="商品3" />
              <div className="quick-view">快速檢視</div>
            </div>
            <h2>test3</h2>
            <div className="product-price">NT$1,500</div>
          </Link>
          <Link className="product-item" to="/products/4">
            <div className="img-wrapper">
              <img src={process.env.PUBLIC_URL + '/products_exp4.jpg'} alt="商品4" />
              <div className="quick-view">快速檢視</div>
            </div>
            <h2>test4</h2>
            <div className="product-price">NT$2,000</div>
          </Link>
          <Link className="product-item" to="/products/5">
            <div className="img-wrapper">
              <img src={process.env.PUBLIC_URL + '/products_exp5.jpg'} alt="商品5" />
              <div className="quick-view">快速檢視</div>
            </div>
            <h2>test5</h2>
            <div className="product-price">NT$1,350</div>
          </Link>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}

export default Home; 