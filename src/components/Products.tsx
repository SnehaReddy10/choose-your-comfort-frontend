import { useGetProducts } from '@/lib/react-query/queriesAndMutations';
import ProductItem from './ProductItem';

const Products = () => {
  const { data, isLoading, error } = useGetProducts();

  if (error) {
    return <div>Please try again after some time</div>;
  }

  const products = data?.data.data;
  return (
    <div className="my-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          {products.map((x: any) => (
            <ProductItem key={x._id} product={x} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
