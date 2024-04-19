const Toast = ({ successMessage, errorMessage }: any) => {
  return (
    <div>
      <div className="bg-black-900 text-white fade black">
        success {successMessage} {errorMessage}
      </div>
    </div>
  );
};

export default Toast;
