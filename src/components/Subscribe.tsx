const Subscribe = () => {
  return (
    <div className="pt-4 text-xs">
      <img src="/assets/imgs/furniture.png" alt="" />
      <div className="bg-brown-200 py-4 flex flex-col md:flex-row gap-3 justify-around items-center md:px-18">
        <p className="text-white text-balance text-center">
          Subscribe to get attractive offers on our products
        </p>
        <div className="bg-white p-1 flex justify-between gap-2">
          <input
            type="text"
            placeholder="E.g. youremail@gmail.com"
            className="mx-1"
          />
          <button className="bg-orange-400 p-1 text-white">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
