import '../css/Profile.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'


const Profile = () => {
  return (
    <>
    <Navbar/>
        <div className="ppage-one">
                 <h1 className="title">Profile</h1>
              <div className="breadcrumb">
                <Link to="/" className="breadcrumb-home">Home</Link>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Profile</span>
              </div>
        
              <img src={img} alt="..." />
              </div>
    <Subscribe/>
    <Image/>
    <Footer/>
    </>
  )
}

export default Profile