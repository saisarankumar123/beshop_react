import '../css/Checkout.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png';
import { useCart } from '../context/CartContext';


const Checkout = ({ steps, products }) => {
  const { cart, discountApplied } = useCart();

  const cartTotal = cart.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  const deliveryFee = 30;
  const finalTotal = discountApplied ? cartTotal * 0.9 + deliveryFee : cartTotal + deliveryFee;



  return (
    <>
    <Navbar/>
        <div className="chpage-one">
                 <h1 className="title">Check Out</h1>
              <div className="breadcrumb">
                <Link to="/" className="breadcrumb-home">Home</Link>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Check Out</span>
              </div>
        
              <img src={img} alt="..." />
              </div>



           <div className="fds">
               <div className="checkout-steps-wrapper">
      {steps.map((item, index) => (
        <div key={index} className="checkout-step">
          <div className="icon-container">{item.icon}</div>
          <div className="step-title">{item.step}</div>
          <div className="step-label">{item.label}</div>
        </div>
      ))}
    </div>
    </div>


<div className="fds">

    <div className="checkout-wrapper">
      
      <div className="checkout-form">
        <h2>Info About You</h2>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your last name" />
        <div className="form-row">
          <input type="text" placeholder="Enter your phone" />
          <input type="email" placeholder="Enter your mail" />
        </div>

        <h2>Delivery Info</h2>
        <select>
          <option>Select a country</option>
          <option>USA</option>
          <option>UK</option>
          <option>India</option>
        </select>
        <div className="form-row">
          <input type="text" placeholder="Enter the city" />
          <input type="text" placeholder="Enter the address" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Delivery day" />
          <input type="text" placeholder="Delivery time" />
        </div>

        <h2>Note</h2>
        <textarea placeholder="Additional notes or instructions..."></textarea>
      </div>

      <div className="payment-right">
              <h2>Your Order</h2>
              {products.map(( prod , idx) => (
              <div key={prod.id  || idx} className="order-card">
                <img src={prod.image} alt={prod.name} />
                <div className="item-details">
                  <div className="item-name">{prod.name} <span>x{prod.quantity}</span></div>
                  <div className="item-price">{prod.price}</div>
                  <div className="item-sku">{prod.sku}</div>
                </div>
              </div>
              ))}
      
              <div className="order-summary">
                <div className="summary-row">
                  <span>Goods on</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Discount on promo code</span>
                  <span>No</span>
                </div>
                <div className="summary-row">
                  <span>
                    Delivery <small>(Aug 28,2020 at 11:30)</small>
                  </span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <hr />
                <div className="summary-total">
                  <strong>Total:</strong>
                  <strong>${finalTotal.toFixed(2)}</strong>
                </div>
              </div>
            </div>
    </div>


    <div className="nav-buttons1">

           <Link to="/payment" className='link-button1'><button className="btn1 next-btn1">
            NEXT <span>&gt;</span>
          </button></Link>
        </div>

    </div>





    <Subscribe/>
    <Image/>
    <Footer/>
    </>
  )
}

export default Checkout