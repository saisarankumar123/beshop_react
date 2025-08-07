import '../css/Product.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'
import { CiSearch } from "react-icons/ci";
import { FaRegKissWinkHeart } from "react-icons/fa"
import { GiBasketballBasket } from "react-icons/gi"

const Product = ({products , handleHeart}) => {
  return (
    <>
    <Navbar/>
        <div className="prpage-one">
                 <h1 className="title">Product</h1>
              <div className="breadcrumb">
                <Link to="/" className="breadcrumb-home">Home</Link>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Product</span>
              </div>
        
              <img src={img} alt="..." />
              </div>


                  <div className="header-container">
      <p className="header-subtitle">Cosmetics</p>
      <h1 className="header-title">You Have Viewed</h1>
      <p className="header-description">
        Nourish your skin with toxin-free cosmetic products. With the<br />
        offers that you can't refuse.
      </p>
    </div>




              <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
        
              <div className="image-container">
                <img src={product.img} alt={product.name} />
                
                {product.sale && <h6 className="sale-badge">{product.sale}</h6>}
                
                <div className="hover-icons">
                  <CiSearch className="search-heart" type="button"  onClick={() => handleShop()}/>
                  <div className="two-icons">
                   <div className="heart"><FaRegKissWinkHeart type="button" /></div> 
                    <div className="heart" onClick={() =>handleHeart(product)}><GiBasketballBasket type="button" /></div> 
                  </div>
                </div>
              </div>
        
              <Link to="/shop" className="product-link">
                <h4>{product.title}</h4>
              </Link>
              <p>
                <strike>${product.old}</strike>&nbsp; ${product.price}
              </p>
            </div>
      ))}
    </div>
    <Subscribe/>
    <Image/>
    <Footer/>
    </>
  )
}

export default Product