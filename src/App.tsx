import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Video } from 'lucide-react';
import About from './components/About';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Faq from './components/Faq';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Offers from './components/Offers';
import PaymentCancel from './components/PaymentCancel';
import Products from './components/Products';
import Signin from './components/Signin';
import Signup from './components/Signup';
import WishList from './components/WishList';

function App() {
  const { pathname } = useLocation();
  const signin: string = '/signin';
  const signup: string = '/signup';
  return (
    <div className="">
      {pathname !== signin && pathname !== signup ? <Navbar /> : <></>}
      <div className="mx-3 xl:mx-14">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/products" element={<Products />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/play-video" element={<Video />} />
          <Route path="/payment-cancel" element={<PaymentCancel />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
