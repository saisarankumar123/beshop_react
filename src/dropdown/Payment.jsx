import '../css/Payment.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Payment = ({steps , products}) => {

  const [paymentMethod, setPaymentMethod] = useState("credit");
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
        <div className="chppage-one">
                 <h1 className="title">Check Out</h1>
              <div className="breadcrumb">
                <Link to="/" className="breadcrumb-home">Home</Link>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Check Out</span>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Payment</span>
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
     <div className="payment-container">
      <div className="payment-left">
        <h2>Payment Methods</h2>

        <div className="payment-option">
          <label>
            <input
              type="radio"
              name="payment"
              value="credit"
              checked={paymentMethod === "credit"}
              onChange={() => setPaymentMethod("credit")}
            />
            <span className="radio-label">Credit Card <span className="info-icon">ⓘ</span></span>
          </label>

          {paymentMethod === "credit" && (
            <div className="card-form">
              <label>Card number</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" />

              <div className="card-details">
                <div>
                  <label>Expiration date</label>
                  <div className="expiry-inputs">
                    <input type="text" placeholder="mm" />
                    <input type="text" placeholder="yy" />
                  </div>
                </div>

                <div>
                  <label>Security code</label>
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="payment-option">
          <label>
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
            />
            <span className="radio-label">PayPal <span className="info-icon">ⓘ</span></span>
          </label>

          {paymentMethod === "paypal" && (
            <div className="card-form">
              <label>Card number</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" />

              <div className="card-details">
                <div>
                  <label>Expiration date</label>
                  <div className="expiry-inputs">
                    <input type="text" placeholder="mm" />
                    <input type="text" placeholder="yy" />
                  </div>
                </div>

                <div>
                  <label>Security code</label>
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            </div>
          )}
        </div>



        <div className="payment-option">
          <label>
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "cashpayment"}
              onChange={() => setPaymentMethod("cashpayment")}
            />
            <span className="radio-label">Cash Payment <span className="info-icon">ⓘ</span></span>
          </label>

          {paymentMethod === "cashpayment" && (
            <div className="card-form">
              <label>Card number</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" />

              <div className="card-details">
                <div>
                  <label>Expiration date</label>
                  <div className="expiry-inputs">
                    <input type="text" placeholder="mm" />
                    <input type="text" placeholder="yy" />
                  </div>
                </div>

                <div>
                  <label>Security code</label>
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            </div>
          )}
        </div>
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


        <div className="nav-buttons2">
      <Link to="/checkout" className='link-button2'><button className="btn2 back-btn2">
        <span>&lt;</span> BACK
      </button></Link>
       <Link to="/finish" className='link-button2'><button className="btn2 next-btn2">
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

export default Payment