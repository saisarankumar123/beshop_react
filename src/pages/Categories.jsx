import Navbar from '../components/Navbar';
import Footer from './Footer';
import Subscribe from './Subscribe';
import Image from './Image';
import '../css/Categories.css';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'

const Categories = ({ categories }) => {
  return (
    <>
      <Navbar />

      <div className="cpage-one">
         <h1 className="title">Categories</h1>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-home">Home</Link>
        <span className="separator"> - </span>
        <span className="breadcrumb-current">Categories</span>
      </div>

      <img src={img} alt="..." />

      </div>

      <div className="empty"></div>
      <div className="recs">
        {categories.map((category, index) => (
          <div className="phlp" key={index}>
            <img src={category.img} alt={category.name} />
            <div className="ops">
              <div className="overlay-text">
                <p>{category.name}</p>
                <Link to="/categories" className="obtn">
                  <button>Browse Items</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

       <div className="empty"></div>

      <Subscribe />
      <Image />
      <Footer />
    </>
  );
};

export default Categories;
