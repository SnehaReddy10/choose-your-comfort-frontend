import { convertToImg } from '@/common/helper';
import { useCheckout, useGetCart } from '@/lib/react-query/queriesAndMutations';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import Toast from './Toast';
import { Constants } from '@/common/constants';
import { useEffect } from 'react';

const Cart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(Constants.TOKEN);
    if (token === null) {
      console.log('Navigating to /signin');
      navigate('/signin');
    }
  }, [navigate]);
  const { data: cart, isLoading, isError, error } = useGetCart();
  const { mutateAsync: checkout, isPending: isPaymentPending } = useCheckout();

  async function handleCheckout() {
    await checkout();
  }

  const isCartEmpty = cart?.data?.cart?.products.length <= 0;

  if (isError) {
    console.log('error-message', error.message);
    return <Toast message={error.message} />;
  }

  if (isCartEmpty) {
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
          <h3>Your cart is empty</h3>
          <div className="px-6 py-[2px] bg-orange-100 hover:bg-orange-400 text-white rounded-2xl text-center text-xs">
            <Link to="/products">Shop Now</Link>
          </div>
        </div>
      </div>
    );
  }

  if (isPaymentPending) {
    return (
      <div className="h-64 flex justify-center items-center">
        <img
          src="/assets/icons/mobile-payment.png"
          alt="mobile-payment"
          className="h-24 w-24"
        />
      </div>
    );
  }
  return (
    <div className="my-5">
      {isLoading ? (
        <div className="flex h-[80vh] justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="sm:w-2/3">
            <div>
              {cart?.data?.cart?.products.map((x: any) => {
                const product = x.productId;
                const imageUrl = convertToImg(product.imgUrl);
                return (
                  <div
                    key={product._id}
                    className="flex flex-col sm:flex-row gap-4 m-1 p-1 border-b-[1px] border-gray-100 py-5"
                  >
                    <img
                      src={imageUrl}
                      alt={product.label}
                      className="w-full sm:w-44 h-32 border-x-4 border-t-4 border-gray-100"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-[16px]">
                        {product.name}
                      </p>
                      <p className="text-[12px] text-gray-400">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center gap-2">
                        <div className="dropdown">
                          <div className="flex border-[1px] border-gray-400 text-[12px] w-5 px-1 rounded-sm">
                            {x.quantity}{' '}
                            <img
                              src="/assets/icons/down-arrow.png"
                              alt="down-arrow"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-[14px] text-gray-200 line-through">
                            ${product.actualPrice}
                          </span>{' '}
                          <span className="text-[14px] ml-1 font-bold">
                            ${product.discountedPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sm:w-1/3">
            <div className="flex flex-col gap-1 border-[1px] border-gray-100 m-2 p-6 h-max">
              <div className="flex justify-center items-center gap-2">
                <div className="h-2 bg-gray-100 w-full rounded-full">
                  <div
                    className={`h-2 bg-orange-100 rounded-full`}
                    style={{
                      width: `${(
                        (50 / cart?.data?.cart.discountedPrice) *
                        100
                      ).toFixed(0)}`,
                    }}
                  ></div>
                </div>
                <p className="font-semibold text-[14px]">$50</p>
              </div>
              <div className="flex gap-1">
                {cart?.data?.cart?.discountedPrice >= 50 ? (
                  <div className="flex gap-2">
                    <img
                      src="/assets/icons/tick-full.png"
                      alt="tick"
                      className="h-3 w-3"
                    />
                    <p className="font-semibold text-orange-100 text-[12px]">
                      Your order is eligible for free delivery
                    </p>{' '}
                  </div>
                ) : (
                  <div className="flex flex-col gap-1 text-center">
                    <div className="flex gap-2">
                      <img
                        src="/assets/icons/tick-full.png"
                        alt="tick"
                        className="h-3 w-3"
                      />
                      <p className="font-semibold text-orange-100 text-[12px]">
                        Add{' '}
                        <span className="font-bold text-[14px]">
                          ${50 - cart?.data?.cart.discountedPrice}
                        </span>{' '}
                        worth products to get free delivery
                      </p>
                    </div>
                    <div className="text-[10px] uppercase ">
                      <p className="flex gap-1 justify-center items-center hover:text-orange-100 px-3 hover:bg-gray-100 rounded-3xl py-[1px]">
                        Add more from wishlist
                        <img
                          src="/assets/icons/heart.png"
                          alt="heart"
                          className="h-2 w-2"
                        />
                      </p>
                    </div>{' '}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-1 mt-5 text-[12px]">
                <p className="">Total Price:</p>
                <p className=" font-semibold ml-3">
                  ${cart?.data?.cart?.totalPrice}
                </p>
                <p className="">Discounted Price:</p>
                <p className="font-semibold ml-3">
                  ${cart?.data?.cart?.discountedPrice}
                </p>
                <p className="">Delivery Charge:</p>
                <p className="font-semibold ml-3">
                  ${cart?.data?.cart?.deliveryCharge}
                </p>
                <p className=" font-semibold mt-2">Payable:</p>
                <p className="font-semibold ml-3 mt-2">
                  ${cart?.data?.cart?.discountedPrice}
                </p>
              </div>
              <div className="mt-6">
                {/* <p className="px-6 py-[2px] bg-orange-100 hover:bg-orange-400 text-white rounded-2xl text-center text-xs">
            <Link to="/checkout">Proceed to Pay</Link>
          </p> */}
                <p
                  onClick={handleCheckout}
                  className="px-6 py-[2px] bg-orange-100 hover:bg-orange-400 text-white rounded-2xl text-center text-xs"
                >
                  <div>Place Order</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
