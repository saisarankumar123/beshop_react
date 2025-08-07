import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import Subscribe from './Subscribe';
import img from '../images/wp6656486.png';
import Image from './Image';
import '../css/Shop2.css';
import { FaRegKissWinkHeart } from "react-icons/fa";
import { GiBasketballBasket } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Shop2 = ({ productImages, colorOptions ,   handleHeart , handleLike}) => {
  const location = useLocation();
  const product = location.state?.product || {
    title: 'Default Product',
    originalPrice: 29.99,
    price: 19.99,
    sku: 'SKU123',
    isNew: true,
    isOnSale: true,
  };

  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(q => q + 1);
  const decreaseQty = () => setQuantity(q => (q > 1 ? q - 1 : 1));




  
const reviews = [
  {
    name: "Melissa Jones",
    date: "July 23, 2020",
    rating: 5,
    avatar: "https://i.pravatar.cc/50?img=1",
    comment: "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
  },
  {
    name: "Amanda Clement",
    date: "June 15, 2020",
    rating: 5,
    avatar: "https://i.pravatar.cc/50?img=2",
    comment: "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
  },
  {
    name: "Steve Gentley",
    date: "July 05, 2020",
    rating: 5,
    avatar: "https://i.pravatar.cc/50?img=3",
    comment: "I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you"
  }
];

  const [form, setForm] = useState({ name: '', email: '', review: '', rating: 0 });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStarClick = (index) => {
    setForm({ ...form, rating: index + 1 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    alert('Review submitted!');
    setForm({ name: '', email: '', review: '', rating: 0 });
  };




  return (
    <>
      <Navbar />

      <div className="spage-one">
              <h1 className="title">Shop</h1>
              <div className="breadcrumb">
                <Link to="/" className="breadcrumb-home">Home</Link>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Shop</span>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">product</span>
              </div>
              <img src={img} alt="..." />
            </div>

     <div className="total">
      <div className="product-detail-container">

        <div className="product-detail-wrapper">

          
          <div className="product-detail-left">
            <img src={selectedImage} alt={product.title} className="product-image" />
          </div>

          
          <div className="product-detail-right">
            <div className="badges">
              {product.isOnSale && <span className="badge sale">SALE</span>}
              {product.isNew && <span className="badge new">NEW</span>}
            </div>

            <h2 className="product-title">{product.title}</h2>
            <p className="stock">IN STOCK   <span className="sku">SKU: {product.sku}</span></p>

            <div className="price-section">
              <span className="old-price">${product.originalPrice}</span><span className="new-price">${product.price}</span>
            </div>

            <p className="description">
              Universal foundation masks skin imperfections and gives it a matte finish, remaining completely invisible on the face. The foundation is suitable for any skin type. Thanks to a unique combination of pigments, the foundation adapts perfectly to even the smallest features of skin tone, creating an even and natural tone
            </p>

            <div className="social-icon">
                      <p>Find us here:</p>
                      <div className="icons">
                               <button className="facebook"><FaFacebookF /></button>
                                <button className="twitter"><FaTwitter /></button>
                                <button className="instagram"><FaInstagram /></button>
                                <button className="google"><FaLinkedinIn /></button>
                      </div>
                    </div>

            <div className="product-options-wrapper">
              <div className="thumbnail-gallery">
                {productImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`Product ${idx}`} />
                  </div>
                ))}
              </div>

               <div className="options-section">
                   <div className="color-quantity-wrapper">

                 
                  <div className="color-selector">
                    <label>Color:</label>
                    <div className="color-options">
                      {colorOptions.map((color, idx) => (
                        <div
                          key={idx}
                          className={`color-box ${selectedColor === color ? 'selected' : ''}`}
                          style={{ backgroundColor: color }}
                          onClick={() => setSelectedColor(color)}
                        />
                      ))}
                    </div>
                  </div>

                



                  <div className="quantity-selector">
                    <label>Quantity:</label>
                    <div className="quantity-controls">
                      <button onClick={decreaseQty}>&lt;</button>
                      <span>{quantity}</span>
                      <button onClick={increaseQty}>&gt;</button>
                    </div>
                  </div>

                 </div>

                 <div className="action-buttons">
                  <button className="cart-btn" onClick={() => handleHeart(pro)}>
                    <GiBasketballBasket /> CART
                  </button>
                  <button className="wish-btn" onClick={() => handleLike(pro)}>
                    <FaRegKissWinkHeart /> WISH
                  </button>
                </div>


               </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>




      <div className="total1">

          <div className="review-section">
      <div className="review-list">
        {reviews.map((rev, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-header">
              <img src={rev.avatar} alt={rev.name} className="avatar" />
              <div>
                <div className="review-name">{rev.name}</div>
                <div className="review-meta">
                  <span>{rev.date}</span> |{' '}
                  <span className="review-stars">
                    {'★'.repeat(rev.rating)}
                    {'☆'.repeat(5 - rev.rating)}
                  </span>
                </div>
              </div>
            </div>
            <p className="review-comment">{rev.comment}</p>
          </div>
        ))}
      </div>

      <div className="review-form">
        <h3>Leave A Review</h3>
        <p>Your email address will not be published.</p>

        <div className="star-rating">
          {[...Array(5)].map((_, idx) => (
            <span
              key={idx}
              className={idx < form.rating ? 'filled' : ''}
              onClick={() => handleStarClick(idx)}
            >
              ★
            </span>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={form.name}
            onChange={handleInput}
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={form.email}
            onChange={handleInput}
            required
          />
          <textarea
            placeholder="Enter your review"
            name="review"
            value={form.review}
            onChange={handleInput}
            required
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
</div>



      <Subscribe />
      <Image />
      <Footer />
    </>
  );
};

export default Shop2;


