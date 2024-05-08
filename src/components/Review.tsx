import { features } from '@/seed-data/product-features';

const Review = () => {
  return (
    <div className="mt-4 flex flex-col md:flex-row bg-black-900 text-white md:py-8 p-2 md:px-16 gap-6 md:gap-8">
      <div className="flex flex-col gap-3 justify-between md:w-1/2">
        <h3 className="font-semibold md:text-xl text-balance text-center lg:text-start">
          Our Dedication to Your Satisfaction
        </h3>
        <p className="text-[12px] text-center lg:text-start">
          , we take pride in our unwavering commitment to quality and customer
          satisfaction. With a track record of excellence, we provide you with
          the finest furniture and a service you can trust.
        </p>
        <div className="flex text-[12px] gap-10 justify-around lg:justify-start">
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-1">
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
            </div>
            <p>
              <span className="font-semibold">4.9</span> / 5 rating
            </p>
            <p className="font-semibold">Quality</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex gap-1">
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
              <img src="/assets/icons/star.png" alt="" className="w-2 h-2" />
            </div>
            <p>
              <span className="font-semibold">4.8</span> / 5 rating
            </p>
            <p className="font-semibold">Customer Satisfaction</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-1 lg:gap-3 justify-between">
        {features.map((x: any) => (
          <div key={x.id} className="flex justify-center lg:justify-start">
            <img src={x.imageUrl} alt={x.imageUrl} />
            <div>
              <h4 className="font-semibold text-[14px] md:text-lg">
                {x.title}
              </h4>
              <p className="text-[12px] hidden lg:flex">{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
