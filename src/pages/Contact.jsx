import Navbar from '../components/Navbar';
import Footer from './Footer';
import Image from './Image';
import '../css/Contact.css';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import img from '../images/wp6656486.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="cnpage-one">
        <h1 className="title">Contact</h1>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link>
          <span className="separator"> - </span>
          <span className="breadcrumb-current">Contact</span>
        </div>
        <img src={img} alt="..." />
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <p>27 Division St, New York,<br />NY 10002, USA</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p>+1 345 99 71 345<br />info@beshop.com</p>
        </div>

        <div className="contact-card">
          <FaClock className="contact-icon" />
          <p>Mon - Fri: 9 am - 6 pm<br />Sat - Sun: Holiday</p>
        </div>
      </div>



      <section className="care-section">
      <div className="care-left">
        <h2>We Take Care Of You</h2>
        <p>
          Email us if you have any questions, we will be sure to contact you and find a solution.
          Also, our managers will help you choose the product that suits you best, at the best price.
          From year to year, the BeShop network develops and improves, taking into account all consumer needs and market trends.
          But for us, the concern remains that when coming to the BeShop store, customers do not have questions about the convenience and comfort of shopping,
          product quality and the level of professionalism of sales consultants.
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
      </div>

      <div className="page-three">
            <Link to="/"><img src="https://beshop-demo.vercel.app/assets/img/main-logo1.svg" alt="..." /></Link>
             <Link to="/"><img src="https://beshop-demo.vercel.app/assets/img/main-logo2.svg" alt=""  id="alt"/></Link>
             <Link to="/"><img src="https://beshop-demo.vercel.app/assets/img/main-logo3.svg" alt="" /></Link>
             <Link to="/"><img src="https://beshop-demo.vercel.app/assets/img/main-logo4.svg" alt="" /></Link>
             <Link to="/"> <img src="https://beshop-demo.vercel.app/assets/img/main-logo5.svg" alt="" /></Link> 
     </div> 
    </section>


    <div className="leave">
       <div className="con">
      <h3>Write to Us</h3>
      <h1>Leave a Message</h1>
      <p>Write to us if you have any questions, we will definitely contact you and find a solution.</p>

      <form className="contact-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Enter Your Name" 
          required 
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Enter Your Email" 
          required 
        />

        <textarea 
          name="message" 
          placeholder="Enter Your Message" 
          rows="6" 
          required 
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>

    {/* <div className="empty"></div> */}

    <div className="map">
      <div className="map-container">
      <h2 className="map-title">Chorpara Bus Stop Location</h2>
      <iframe
        title="Chorpara Bus Stop Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0863161129956!2d90.39027257516045!3d24.759771549215273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375656347bd74b7b%3A0x8f4a1efcf0e2a1a1!2sChorpara%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1721551991421!5m2!1sen!2sbd"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    </div>


      <Image />
      <Footer />
    </>
  );
};

export default Contact;
