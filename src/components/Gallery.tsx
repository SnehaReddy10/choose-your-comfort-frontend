import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-6 flex flex-col gap-2 text-center justify-center">
      <p
        onClick={() => navigate('/products')}
        className="ml-auto mr-auto text-orange-200 bg-gray-100 rounded-xl w-fit text-[14px] font-semibold py-1 px-2"
      >
        Check Our Collection
      </p>
      <h3 className="font-bold text-xl">Our Furniture Gallery</h3>
      <p className="text-gray-400 text-[12px]">
        Explore Our Gallery of Inspiring Designs
      </p>
      <div className="grid grid-cols-6 md:grid-cols-8 gap-2 mt-4 md:px-6 md:mx-10">
        <img
          className="col-span-2 h-36 w-full"
          src={`/assets/imgs/study-area.png`}
          alt="study-area"
        />
        <img
          className="col-span-2 h-36 w-full hidden md:flex"
          src={`/assets/imgs/sofa-3.png`}
          alt="sofa-3"
        />
        <img
          className="col-span-4 h-36 w-full"
          src={`/assets/imgs/bed-room.png`}
          alt="bed-room"
        />
        <img
          className="col-span-3 h-36 w-full"
          src={`/assets/imgs/living-area.png`}
          alt="living-area"
        />
        <img
          className="col-span-3 h-36 w-full"
          src={`/assets/imgs/chairs.png`}
          alt="chairs"
        />
        <img
          className="col-span-2 h-36 w-full hidden md:flex"
          src={`/assets/imgs/chair-4.png`}
          alt="chair"
        />
      </div>
    </div>
  );
};

export default Gallery;
