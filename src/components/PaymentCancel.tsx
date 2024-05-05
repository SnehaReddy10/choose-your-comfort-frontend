const PaymentCancel = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-center mt-24">
      <img
        src="/assets/icons/exclamation.png"
        alt=""
        className="h-20 w-20 shadow-gray-400 shadow-md rounded-full"
      />
      <div className="font-mono">
        <div>Payment Cancelled.</div>
        <div>Please try again in sometime</div>
      </div>
    </div>
  );
};

export default PaymentCancel;
