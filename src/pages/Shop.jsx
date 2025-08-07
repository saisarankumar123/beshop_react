import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import Subscribe from './Subscribe';
import Image from './Image';
import '../css/Shop.css';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png';
import { CiSearch } from "react-icons/ci";
import { FaRegKissWinkHeart } from "react-icons/fa";
import { GiBasketballBasket } from "react-icons/gi";
import { useNavigate } from 'react-router-dom'; 


const Shop = ({ value , handleHeart , handleLike}) => {
  const [priceRange, setPriceRange] = useState(300);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

const handleShop = (pro) => {
   alert("Like to show the content of this")
  navigate('/shop2', { state: { product: pro } }); 
};



  const sideViews = [
    { name: 'Foundation Beshop', price: 200.95, image: "https://beshop-demo.vercel.app/assets/img/product-img2.jpg" },
    { name: 'Lotion For Cleansing', price: 100.90, image: "https://beshop-demo.vercel.app/assets/img/product-img1.jpg" },
    { name: 'Tony Mask', price: 200.95, image: "https://beshop-demo.vercel.app/assets/img/product-img3.jpg" },
  ];

  const top3 = [
    { name: 'Spray Balm With Oat Extract', price: 200.95, image: "https://beshop-demo.vercel.app/assets/img/product-img4.jpg" },
    { name: 'Hydrogel Patches', price: 200.95, image: "https://beshop-demo.vercel.app/assets/img/product-img5.jpg" },
    { name: 'Detox body Cream', price: 200.95, image: "https://beshop-demo.vercel.app/assets/img/product-img6.jpg" }
  ];

  const filteredProducts = value.filter(
    (pro) =>
      pro.price <= priceRange &&
      pro.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="spage-one">
        <h1 className="title">Shop</h1>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link>
          <span className="separator"> - </span>
          <span className="breadcrumb-current">Shop</span>
        </div>
        <img src={img} alt="..." />
      </div>

      <div className="container">
        <aside className="sidebar">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <h3>Categories</h3>
          <ul className="categories">
            {['Make up', 'SPA', 'Perfume', 'Nails', 'Skin care', 'Hair care'].map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </ul>

          <h3>Price</h3>
          <input
            type="range"
            min="0"
            max="300"
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="price-slider"
          />
          <div className="price-range">0$ — {priceRange}$</div>

          <div className="section">
            <h2 className="headingw">You Have Viewed</h2>
            {sideViews.map((item, index) => (
              <div key={index} className="side-item">
                <img src={item.image} alt={item.name} className="side-img" />
                <div>
                  <p className="side-text">{item.name}</p>
                  <p className="side-text">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section">
            <h2 className="headingw">Top 3 For Today</h2>
            {top3.map((item, index) => (
              <div key={index} className="side-item">
                <img src={item.image} alt={item.name} className="side-img" />
                <div>
                  <p className="side-text">{item.name}</p>
                  <p className="side-text">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="main-content">
          <div className="filters">
            <label><input type="checkbox" /> SALE</label>
            <label><input type="checkbox" /> NEW</label>
            <select className="sort">
              <option>From expensive to cheap</option>
              <option>From cheap to expensive</option>
            </select>
          </div>

          <div className="products">
            {filteredProducts.map((pro) => (
              <div key={pro.id} className="product-card">
              <div className="image-wrapper">
            {pro.isNew && <span className="tag new">NEW</span>}
            {pro.isOnSale && <span className="tag sale">SALE</span>}
            <img src={pro.img} alt={pro.title} />

            <div className="hover-icons">
              <CiSearch className="search-heart" type="button"  onClick={() => handleShop(pro)}/>
              <div className="two-icons">
                <div className="heart"  onClick={() => handleLike(pro)}>
                  <FaRegKissWinkHeart type="button"/>
                </div>
                <div className="heart" onClick={() => handleHeart(pro)}>
                  <GiBasketballBasket type="button" />
                </div>
              </div>
            </div>
          </div>


                <h4>{pro.title}</h4>
                <div className="price">
                  <span className="original">${pro.originalPrice}</span>
                  <span className="current">${pro.price}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Subscribe />
      <Image />
      <Footer />
    </>
  );
};

export default Shop;
