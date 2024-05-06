const NotFound = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-center mt-24">
      <img
        src="/assets/icons/error-404.png"
        alt=""
        className="h-20 w-20 shadow-gray-400 shadow-md rounded-full"
      />
      <div className="font-mono">
        <div>Page Not Found</div>
      </div>
    </div>
  );
};

export default NotFound;
