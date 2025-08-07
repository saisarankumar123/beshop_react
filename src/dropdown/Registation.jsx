import '../css/Registation.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Registation = () => {
  return (
    <>
    <Navbar/>
        <div className="rpage-one">
                 <h1 className="title">Registation</h1>
              <div className="breadcrumb">
                <Link to="/" className="breadcrumb-home">Home</Link>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Registation</span>
              </div>
        
              <img src={img} alt="..." />
              </div>



              <div className="register-wrapper">
      <div className="register-container">
        <h2>Register Now</h2>

        <div className="social-icons">
          <button className="facebook"><FaFacebookF /></button>
                    <button className="twitter"><FaTwitter /></button>
                    <button className="instagram"><FaInstagram /></button>
                    <button className="google"><FaLinkedinIn /></button>
        </div>

        <form className="register-form">
          <div className="double-input">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your last name" />
          </div>

          <div className="double-input">
            <input type="text" placeholder="Enter your phone" />
            <input type="email" placeholder="Enter your email" />
          </div>

          <h3>Password</h3>

          <div className="double-input">
            <input type="password" placeholder="Enter your password" />
            <input type="password" placeholder="Confirm password" />
          </div>

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="register-btn">REGISTRATION</button>

          <div className="register-links">
            <span>Already have an account? <Link to="/login">Log in</Link></span>
          </div>
        </form>
      </div>
    </div>



    <Subscribe/>
    <Image/>
    <Footer/>
    </>
  )
}

export default Registation