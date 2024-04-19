import { Link, useNavigate } from 'react-router-dom';

const searchItems = [
  {
    label: 'Comfort',
    advantage: 'Cozy Seating',
    imgUrl: 'meditation',
  },
  {
    label: 'Quality Assurance',
    advantage: 'Cozy Seating',
    imgUrl: 'like',
  },
  {
    label: 'Free Shipping',
    advantage: 'No-Cost Delivery',
    imgUrl: 'truck',
  },
  {
    label: 'Secure Checkout',
    advantage: 'Secure Payments',
    imgUrl: 'interface',
  },
];

const brands = ['Lowe’s', 'DeWalt', 'Home Depot', 'IKEA', 'Makita', '3M'];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row mt-6 gap-3 sm:gap-1 justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-xl lg:text-3xl font-bold text-balance">
              Perfect Harmony: Comfort & Style
            </h3>
            <p className="text-gray-200 text-[12px] md:text-xs text-balance">
              Explore furniture that harmoniously combines comfort and style to
              elevate your home
            </p>
          </div>
          <div className="mt-4 flex gap-1 md:gap-2 justify-evenly md:justify-start">
            <button
              onClick={() => navigate('/offers')}
              className="border-2 border-gray-400 hover:bg-orange-100 hover:border-orange-100 hover:text-white text-gray-400 rounded-xl text-[12px] p-1"
            >
              Explore Our Offers
            </button>
            <div className="flex items-center gap-2 text-gray-200 text-[12px]">
              <button className="bg-white shadow-lg shadow-gray-200 rounded-full p-1">
                <img
                  src="/assets/icons/play-button.png"
                  alt="play-button"
                  className="w-1 h-1"
                />
              </button>
              <p>
                <Link path="/play-vide">Watch Video</Link>
              </p>
            </div>
          </div>
          <div className="mt-3 relative w-[140%] top-2 hidden md:flex rounded-3xl bg-white shadow-gray-100 shadow-2xl text-gray-200 font-semibold text-[12px] justify-evenly py-2">
            <div className="flex flex-row gap-4">
              {searchItems.map((x) => (
                <div key={x.label}>
                  <p>{x.label}</p>
                  <div className="flex items-center gap-1">
                    <img
                      src={`/assets/icons/${x.imgUrl}.png`}
                      alt={x.imgUrl}
                      className="h-2 w-2"
                    />
                    <p>{x.advantage}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="border-2 border-gray-400  hover:bg-orange-100 hover:border-orange-100 hover:text-white text-gray-400 rounded-xl text-[12px] py-1 px-2">
              See More
            </button>
          </div>
          {/* <div>
            <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {searchItems.map((x) => (
                  <figure key={x.label} className="shrink-0 flex gap-2 w-[80%]">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={`/assets/icons/${x.imgUrl}.png`}
                        alt={`Photo by ${x.label}`}
                        className="aspect-[3/4] object-cover h-10 w-10"
                        width={300}
                        height={400}
                      />
                    </div>
                    <figcaption className="pt-2 text-[14px] text-muted-foreground">
                      Photo by{' '}
                      <span className="font-semibold text-foreground">
                        {x.label}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div> */}
        </div>
        <div className="">
          <img
            src="/assets/imgs/chair.jpg"
            alt="chair"
            className="w-full h-[80%] md:w-[24rem] md:h-[12rem] rounded-2xl"
          />
        </div>
      </div>
      <div className="flex gap-3 justify-between md:mx-44 text-gray-200 text-[12px] md:text-[14px] font-semibold mt-8">
        {brands.map((x) => (
          <p key={x}>{x}</p>
        ))}
      </div>
    </div>
  );
};

export default Hero;
