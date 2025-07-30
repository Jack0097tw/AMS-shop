import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';


const products = [
  {
    name: '1',
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
  },
  {
    name: '2',
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
  },
  {
    name: '3',
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
  },
  {
    name: '4',
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
  },
  {
    name: '5',
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
  },
  {
    name: '6',
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
  },
  {
    name: '7',
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
  },
  {
    name: '8',
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
  },
];
function PortfolioPage() {
  return (
    <>
      <Navbar />
      <div className="home-content">
        <section className="about" id="portfolio">
          <div className="about-img-wrapper">
            <img
              src={process.env.PUBLIC_URL + '/bxian.jpg'}
              alt="作品鑑賞"
              className="about-img"
              draggable={false}
            />
          </div>
          <h1>作品鑑賞</h1>
          <p>這裡展示我們的汽車美容作品，見證專業與細緻的服務品質。</p>
        </section>
        <div className="portfolio-gallery">
            {products.map(product => (
              <img
                key={product.name}
                src={product.img}
                alt={`作品${product.name}`}
                className="portfolio-img"
              />
            ))}
          </div>
      </div>
      <Footer />
    </>
  );
}

export default PortfolioPage; 