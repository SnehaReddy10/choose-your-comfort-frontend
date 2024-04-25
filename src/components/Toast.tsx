const Toast = ({ message, className, isSuccess = false }: any) => {
  return (
    <div>
      {message && (
        <div
          className={`animate-fade-out absolute text-black text-xs ${
            isSuccess ? 'bg-green-300' : 'bg-red-500'
          } text-white py-2 px-2 md:px-4 rounded-sm ${className}`}
        >
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Toast;
