import { useNavigate } from 'react-router-dom';

const Frame = ({ productDescription }: any) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 md:gap-10 mt-6 md:p-10">
      <div className="w-1/2">
        <h3 className="text-xs md:text-2xl font-bold text-balance">
          {productDescription.title}
        </h3>
        <p className="text-[10px] mt-3">{productDescription.desciption}</p>
        <div className="mt-3">
          {productDescription.feedback.map((x: any) => (
            <div key={x} className="flex gap-1.5 items-center p-0.5">
              <img
                src="/assets/icons/tick-full.png"
                alt="tick-full"
                className="h-3 w-3"
              />
              <p className="font-semibold text-[12px]">{x}</p>
            </div>
          ))}
        </div>
        <p
          onClick={() => navigate('/products')}
          className="mt-3 bg-black-900 hover:bg-black-100 text-white w-max rounded-xl py-1 px-3 text-[14px]"
        >
          Shop Now
        </p>
      </div>
      <img
        src={`/assets/imgs/${productDescription.imgUrl}.png`}
        alt={productDescription.imgUrl}
        className="w-1/2 h-44"
      />
    </div>
  );
};

export default Frame;
