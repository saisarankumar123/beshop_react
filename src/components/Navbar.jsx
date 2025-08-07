import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaSnowman } from "react-icons/fa6";
import { FaRegKissWinkHeart } from "react-icons/fa";
import { GiBasketballBasket } from "react-icons/gi";
import headerimage from '../images/download.svg';
import '../css/Navbar.css'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`custom-navbar navbar navbar-expand-lg fixed-top ${scrolled ? '  bg-dark opacity-75  shadow-sm' : 'bg-transparent bg-dark opacity-75 '}`}>
      <div className="container-fluid px-5">
        <Link className="navbar-brand" to="/">
          <img src={headerimage} alt="Logo" width="100" />
        </Link>

        <button
          className="navbar-toggler text-white border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          <ul className="navbar-nav mx-auto gap-4 text-uppercase">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                Pages
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/aboutus">About Us</Link></li>
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                <li><Link className="dropdown-item" to="/registation">Registation</Link></li>
                <li><Link className="dropdown-item" to="/post">Post</Link></li>
                <li><Link className="dropdown-item" to="/product">Product</Link></li>
                 <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                <li><Link className="dropdown-item" to="/error">404</Link></li>
                <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                <li><Link className="dropdown-item" to="/wishlist">Wish List</Link></li>
                {/* <li><Link className="dropdown-item" to="/payment">Payment</Link></li>
                <li><Link className="dropdown-item" to="/finish">Finish</Link></li> */}
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="d-flex gap-3 fs-5 nav-icons">
            <Link to="/faq"><BsFillSearchHeartFill /></Link>
            <Link to="/login"><FaSnowman /></Link>
            <Link to="/wishlist"><FaRegKissWinkHeart /></Link>
            <Link to="/cart"><GiBasketballBasket /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
