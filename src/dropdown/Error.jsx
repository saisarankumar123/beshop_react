import '../css/Error.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'
import polishImg from '../images/polish.webp'
const Error = () => {
  return (
    <>
    <Navbar/>
        <div className="epage-one">
                 <h1 className="title">404</h1>
              <div className="breadcrumb">
                <Link to="/" className="breadcrumb-home">Home</Link>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Error</span>
              </div>
        
              <img src={img} alt="..." />
              </div>


              <div className="notfound-container">
         <div className="notfound-content">
        <div className="notfound-text">
          <h1 className="error-code">404  <span className="error-message">Page Not Found</span></h1>
          <p className="error-description">
            Please try Search or go back to <Link to="/" className="home-link">Homepage</Link>.
          </p>
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button><span role="img" aria-label="search">^_^</span></button>
          </div>
        </div>

        <div className="notfound-image">
          <img src={polishImg} alt="Nail polish spilled" />
        </div>
      </div>
    </div>



    <Subscribe/>
    <Image/>
    <Footer/>
    </>
  )
}

export default Error