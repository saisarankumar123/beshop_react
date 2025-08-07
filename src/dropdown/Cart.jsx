import '../css/Cart.css';
import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = ({ products }) => {
  const {
    updateQuantity,
    calculateTotal,
    promoCode,
    setPromoCode,
    discountApplied,
    setDiscountApplied,
  } = useCart();

  const cartTotal = products.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  const handleApplyCode = () => {
    if (promoCode.trim().toUpperCase() === 'SAVE10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };

  const discountedTotal = discountApplied ? cartTotal * 0.9 : cartTotal;

  return (
    <>
      <Navbar />
      <div className="cpage-one">
        <h1 className="title">Cart</h1>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link>
          <span className="separator"> - </span>
          <span className="breadcrumb-current">Cart</span>
        </div>
        <img src={img} alt="..." />
      </div>

      <div className="total">
        <div className="cart-container">
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          {products.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="product-info">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p className="stock">IN STOCK</p>
                  <p className="sku">SKU: {item.sku}</p>
                </div>
              </div>

              <div className="price-section">
                <span className="old-price">${item.oldPrice}</span>
                <span className="new-price">${item.newPrice}</span>
              </div>

              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, -1)}>&lt;</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>&gt;</button>
              </div>

              <div className="total-price">
                <strong>${calculateTotal(item.newPrice, item.quantity)}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="checkout-wrapper">
          <div className="promo-section">
            <div className="promo-inputs">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handleApplyCode}>APPLY CODE</button>
            </div>

            <div className="promo-info">
              <h3>How To Get A Promo Code?</h3>
              <p>
                Follow our news on the website, as well as subscribe to our social
                networks. So you will not only be able to receive up-to-date codes,
                but also learn about new products and promotional items.
              </p>
              <div className="social-icons">
                <button className="facebook"><FaFacebookF /></button>
                <button className="twitter"><FaTwitter /></button>
                <button className="instagram"><FaInstagram /></button>
                <button className="google"><FaLinkedinIn /></button>
              </div>
            </div>
          </div>

          <div className="total-box">
            <div className="total-line">
              <span>Goods on</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="total-line">
              <span>Discount on promo code</span>
              <span>{discountApplied ? "10%" : "No"}</span>
            </div>
            <hr />
            <div className="total-line total-amount">
              <span>Total:</span>
              <span>${discountedTotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout"><button className="checkout-btn">CHECKOUT</button></Link>
          </div>
        </div>
      </div>

      <Subscribe />
      <Image />
      <Footer />
    </>
  );
};

export default Cart;
