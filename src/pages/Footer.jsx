
import '../css/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import visa from '../images/visa.png';
import mastercard from '../images/mastercard.png';
import paypal from '../images/payPal.png';
import payoneer from '../images/payoneer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social">
          <p>Find us here:</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-logo">
          <h2>BeShop</h2>
        </div>

        <div className="payments">
          <p>Payment methods:</p>
          <div className="payment-icons">
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="MasterCard" />
            <img src={paypal} alt="PayPal" />
            <img src={payoneer} alt="Payoneer" />
          </div>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-col">
          <h3>About</h3>
          <ul>
            <li>About us</li>
            <li>Categories</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Categories</h3>
          <ul>
            <li>Make up</li>
            <li>SPA</li>
            <li>Perfume</li>
            <li>Nails</li>
            <li>Skin care</li>
            <li>Hair care</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li>Careers</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>Support</li>
            <li>Shipping details</li>
            <li>Information</li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> 27 Division St, New York, NY 10002, USA</p>
          <p><FaMobileAlt /> +1 345 99 71 345</p>
          <p><FaMobileAlt /> +1 345 74 64 975</p>
          <p><FaEnvelope /> info@beshop.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© All rights reserved. BeShop 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
