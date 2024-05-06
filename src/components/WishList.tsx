import { useGetWishlist } from '@/lib/react-query/queriesAndMutations';
import WishlistItem from './WishlistItem';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { Constants } from '@/common/constants';
import { useEffect } from 'react';

const WishList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(Constants.TOKEN);
    if (token === null) {
      console.log('Navigating to /signin');
      navigate('/signin');
    }
  }, [navigate]);

  const { data: wishlist, isLoading, error } = useGetWishlist();

  if (error) {
    return (
      <div className="flex flex-col gap-8 justify-center items-center text-center mt-24">
        <img
          src="/assets/icons/error.png"
          alt=""
          className="h-20 w-20 shadow-gray-400 shadow-md rounded-full"
        />
        <div className="font-mono">
          <div>Server Down.</div>
          <div>Please try again in sometime</div>
        </div>
      </div>
    );
  }

  const isWishlistEmpty = wishlist?.data?.wishList?.products.length <= 0;

  if (isWishlistEmpty) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex justify-center">
            <img
              src="/assets/icons/shopping-cart.png"
              alt="checkout"
              className="h-24 w-24"
            />
          </div>
          <h3>Your wishlist is empty</h3>
          <div className="px-6 py-[2px] bg-orange-100 hover:bg-orange-400 text-white rounded-2xl text-center text-xs">
            <Link to="/products">Add products Now</Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {isLoading ? (
        <div className="flex h-[80vh] justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col gap-5 my-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {wishlist?.data?.wishList?.products?.map((x: any) => (
              <WishlistItem product={x} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;
