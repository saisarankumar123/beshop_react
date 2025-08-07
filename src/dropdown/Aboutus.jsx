import '../css/Aboutus.css'
import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'
import { FaShippingFast, FaPhoneAlt, FaUserClock } from 'react-icons/fa';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { RiMedal2Line } from 'react-icons/ri';
import { GiLotusFlower } from 'react-icons/gi';

const Aboutus = () => {

  const stats = [
  { value: '2300+', label: 'Products' },
  { value: '108', label: 'Brands' },
  { value: '32', label: 'Partners' },
  { value: '618+', label: 'Customers' },
];


  return (
    <>
    <Navbar/>

     <div className="apage-one">
         <h1 className="title">About Us</h1>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-home">Home</Link>
        <span className="separator"> - </span>
        <span className="breadcrumb-current">About Us</span>
      </div>

      <img src={img} alt="..." />
      </div>


      <section className="info-boxes">
      <div className="info-box">
        <div className="icon-bg"><FaShippingFast className="icon" /></div>
        <div className="info-text">
          <h4>Free Shipping</h4>
          <p>World wide</p>
        </div>
      </div>

      <div className="info-box">
        <div className="icon-bg"><FaPhoneAlt className="icon" /></div>
        <div className="info-text">
          <h4>Helpline</h4>
          <p>+1 345 99 71 345</p>
        </div>
      </div>

      <div className="info-box">
        <div className="icon-bg"><FaUserClock className="icon" /></div>
        <div className="info-text">
          <h4>Customer Support</h4>
          <p>Finish!</p>
        </div>
      </div>
    </section>


    <section className="promo-container">
      <h3 className="promo-label">Promotion Video</h3>
      <h1 className="promo-heading">Welcome To BeShope</h1>
      <p className="promo-subtext">
        Today we can offer our customers exclusive products of 108<br />
        brands marked "only in BeShope"
      </p>

      <div className="video-wrapper">

        <iframe src="https://www.youtube.com/embed/K1yp7Q1hH1c?si=jZyccFIrtQAHNLz3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      
    </section>


    <div className="stats-container">
      {stats.map((stat, index) => (
        <div className="stat-box" key={index}>
          <div className="stat-number-wrapper">
            <span className="stat-number">{stat.value}</span>
          </div>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>


    <div className="pop">
          <section className="success-story">
      <div className="content-wrapper">
        <p className="section-label">Success Story</p>
        <h1 className="main-heading">BeShop Develops<br />Its Own Brands</h1>
        <p className="sub-heading">
          The BeShope network is being developed and improved, taking into account all consumer.
        </p>
        <p className="description">
          Forming the range of stores, we, above all, strive not only to meet the format of "home shop", offering each
          customer the most basic household goods, but also to create a unique space of beauty and care. BeShope stores
          offer their customers the widest and highest quality selection of products from world-renowned manufacturers.
        </p>
        <Link to="/shop"><button className="shop-btn">SHOP NOW</button> </Link>
      </div>
    </section>

    </div>

    <div className="page-five1">
                 <div className="boxl">
                      <div className="in1">
                        <div className="logi"><FaCanadianMapleLeaf />
    </div>
                        <h3>Natural</h3>
                        <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
                      </div>
                      <div className="in2">
                        <div className="logi"><RiMedal2Line />
    </div>
                        <h3>Quality</h3>
                        <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
                      </div>
                      <div className="in3">
                        <div className="logi"><GiLotusFlower />
    </div>
                        <h3>Natural</h3>
                        <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.</p>
                      </div>
                 </div>
        </div>

    <Subscribe/>
    <Image/>
    <Footer/>
    </>
  )
}

export default Aboutus