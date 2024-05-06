import { usePlaceOrder } from '@/lib/react-query/queriesAndMutations';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { mutateAsync: placeOrder } = usePlaceOrder();

  useEffect(() => {
    placeOrder();
  }, []);

  return (
    <div className="flex flex-col gap-2 justify-center items-center mt-24">
      <img
        src="/assets/icons/circle.png"
        alt="checkout"
        className="h-24 w-24 shadow-gray-400 shadow-md rounded-full"
      />
      <div className="text-green-400">Order placed successfully</div>
      <p className="mt-16 px-6 py-2 bg-orange-100 hover:bg-orange-400 text-white rounded-2xl text-center text-xs">
        <Link to="/products">Shop Now</Link>
      </p>
    </div>
  );
};

export default Checkout;
