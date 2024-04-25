import { useGetProducts } from '@/lib/react-query/queriesAndMutations';
import ProductItem from './ProductItem';
import Loader from './Loader';
import Toast from './Toast';

const Products = () => {
  const { data, isLoading, error } = useGetProducts();

  if (error) {
    return <Toast>error?.response?.data?.error</Toast>;
  }

  const products = data?.data?.data;

  if (!products) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center">
            <img
              src="/assets/icons/shopping-cart.png"
              alt="checkout"
              className="h-24 w-24"
            />
          </div>
          <h3>Cannot retrive products at the moment. Trying harder...</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="my-4">
      {isLoading ? (
        <div className="flex h-[80vh] justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          {products?.map((x: any) => (
            <ProductItem key={x._id} product={x} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
