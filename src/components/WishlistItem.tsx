import { convertToImg } from '@/common/helper';
import {
  useAddProductToCart,
  useGetImage,
} from '@/lib/react-query/queriesAndMutations';

const WishlistItem = ({ product }: any) => {
  let { mutateAsync: addProductToUserCart } = useAddProductToCart();

  if (product.imgUrl) {
    const { data: getImage } = useGetImage(product.imgUrl);
    const buffer = getImage?.data?.media;
    if (buffer) {
      product.imageUrl = convertToImg(buffer);
    }
  }
  return (
    <div className="w-full">
      <img
        src={product.imageUrl}
        alt={product.label}
        className="w-full h-40 border-x-4 border-t-4 border-gray-100"
      />
      <p className="text-gray-400 font-semibold text-[16px]">{product.label}</p>
      <div className="flex justify-between mt-2">
        <div>
          <span className="text-[14px] text-gray-200">
            ${product.actualPrice}
          </span>{' '}
          <span className="text-[14px] ml-1 font-bold">
            ${product.discountedPrice}
          </span>
        </div>
        <div className="mt-2 flex h-4 gap-1 items-center">
          <div
            className="text-[12px] bg-gray-100 rounded-full p-1 active:bg-gray-200 hover:bg-gray-300"
            onClick={() =>
              addProductToCart(product, product._id, addProductToUserCart)
            }
          >
            Add to cart
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

export default WishlistItem;
