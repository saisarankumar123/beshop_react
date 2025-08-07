import '../css/Finish.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'
import { useCart } from '../context/CartContext';

const Finish = ({steps , products}) => {

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
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Finish</span>
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




    <div className="total">

              <div className="thankyou-container">
      <div className="left-section">
        <h1>
          BeShop Thanks <br /> You For Your Purchase!
        </h1>
        <p>
          Consequat minim ipsum aliquip quis ullamco aliquip consequat aliquip sit eu enim
          duis qui. Velit minim tempor non aliquip officia cillum. Irure Lorem do enim sint
          in commodo. Ea ea nostrud labore mollit nisi. Cupidatat esse minim mollit qui
          velit esse voluptate. Excepteur ad officia dolore amet magna ipsum dolor incididunt
          excepteur ad non. Ea ea qui irure excepteur est consectetur amet est exercitation in.
        </p>

        <table className="order-info">
          <tbody>
            <tr>
              <td>Order number</td>
              <td>B-125724_75</td>
            </tr>
            <tr>
              <td>Order status</td>
              <td className="status">Awaiting payment</td>
            </tr>
            <tr>
              <td>Reserved for</td>
              <td>22.07.2025</td>
            </tr>
            <tr>
              <td>Expected loading date</td>
              <td>22.07.2025</td>
            </tr>
          </tbody>
        </table>

        <div className="print-link">PRINT A DOCUMENT -</div>
      </div>

      <div className="right-section">
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

    </div>

    <Subscribe/>
    <Image/>
    <Footer/>
    </>
  )
}

export default Finish