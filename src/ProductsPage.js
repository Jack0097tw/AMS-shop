import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: '清潔劑',
    price: 1200,
    img: process.env.PUBLIC_URL + '/清潔劑1.jpg',
  },
  {
    id: 2,
    name: 'test2',
    price: 98000,
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
  },
  {
    id: 3,
    name: 'test3',
    price: 1500,
    img: process.env.PUBLIC_URL + '/products_exp3.jpg',
  },
  {
    id: 4,
    name: 'test4',
    price: 2000,
    img: process.env.PUBLIC_URL + '/products_exp4.jpg',
  },
  {
    id: 5,
    name: 'test5',
    price: 1350,
    img: process.env.PUBLIC_URL + '/products_exp5.jpg',
  },

];

function ProductsPage() {
  return (
    <>
      <Navbar />
      <div className="home-content">
        <section className="products" id="products">

          <h1 className="product-category-title">車輛美容產品</h1>
          <div className="products-gallery">
            {products.map(product => (
              <Link className="product-item" to={`/products/${product.id}`} key={product.id}>
                <div className="img-wrapper">
                  <img src={product.img} alt={product.name} />
                  <div className="quick-view">快速檢視</div>
                </div>
                <h2>{product.name}</h2>
                <div className="product-price">${product.price}</div>
              </Link>
            ))}
          </div>
          <h1 className="product-category-title">車輛美容工具</h1>
          <div className="products-gallery">
            {products.slice(3, 6).map(product => (
              <Link className="product-item" to={`/products/${product.id}`} key={product.id}>
                <div className="img-wrapper">
                  <img src={product.img} alt={product.name} />
                  <div className="quick-view">快速檢視</div>
                </div>
                <h2>{product.name}</h2>
                <div className="product-price">${product.price}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage; 