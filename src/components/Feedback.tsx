import { feedbackFromCustomers } from '@/seed-data/customers-feedback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Feedback = () => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((c) => (c === 0 ? feedbackFromCustomers.length - 1 : c - 1));

  const next = () =>
    setCurr((c) => (c === feedbackFromCustomers.length - 1 ? 0 : c + 1));

  return (
    <div className="mt-4 pt-6 flex flex-col gap-2 text-center justify-center bg-gray-300">
      <p className="ml-auto mr-auto text-orange-200 bg-gray-100 rounded-xl w-fit text-[14px] font-bold tracking-tighter py-1 px-2">
        Testimonial Section
      </p>
      <h3 className="font-bold text-xl">What Our Customer Say</h3>
      <p className="text-gray-400 text-[12px] text-balance">
        Discover the Stories and Experiences of Our Delighted Customers
      </p>
      <div>
        <div className="relative overflow-hidden">
          <div className="flex">
            {feedbackFromCustomers.map((x: any) => (
              <FeedBackCard key={x.id} feedback={x} curr={curr} />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-between p-1">
            <button
              onClick={prev}
              className="bg-gray-100 rounded-full text-gray-400 hover:bg-white shadow"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="bg-gray-100 rounded-full text-gray-400 hover:bg-white shadow"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="absolute bottom-4 left-0 right-0">
            <div className=" flex items-center justify-center gap-1">
              {feedbackFromCustomers.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-1 bg-black-900 rounded-full ${
                    curr === i ? 'p-1' : 'bg-opacity-70'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function FeedBackCard({ feedback, curr }: any) {
  return (
    <div
      className="flex transition-transform ease-in duration-300 w-full"
      style={{ transform: `translateX(-${curr * 100}%)` }}
    >
      <div className="bg-white m-2 p-2 w-screen ">
        <img
          src="/assets/imgs/inverted-commas.png"
          alt=""
          className="f-7 w-7 my-2"
        />
        <p className="text-[12px] text-start">{feedback.review}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={`/assets/imgs/${feedback.profileUrl}.png`}
              alt="profile"
              className="h-7 w-7 rounded-full m-2"
            />
            <p className="text-[12px] font-semibold">{feedback.name}</p>
          </div>
          <div className="flex gap-1">
            <img src="/assets/icons/star.png" alt="" className="w-3 h-3" />
            <img src="/assets/icons/star.png" alt="" className="w-3 h-3" />
            <img src="/assets/icons/star.png" alt="" className="w-3 h-3" />
            <img src="/assets/icons/star.png" alt="" className="w-3 h-3" />
            <img src="/assets/icons/star.png" alt="" className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
