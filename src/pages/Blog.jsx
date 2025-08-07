import Navbar from '../components/Navbar';
import Footer from './Footer';
import Subscribe from './Subscribe';
import Image from './Image';
import '../css/Blog.css';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'
import { useNavigate } from 'react-router-dom';


const Blog = ({blog}) => {

    const navigate = useNavigate();

      const handlePost = (bl) => {
    navigate('/blog2', { state: { post: bl } });
  };

  return (
    <>
         <Navbar />

      <div className="bpage-one">
         <h1 className="title">Blog</h1>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-home">Home</Link>
        <span className="separator"> - </span>
        <span className="breadcrumb-current">Blog</span>
      </div>

      <img src={img} alt="..." />
      </div>

      
      <div className="empty"></div>


 <div className="full">
<div className="blogd">
    <div className="bb">
   {blog.map((bl, index) => (
        <div key={index} className="blog-item">
          <img src={bl.img} alt={bl.head} />
          <h3>{bl.head}</h3>
          <p>{bl.para}</p>
           <button onClick={() => handlePost(bl)}>Read More</button>
        </div>
   ))}
   </div>
</div>
</div>


      <Subscribe />
      <Image />
      <Footer />
    </>
  )
}

export default Blog