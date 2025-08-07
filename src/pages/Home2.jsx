import '../css/Home2.css'
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { RiMedal2Line } from "react-icons/ri";
import { GiLotusFlower } from "react-icons/gi";
import { Link } from 'react-router-dom';
import coco from '../images/cocc.png'
import Subscribe from './Subscribe';


const Home2 = () => {
  return (
    <>
    <div className="page-five">
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


    <div className="page-six">
          <div className="lead">
              <h3>Popular collections</h3>
              <h1>Top categories</h1>
              <p>Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.</p>
          </div>
          <div className="phlp">
            <div className="ops1">
              <div className="overlay-text"><p>Nails</p>
              <Link to="/categories" className='obtn'><button>Browse Items</button></Link>
              </div>
            </div>
            <div className="ops2">
              <div className="overlay-text"><p>Spa</p>
              <Link to="/categories" className='obtn'><button>Browse Items</button></Link></div>
              </div>
            <div className="ops3">
               <div className="overlay-text"><p>Perfume</p>
              <Link to="/categores" className='obtn'><button>Browse Items</button></Link></div>
            </div>
          </div>
    </div>


    <div className="page-seven">
         <div className="ff">

           <div className="fl1"></div>

           <div className="fl2">
            <div className="promo-section">
              <h3>Check This Out</h3>
            <h1>New collection for delicate skin</h1>
            <p id='ds'>Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.</p>
            <p id='dsa'>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim</p> 
            <Link to="/shop" id='bb'><button>Shop</button></Link>
            </div>
             <img src={coco} alt="..." />
           </div>

           <div className="fl3">
               <div className="promo-section">
                <h3>About Us</h3>
            <h1>Who we are</h1>
            <p id='fs'>Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.</p>
            <p id='fsa'>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim.</p>
            <Link to="/aboutus"><button>About Us</button></Link>
               </div>
           </div>

           <div className="fl4">
                    <div className="youtube-video-container">
        <iframe width="560" height="800" src="https://www.youtube.com/embed/K1yp7Q1hH1c?si=jZyccFIrtQAHNLz3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

           </div>

           </div>
    </div>

    <div className="page-eight">
         <div className="headings">
               <h3>Our Blog</h3>
               <h1>The Latest News At BeShop</h1>
                <p>
                  Nourish your skin with toxin-free cosmetic products. With the offers that you can't refuse.
                </p>
        </div>

        <div className="blog">
            <div className="b1">
                <div className="b1i"></div>
                <h3>Perfumes, perfumed or eau de toilette?</h3>
                <p>Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can't refuse.</p>
                <Link to="/blog" ><button>Read More</button></Link>
            </div>
            <div className="b2">
                <div className="b2i"></div>
                <h3>Best multi-step skin care treatment</h3>
                <p>Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can't refuse.</p>
                <Link to="/blog"><button>Read More</button></Link>
            </div>
        </div>

        <Link to="/blog" className='btn3'><button>Show More</button></Link>

    </div>

    <Subscribe/>
    </>
  )
}

export default Home2