import { useGetProducts } from '@/lib/react-query/queriesAndMutations';
import ProductItem from './ProductItem';

const productCategories = ['Chair', 'Table', 'Bed', 'Closet'];

const ProductSelection = () => {
  const { data, isLoading, error } = useGetProducts();
  if (error) {
    return <div>Please try again after some time</div>;
  }
  const products = data?.data.data;

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="text-red-500 text-[12px] bg-gray-100 px-2 py-1 font-semibold rounded-md w-max">
            Check Our Product
          </div>
          <div className="font-bold text-xs md:text-base">
            Crafted with excellent material
          </div>
        </div>
        <div className="hidden md:flex items-center text-[12px]">
          <p className="border-2 px-2 py-1 border-gray-200 rounded-2xl hover:bg-gray-100 hover:border-gray-100">
            Best Seller
          </p>
          {productCategories.map((x) => (
            <p
              key={x}
              className="px-2 py-1 text-gray-200 hover:bg-gray-100 rounded-xl mx-1"
            >
              {x}
            </p>
          ))}
        </div>
        <div className="flex md:hidden">
          <img
            src="/assets/icons/filter.png"
            alt="filter"
            className="h-3 w-3"
          />
        </div>
      </div>
      {isLoading ? (
        <div>LLoading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-3 mt-5">
          {products.map((x: any) => (
            <ProductItem key={x._id} product={x} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSelection;
