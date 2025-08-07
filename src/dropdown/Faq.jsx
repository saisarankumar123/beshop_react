import '../css/Faq.css'

import Navbar from '../components/Navbar';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import Image from '../pages/Image';
import { Link } from 'react-router-dom';
import img from '../images/wp6656486.png'

const Faq = ({activeIndex ,faqdata ,  toggle}) => {
  return (
    <>
             <Navbar />

      <div className="fpage-one">
         <h1 className="title">FAQ</h1>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-home">Home</Link>
        <span className="separator"> - </span>
        <span className="breadcrumb-current">FAQ</span>
      </div>

      <img src={img} alt="..." />
      </div>

     

     <div className="ques">
          <div className="faq-container">
      <input className="faq-search" type="text" placeholder="Search" />
      <button className="faq-search-button">
         <span>SEARCH</span>
      </button>

      <div className="faq-list">
        {faqdata.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className={`faq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggle(index)}>
              <div className="faq-number">
                <span>{index + 1}</span>
              </div>
              <h4>{faq.question}</h4>
              <div className="faq-toggle">{activeIndex === index ? '−' : '+'}</div>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
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

export default Faq