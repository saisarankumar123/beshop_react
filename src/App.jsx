import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Categories from './pages/Categories'
import Faq from './dropdown/Faq'
import Cart from './dropdown/Cart'
import Wishlist from './dropdown/Wishlist'
import Error from './dropdown/Error'
import Aboutus from './dropdown/Aboutus'
import Checkout from './dropdown/Checkout'
import Post from './dropdown/Post'
import Product from './dropdown/Product'
import Login from './dropdown/Login'
import Registation from './dropdown/Registation'
import Blog2 from './pages/Blog2'
import Shop2 from './pages/Shop2'
import Payment from './dropdown/Payment'
import Finish from './dropdown/Finish'
import { useEffect, useState } from 'react'
import { useCart } from './context/CartContext';
import api from './api/Posts' ;
// import Data from './pages/Data';
// import {
//   sampleProducts,
//   sampleCategories,
//   sampleBlog,
//   sampleValue,
//   sampleFaq,
// } from './pages/Data';

const App = () => {

  // const API_URL1 = "http://localhost:3500/products";
  // const API_URL2 = "http://localhost:3500/categories"
  // const API_URL3 = "http://localhost:3500/blog"
  // const API_URL4 = "http://localhost:3500/value"
  // const API_URL5 = "http://localhost:3500/faqdata"

  const [products , setProducts] = useState([]); //product
   const [discountApplied, setDiscountApplied] = useState(false); //discount
   const [categories , setCategories] = useState([]) ; //category
  const [blog , setBlog] = useState([]) ; //blog
   const [value , setValue] = useState([]) ; //values
  const [faqdata , setFaqData] = useState([]) ; //faqdata
  const [startIndex, setStartIndex] = useState(0); 
  const [promoCode, setPromoCode] = useState('');  //promocode cart
  const [activeIndex, setActiveIndex] = useState(0); // toggle
  const [wishlist, setWishlist] = useState([]); //wishlist
   const [visible, setVisible] = useState([]);


  
   const { handleHeart, cart , updateQuantity  , calculateTotal} = useCart(); // get cart and handler from context

  const steps = [
  {
    step: "Step 1",
    label: "Order Details",
    icon: "📝",
  },
  {
    step: "Step 2",
    label: "Payment method",
    icon: "💳",
  },
  {
    step: "Step 3",
    label: "Finish!",
    icon: "📦",
  },
];

  const visibleCount = 4; 

  const handlePrev = () => {
  setStartIndex((prev) => Math.max(prev - visibleCount, 0));
};

const handleNext = () => {
  setStartIndex((prev) =>
    Math.min(prev + visibleCount, Math.max(products.length - visibleCount, 0))
  );
};

const filtered = visible.length > 0 ? visible : products;
const visibleProducts = filtered.slice(
  startIndex,
  Math.min(startIndex + visibleCount, filtered.length)
);



   const handleFilter = (brand) => {
    alert("ckcdj")
    const filtered = products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
    setVisible(filtered);
  };

useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get('/products');
        const responseTwo = await api.get('/categories') ;
        const responseThree = await api.get('/blog') ;
        const responseFour = await api.get('/value') ;
        const responseFive = await api.get('/faqdata')
        setProducts(response.data);
        setCategories(responseTwo.data) ;
        setBlog(responseThree.data) ;
        setValue(responseFour.data) ;
        setFaqData(responseFive.data) ;

        


      } catch (err) {
        console.log(err.message);
      }
    };
    

    fetchItems();
  }, []);


  
// useEffect(() => {
//   const fetchItems = async () => {
//     try {
//       const responseOne = await fetch(API_URL1);
//       const responseTwo = await fetch(API_URL2);
//       const responseThree = await fetch(API_URL3);
//       const responseFour = await fetch(API_URL4);
//       const responseFive = await fetch(API_URL5);

//       const listItems1 = await responseOne.json();
//       const listItems2 = await responseTwo.json();
//       const listItems3 = await responseThree.json();
//       const listItems4 = await responseFour.json();
//       const listItems5 = await responseFive.json();

//       setProducts(listItems1);
//       setCategories(listItems2);
//       setBlog(listItems3);
//       setValue(listItems4);
//       setFaqData(listItems5);
//     } catch (err) {
//       console.log("Error fetching data:", err.message);
//     }
//   };

//   fetchItems();
// }, []);



// useEffect(() => {
//   setProducts(sampleProducts);
//   setCategories(sampleCategories);
//   setBlog(sampleBlog);
//   setValue(sampleValue);
//   setFaqData(sampleFaq);
// }, []);


const handleLike = (product) => {
  alert("Like to add in Wishlist")
  setWishlist((prevWishlist) => {
    const exists = prevWishlist.find((item) => item.id === product.id);
    if (!exists) {
      return [...prevWishlist, product];
    }
    return prevWishlist; 
  });
};


const handleRemoveFromWishlist = () => {
     alert("Like to remove in Wishlist")
    setWishlist([]); // Clear all
  
};



  const toggle = (index) => {
    setActiveIndex(prev => (prev === index ? -1 : index));
  };


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home  handleFilter={handleFilter}
                                        handleNext={handleNext}
                                        handlePrev={handlePrev}
                                        handleHeart={handleHeart}
                                        handleLike={handleLike}
                                        visibleProducts={visibleProducts}
                                        visible={visible}
                                        />} />
        <Route path='/shop' element={<Shop  value={value} handleHeart={handleHeart} handleLike={handleLike}/>} />
        <Route path='/categories' element={<Categories  categories = {categories}
                                                        />} />
        <Route path='/blog' element={<Blog  blog={blog}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/faq" element={<Faq   toggle={toggle} faqdata={faqdata} activeIndex={activeIndex}/>} />
        <Route path="/cart" element={<Cart products={cart} 
                                      updateQuantity={updateQuantity} 
                                      calculateTotal={calculateTotal} 
                                      promoCode={promoCode} 
                                      setPromoCode={setPromoCode}
                                      discountApplied={discountApplied}
                                      setDiscountApplied={setDiscountApplied}/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/product" element={<Product products={products} handleHeart={handleHeart} />} />
        <Route path="/checkout" element={<Checkout steps={steps} products={cart}/>} />
        <Route path="/registation" element={<Registation/>} />  
        <Route path='/finish' element={<Finish steps={steps} products={cart}/>} />
        <Route path='/payment' element={<Payment steps={steps} products={cart}/>} />      
        <Route path="/wishlist" element={<Wishlist products={wishlist}  updateQuantity={updateQuantity}
              calculateTotal={calculateTotal}
              removeItem={handleRemoveFromWishlist}/>} />  
        <Route path="/blog2" element={<Blog2 />}      />
        <Route path='/shop2' element={<Shop2
        handleHeart={handleHeart}
        handleLike={handleLike} 
        productImages={[
    'https://beshop-demo.vercel.app/assets/img/product-img2.jpg',
    "https://beshop-demo.vercel.app/assets/img/product-img1.jpg",
    'https://beshop-demo.vercel.app/assets/img/product-img3.jpg',
    'https://beshop-demo.vercel.app/assets/img/product-img4.jpg',
    'https://beshop-demo.vercel.app/assets/img/product-img5.jpg',
  ]}
  colorOptions={['#fbe9e7', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a']}
/>} />

      </Routes>
    </div>
  )
}

export default App



// "homepage": "http://saisarankumar123.github.io/Beshop-react",
//  "predeploy": "npm run build",
    // "deploy": "gh-pages -d dist",






















