import { Route, Routes, useLocation } from 'react-router-dom';
import CategorySection from './CategorySection';
import Feedback from './Feedback';
import Footer from './Footer';
import Frame from './Frame';
import Gallery from './Gallery';
import Hero from './Hero';
import Navbar from './Navbar';
import ProductSelection from './ProductSelection';
import Review from './Review';
import Subscribe from './Subscribe';
import Products from './Products';
import Offers from './Offers';
import Signin from './Signin';
import Signup from './Signup';
import Cart from './Cart';
import About from './About';
import Faq from './Faq';
import WishList from './WishList';
import Checkout from './Checkout';
import Video from './Video';

const categories1 = [
  {
    imageUrl: 'table',
    label: 'Dining Tables',
  },
  {
    imageUrl: 'chair-2',
    label: 'Chairs',
  },
  {
    imageUrl: 'office-desk',
    label: 'Office Desks',
  },
];

const categories2 = [
  {
    imageUrl: 'chair-3',
    label: 'Chairs',
  },
  {
    imageUrl: 'side-table-2',
    label: 'Night Stand',
  },
  {
    imageUrl: 'sofa-2',
    label: 'Living room',
  },
];

const productDescription1 = {
  feedback: [
    'Experience Unparalleled Quality',
    'Built to Last for Generations',
    'Loved by Customers Worldwide',
  ],
  description: `Experience the epitome of furniture quality. Our products are
  meticulously crafted with an unwavering commitment to excellence. From
  the finest materials to expert craftsmanship, each piece embodies
  durability, comfort, and timeless style. Elevate your space with the
  assurance of exceptional quality and lasting beauty`,
  title: 'Elevate Your Space with Uncompromising Quality',
  imgUrl: 'bed',
};

const productDescription2 = {
  feedback: ['Unmatched Comfort', 'Crafted for Quality', 'Stylish Elegance'],
  description: `Your surroundings have a profound impact on your mood. Discover how our high-quality furniture can transform your space into a haven of comfort and happiness. Create an environment that nurtures your well-being and elevates your spirits with the perfect blend of style and coziness.`,
  title: 'Elevate Your Mood with Comfortable Furniture',
  imgUrl: 'living-room',
};

const Home = () => {
  const { pathname } = useLocation();
  const signin: string = '/signin';
  const signup: string = '/signup';

  return (
    <div className="mx-1 xl:mx-14">
      {pathname !== signin && pathname !== signup ? <Navbar /> : <></>}
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/play-video" element={<Video />} />
      </Routes>
    </div>
  );
};

function Main() {
  return (
    <div className="mb-8">
      <Hero />
      <CategorySection categories={categories1} />
      <ProductSelection />
      <Frame productDescription={productDescription1} />
      <CategorySection categories={categories2} />
      <Frame productDescription={productDescription2} />
      <Review />
      <Gallery />
      <Feedback />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
