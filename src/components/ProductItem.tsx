import { convertToImg } from '@/common/helper';
import { useNavigate } from 'react-router-dom';
import {
  useAddProductToCart,
  useAddProductToWishlist,
  useGetImage,
  useRemoveProductFromWishlist,
} from '@/lib/react-query/queriesAndMutations';

const ProductItem = ({ product }: any) => {
  const navigate = useNavigate();
  let { mutateAsync: addProductToUserCart } = useAddProductToCart();
  let { mutateAsync: addProductToWishlist } = useAddProductToWishlist();
  let { mutateAsync: removeProductFromWishlist } =
    useRemoveProductFromWishlist();

  if (product.imgUrl) {
    const { data: getImage } = useGetImage(product.imgUrl);
    const buffer = getImage?.data?.media;
    if (buffer) {
      product.imageUrl = convertToImg(buffer);
    }
  }

  const handleWishlist = () => {
    console.log(
      'productExistsInUsersWishlist',
      product.productExistsInUsersWishlist
    );
    if (product.productExistsInUsersWishlist) {
      removeProductFromWishlist(product._id);
    } else {
      addProductToWishlist(product._id);
    }
    product.productExistsInUsersWishlist =
      !product.productExistsInUsersWishlist;
  };

  return (
    <div>
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.label}
          className="w-full h-40 border-x-4 border-t-4 border-gray-100"
        />

        <div onClick={handleWishlist}>
          {product.productExistsInUsersWishlist ? (
            <img
              src="/assets/icons/heart.png"
              alt="heart"
              className="absolute inset-y-0 h-4 w-4 m-2 end-2"
            />
          ) : (
            <img
              src="/assets/icons/love.png"
              alt="love"
              className="absolute inset-y-0 h-4 w-4 m-2 end-2"
            />
          )}
        </div>

        <p className="text-gray-400 font-semibold text-[16px] mt-2">
          {product.name}
        </p>
        <div className="flex justify-between">
          <div>
            <span className="text-[14px] text-gray-200">
              ${product.actualPrice}
            </span>{' '}
            <span className="text-[14px] ml-1 font-bold">
              ${product.discountedPrice}
            </span>
          </div>
          <div className="flex h-4 bg-gray-100 rounded-full gap-1 p-1 items-center hover:bg-gray-300 active:bg-gray-200">
            {product.productExistsInUsersCart ? (
              <div className="text-[12px]" onClick={() => navigate('/cart')}>
                Go to cart
              </div>
            ) : (
              <div
                onClick={() =>
                  addProductToCart(product, product._id, addProductToUserCart)
                }
              >
                <img
                  src="/assets/icons/add-to-cart.png"
                  alt="shopping-cart"
                  className="h-2 w-2"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

async function addProductToCart(
  product: any,
  productId: string,
  addProductToUserCart: any
) {
  product.productExistsInUsersCart = true;
  await addProductToUserCart(productId);
}

export default ProductItem;
