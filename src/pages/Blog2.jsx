import '../css/Post.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'
import { FaRegCalendarAlt, FaUser, FaEye, FaRegCommentDots } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


const Blog2 = () => {

    const location = useLocation();
  const post = location.state?.post;

  const imageSrc = post?.img || img;

  return (
    <>
    <Navbar/>
        <div className="popage-one">
                 <h1 className="title">Blog</h1>
              <div className="breadcrumb">
                <Link to="/" className="breadcrumb-home">Home</Link>
                <span className="separator"> - </span>
                <span className="breadcrumb-current">Blog</span>
              </div>
        
              <img src={img} alt="..." />
              </div>


              <div className="banner-container">
      <h1 className="banner-title">Best Multi-Step Skin Care Treatment</h1>
      <p className="banner-subtitle">What is actually on your table?</p>
  
    </div>

    <div className="post-meta-wrapper">
      <div className="post-banner" >
          <img src={imageSrc} alt="Post banner" className="post-banner-image" />

      </div>
      
      <div className="meta-container">
        <div className="meta-left">
          <span><FaRegCalendarAlt className="icon" /> June 21, 2020</span>
          <span><FaUser className="icon" /> by Melissa Jones</span>
        </div>

        <div className="meta-right">
          <span><FaEye className="icon" /> 114</span>
          <span><FaRegCommentDots className="icon" /> 50</span>
        </div>
      </div>
    </div>

<div className="llt">
    <div className="letter">
      <div className="l1">The history of perfume is about 5,000 years old and dates back to ancient Egypt and Mesopotamia. The fragrances of those times differed significantly from modern ones in that they were very concentrated and were more often intended for religious ceremonies than for cosmetic purposes. Although the same Cleopatra had her own perfume factory and left behind a recipe for a fragrance of 16 ingredients - "kifi". It is difficult to call it a perfume in the modern sense - it is rather a mixture of oils and herbs. Modern perfumes can have a maximum of 30% aromatic component, everything else - an alcoholic solution. But do not be upset. If you do not need such extravagant appearances as in the queen of Egypt, when he fragrances of her ships spread throughout the coast, then 100% concentrate is unlikely to be needed.</div>
      <div className="l2">
        <h5>About sustainability</h5>
It would seem that everything is clear here: the higher the concentration of aromatic components - the more stable the aroma. But not everything is so simple: even if in the laboratory the aroma stays calm for a day or more, in life it is influenced by humidity and temperature, skin condition and the aroma of your body. Therefore, experts advise to apply fragrances on a clean, moisturizing body lotion. But even this does not guarantee that super-concentrated perfumes will last longer than perfumed or eau de toilette. It all depends on the volatility of the ingredients themselves.
      </div>
    </div>

    </div>




     <div className="quote-perfume-section">
      <div className="quote-box">
        <p className="quote-text">
          “<strong>Fruity notes are considered the</strong> lightest, but sandalwood and amber - the strongest. 
          This does not mean that fruit flavors should be forgotten. First, they have a good plume, and secondly, 
          history knows many cases where the aroma was much more stable than required by the situation.”
        </p>
        <p className="quote-author">Melissa Jones</p>
      </div>

      <hr className="divider" />

      <div className="perfume-grid">
        <div className="perfume-item">
          <h4>Perfume</h4>
          <p>Is the most expensive type of perfume, because it contains the highest concentration of aromatic composition - 20-30%. Therefore, they should be used only for special events.</p>
        </div>
        <div className="perfume-item">
          <h4>Perfumed Water</h4>
          <p>Is the most concentrated after perfumes mixture of perfume composition 12-15% with ethyl alcohol 85%.</p>
        </div>
        <div className="perfume-item">
          <h4>Cologne</h4>
          <p>is the least concentrated type of perfume. Contains 5% aromatic substances dissolved in 80% ethyl alcohol. By the way, it was the most famous French emperor who introduced colognes into fashion and used 1-2 bottles a day</p>
        </div>
        <div className="perfume-item">
          <h4>Eau De Toilette</h4>
          <p>is what is most likely on your cosmetic table. The most common type of perfume. Contains 6-12% of the perfume composition. The term itself, by the way, was invented by Napoleon when he invented a bergamot-based fragrance recipe during a military campaign and called it 'eau de toilette.'</p>
        </div>
      </div>
    </div>


    <div className="rew">

          <section className="aroma-section">
      <p className="aroma-subtitle">Perfume</p>
      <h2 className="aroma-title">About Aromas In<br />More Detail</h2>

      <ul className="aroma-list">
        <li><strong>Citrus</strong> - based on essential oils of orange, tangerine and bergamot;</li>
        <li><strong>Floral</strong> - based on the essence of fresh flowers: roses, jasmine, lilac and others;</li>
        <li><strong>Woody</strong> - based on the essential oils of sandalwood, cedar, goldenrod;</li>
        <li><strong>Oriental</strong> - based on musk, amber, cinnamon and coriander;</li>
        <li><strong>Leather</strong> - fragrances based on animal skin;</li>
        <li><strong>Shiprovi</strong> - contain incense, oakmoss, patchouli;</li>
        <li><strong>Wine glasses</strong> - complex aromas with wood moss, lavender and coumarin.;</li>
      </ul>

      <button className="shop-button">Shop Now</button>
    </section>


    </div>

   <div className="cs">
     <section className="comment-section">
      <h2>Leave A Comment</h2>
      <p>Your email address will not be published.</p>

      <form className="comment-form">
        <div className="input-row">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="text" placeholder="Enter your site" />
        </div>

        <textarea rows="6" placeholder="Enter your revive"></textarea>

        <button type="submit">Post A Comment</button>
      </form>
    </section>
    </div>


    <Subscribe/>
    <Image/>
    <Footer/>
    </>
  )
}

export default Blog2