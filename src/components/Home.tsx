import CategorySection from './CategorySection';
import Feedback from './Feedback';
import Footer from './Footer';
import Frame from './Frame';
import Gallery from './Gallery';
import Hero from './Hero';
import ProductSelection from './ProductSelection';
import Review from './Review';
import Subscribe from './Subscribe';
import { categories1 } from '../seed-data/get-categories1';
import { categories2 } from '@/seed-data/categories2';
import { productsDescription } from '@/seed-data/product-descrption';

const Home = () => {
  return (
    <div className="mb-8">
      <Hero />
      <CategorySection categories={categories1} />
      <ProductSelection />
      <Frame productDescription={productsDescription[0]} />
      <CategorySection categories={categories2} />
      <Frame productDescription={productsDescription[1]} />
      <Review />
      <Gallery />
      <Feedback />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
