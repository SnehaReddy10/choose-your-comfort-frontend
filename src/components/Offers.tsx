import { offers } from '@/seed-data/offers';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Offers = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((c) => (c === 0 ? offers.length - 1 : c - 1));
  const next = () => setCurr((c) => (c === offers.length - 1 ? 0 : c + 1));

  return (
    <div>
      <div className="max-w-3xl">
        <div className="overflow-hidden relative ">
          <div
            className="flex transition-transform ease-in duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {offers.map((x: any) => (
              <img
                src={`/assets/imgs/${x}.png`}
                alt={x}
                className="h-70 w-full p-4"
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="rounded-full p-1 shadow bg-white/80 text-gray-400 hover:bg-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="rounded-full p-1 shadow bg-white/80 text-gray-400 hover:bg-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-1">
              {offers.map((_, i) => (
                <p
                  className={`bg-white rounded-full h-1 w-1 transition-all ${
                    curr === i ? 'p-1' : 'bg-opacity-70'
                  }`}
                ></p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
