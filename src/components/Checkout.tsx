import { usePlaceOrder } from '@/lib/react-query/queriesAndMutations';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { mutateAsync: placeOrder } = usePlaceOrder();

  useEffect(() => {
    placeOrder();
  }, []);

  return (
    <div className="flex flex-col gap-2 justify-center items-center my-10">
      <img
        src="/assets/icons/checkout.png"
        alt="checkout"
        className="h-24 w-24"
      />
      <div className="text-orange-100">Order placed successfully</div>
      <p className="px-6 py-[2px] bg-orange-100 hover:bg-orange-400 text-white rounded-2xl text-center text-xs">
        <Link to="/products">Shop Now</Link>
      </p>
    </div>
  );
};

export default Checkout;
