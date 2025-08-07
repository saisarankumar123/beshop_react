import '../css/Login.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Login = () => {
  return (
    <>
    <Navbar/>
        <div className="lpage-one">
                 <h1 className="title">Login</h1>
              <div className="breadcrumb">
                <Link to="/" className="breadcrumb-home">Home</Link>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Login</span>
              </div>
        
              <img src={img} alt="..." />
              </div>



               <div className="login-wrapper">
      <div className="login-container">
        <h2>Log In With</h2>

        <div className="social-icons">
          <button className="facebook"><FaFacebookF /></button>
          <button className="twitter"><FaTwitter /></button>
          <button className="instagram"><FaInstagram /></button>
          <button className="google"><FaLinkedinIn /></button>
        </div>

        <form className="login-form">
          <input type="email" placeholder="Enter your email or nickname" />
          <input type="password" placeholder="Enter your password" />

          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="login-btn">LOG IN</button>

          <div className="login-links">
            <span>No account? <Link to="/registation">Register now</Link></span>
            <Link to="/forgot">Lost your password?</Link>
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

export default Login