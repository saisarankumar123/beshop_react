import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import '../css/Image.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

const Image = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="image">
      <div className="image-flex">
        {images.map((imge, index) => (
          <Link to="/" className="image-wraper" key={index}>
            <img src={imge} alt={`Instagram image ${index + 1}`} className="one" />
            <div className="overlay">
              <FaInstagram className="insta-icon" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Image;
