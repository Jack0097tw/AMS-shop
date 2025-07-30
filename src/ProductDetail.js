import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';

const productData = {
  1: {
    name: '清潔劑',
    price: 1200,
    img: process.env.PUBLIC_URL + '/清潔劑1.jpg',
    desc: `極致亮潔｜全效汽車清潔劑
給您的愛車最細緻的呵護！
極致亮潔全效清潔劑專為車身與內裝設計，快速分解髒污、油膜與蟲漬，一噴一擦，即刻恢復車輛光澤！

✅ 產品特色：
高效去污配方：迅速溶解頑固污漬與油脂

不傷車漆：中性配方，保護車體原色

多功能使用：適用於車身、輪框、玻璃與內裝`,
  },
  2: {
    name: '麥拉倫MClacn 2',
    price: 98000,
    img: process.env.PUBLIC_URL + '/products_exp2.jpg',
    desc: '第二款超跑專用鍍膜，極致亮度與防護。',
  },
  3: {
    name: '商品說明xxxxxxxxx',
    price: 1500,
    img: process.env.PUBLIC_URL + '/products_exp3.jpg',
    desc: '第三款商品詳細說明，適合多種車型。',
  },
  4: {
    name: '商品說明xxxxxxxxx',
    price: 2000,
    img: process.env.PUBLIC_URL + '/products_exp4.jpg',
    desc: '第四款商品詳細說明，頂級保護。',
  },
  5: {
    name: '商品說明xxxxxxxxx',
    price: 1350,
    img: process.env.PUBLIC_URL + '/products_exp5.jpg',
    desc: '第五款商品詳細說明，經濟實惠。',
  },
};

function ProductDetail() {
  const { id } = useParams();
  const product = productData[id];
  const [qty, setQty] = useState(1);

  if (!product) return <div style={{padding:40}}>找不到商品</div>;

  // 分享連結
  const shareUrl = window.location.href;
  const shareText = encodeURIComponent(`推薦給你：${product?.name || ''}`);

  return (
    <>
      <Navbar />
      <div className="product-detail-page">
        <div className="product-detail-container">
          <div>
            <img src={product.img} alt={product.name} className="product-detail-img" />
            <div className="product-detail-img-divider" />
            <h2>商品資訊</h2>
            <div className="product-detail-desc">{product.desc}</div>
          </div>
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <div className="product-detail-price">NT$ {product.price}</div>
            <div className="product-detail-qty">
              數量：
              <input type="number" min="1" value={qty} onChange={e => setQty(e.target.value)} />
            </div>
            <button className="add-to-cart-btn">加入購物車</button>
            {/* 分隔底線 */}
            <div className="product-detail-divider" />
            {/* 分享功能區塊 */}
            <div className="product-detail-share">
              <span>分享：</span>
              <a href={`https://line.me/R/msg/text/?${shareText}%20${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" title="分享到LINE">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/line.svg" alt="Line" className="share-icon" />
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" title="分享到Facebook">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="share-icon" />
              </a>
              <a href={`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" title="分享到Instagram">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="share-icon" />
              </a>
            </div>
            <Link to="/products" className="back-link" style={{ marginTop: '12px' }}>上一頁</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail; 