import '../css/Wishlist.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'




const Wishlist = ({ products , removeItem }) => {
  return (
    <>
      <Navbar />
      <div className="wpage-one">
        <h1 className="title">Wish List</h1>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link>
          <span className="separator"> - </span>
          <span className="breadcrumb-current">Wish List</span>
        </div>
        <img src={img} alt="..." />
      </div>

      <div className="total2">
<div className="wishlist-container">
      <div className="wishlist-header">
        <div>Product</div>
        <div>Price</div>
        <div>Status</div>
        <div>Add To Cart</div>
      </div>
      <hr />
      {products.map((item , idx) => (
        <div key={item.id    || idx} className="wishlist-item">
          <div className="wishlist-product">
            <img src={item.img} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>SKU: {item.sku}</p>
            </div>
          </div>
          <div className="wishlist-price">${item.price.toFixed(2)}</div>
          <div
            className={`wishlist-status ${item.inStock ? 'in-stock' : 'not-available'}`}
          >
            {item.inStock ? 'IN STOCK' : 'NOT AVAILABLE'}
          </div>
          <div className="wishlist-cart">
            <button className="buy-now">BUY NOW →</button>
          </div>
        </div>
      ))}
      <div className="wishlist-actions">
        <button className="clear-btn" onClick={removeItem}>CLEAR WISHLIST</button>
        <Link to="/shop"><button className="shop-btn">GO SHOPPING</button></Link>
      </div>
    </div>
      </div>

      <Subscribe />
      <Image />
      <Footer />
    </>
  );
};

export default Wishlist;
