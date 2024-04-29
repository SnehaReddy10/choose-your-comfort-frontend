import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategorySection = ({ categories }: any) => {
  const navigate = useNavigate();
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((c) => (c === 0 ? categories.length - 1 : c - 1));
  const next = () => setCurr((c) => (c === categories.length - 1 ? 0 : c + 1));

  return (
    <div className="mt-4">
      <div className="hidden sm:flex gap-3 sm:gap-1 justify-between">
        {categories.map((x: any) => (
          <Category key={x.label} categoryItem={x} navigate={navigate} />
        ))}
      </div>
      <div className="flex sm:hidden relative overflow-hidden">
        <div className="flex">
          {categories.map((x: any) => (
            <CategoryCarouselItem
              key={x.label}
              categoryItem={x}
              navigate={navigate}
              curr={curr}
            />
          ))}
        </div>
        <div className="absolute inset-0 top-0 left-0 flex items-center justify-between p-2">
          <button
            onClick={prev}
            className="bg-white/80 rounded-full text-gray-400 hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="bg-white/80 rounded-full text-gray-400 hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="absolute flex justify-center items-center bottom-2 gap-1 left-0 right-0">
          {categories.map((_: any, i: any) => (
            <div
              key={i}
              className={`bg-gray-400 rounded-full h-1 w-1 ${
                curr === i ? 'p-1' : 'bg-white/80'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

function CategoryCarouselItem({ categoryItem, navigate, curr }: any) {
  return (
    <div
      className="flex transition-transform ease-in duration-300"
      style={{ transform: `translateX(-${curr * 100}%)` }}
    >
      <div className="flex bg-gray-100 rounded-md px-3 w-screen lg:w-1/3 m-1 justify-evenly ">
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-xs font-semibold">{categoryItem.label}</p>
          <p
            onClick={() => navigate('/products')}
            className="flex bg-white rounded-xl text-[12px] font-semibold px-2 py-1 tracking-tighter"
          >
            See More
          </p>
        </div>
        <img
          src={`/assets/imgs/${categoryItem.imageUrl}.png`}
          alt={categoryItem.label}
          className="h-20 w-20"
        />
      </div>
    </div>
  );
}

function Category({ categoryItem, navigate }: any) {
  return (
    <div className="flex bg-gray-100 rounded-md px-3 w-1/3 m-1 justify-evenly ">
      <div className="flex flex-col gap-1 justify-center items-center">
        <p className="text-xs font-semibold">{categoryItem.label}</p>
        <p
          onClick={() => navigate('/products')}
          className="flex bg-white hover:text-orange-100 rounded-xl text-[12px] font-semibold px-2 py-1 tracking-tighter"
        >
          See More
        </p>
      </div>
      <img
        src={`/assets/imgs/${categoryItem.imageUrl}.png`}
        alt={categoryItem.label}
        className="h-20 w-20"
      />
    </div>
  );
}
export default CategorySection;
