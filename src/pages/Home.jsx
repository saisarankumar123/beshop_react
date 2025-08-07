import Navbar from "../components/Navbar"
import Footer from "./Footer"
import Image from "./Image"
import nail from '../images/nail.png'
import Home2 from '../pages/Home2'
import '../css/Home.css'
// import '../css/Media.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { FaRegKissWinkHeart } from "react-icons/fa"
import { GiBasketballBasket } from "react-icons/gi"
import { useNavigate } from 'react-router-dom'; 

const Home = ({handleFilter  , handlePrev , handleNext , visibleProducts , handleHeart , handleLike , visible }) => {


  const navigate = useNavigate();

const handleShop = (pro) => {
   alert("Like to show the content of this")
  navigate('/shop2', { state: { product: pro } }); 
};

  return (
    <div className="home">
      <div className="page-one">
        
          <Navbar/>

          <div className="main-page">
            <h3>Professional</h3>
            <h1>Beauty & Care</h1>
            <p>Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.</p>
            <Link to="/shop"><button>Shop Now</button></Link>
          </div>

          
      </div>

      <div className="page-two">
  <div className="heading">
    <h3>Cosmetics</h3>
    <h1>Trending products</h1>
    <p>
      Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.
    </p>
  </div>

  <ul className="list-flex">
          <li onClick={() => handleFilter("Make Up")}>MakeUp</li>
        <li onClick={() => handleFilter("SPA")}>SPA</li>
        <li onClick={() => handleFilter("Perfumes")}>Perfume</li>
        <li onClick={() => handleFilter("Nails")}>Nails</li>
        <li onClick={() => handleFilter("Hair Care")}>Hair Cares</li>

  </ul>

  <div className="full-box">

    <button onClick={handlePrev} className="left">
        <FaChevronLeft />
      </button>

  <div className="box-cart">

   {visibleProducts.length > 0 ? (
  visibleProducts.map(product => (
    <div key={product.id} className="product-cardq">

      <div className="image-container">
        
        <img src={product.img} alt={product.name} />
        
        {product.sale && <h6 className="sale-badge">{product.sale}</h6>}
        
        <div className="hover-icons">
          <CiSearch className="search-heart" type="button"  onClick={() => handleShop(product)} />
          <div className="two-icons">
           <div className="heart"  onClick={() => handleLike(product)} ><FaRegKissWinkHeart type="button" /></div> 
            <div className="heart" onClick={() => handleHeart(product)}> <GiBasketballBasket type="button" /></div> 
          </div>
        </div>
      </div>

      <Link to="/shop" className="product-link">
        <h4>{product.title}</h4>
      </Link>
      <p>
        <strike>${product.old}</strike>&nbsp; ${product.price}
      </p>
    </div>
  ))
) : (
  <p>Loading products...</p>
)}


  </div>
     <button onClick={handleNext} className="right">
        <FaChevronRight />
      </button>

  </div>
</div>


    <div className="page-three">
            <Link to="/"><img src="https://beshop-demo.vercel.app/assets/img/main-logo1.svg" alt="..." /></Link>
             <Link to="/"><img src="https://beshop-demo.vercel.app/assets/img/main-logo2.svg" alt=""  id="alt"/></Link>
             <Link to="/"><img src="https://beshop-demo.vercel.app/assets/img/main-logo3.svg" alt="" /></Link>
             <Link to="/"><img src="https://beshop-demo.vercel.app/assets/img/main-logo4.svg" alt="" /></Link>
             <Link to="/"> <img src="https://beshop-demo.vercel.app/assets/img/main-logo5.svg" alt="" /></Link> 
     </div> 


     <div className="page-four">
         <div className="discount">
          <h3>Discount</h3>
          <h4>Get Your <span>50%</span> Off</h4>
          <p>Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.</p>
           <Link to="/shop"><button>Get Now</button></Link>
          </div>

          <div className="drop">
            <img src={nail} alt="..." />
          </div>
     </div>


     <Home2/>


      <div className="page-last">
        <Image/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home