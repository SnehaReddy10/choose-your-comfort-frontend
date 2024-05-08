import { faqs } from '@/seed-data/faqs';
import { useState } from 'react';

const Faq = () => {
  const booleanArray: boolean[] = [];
  const [accordianToggleList, setaccordianToggleList] = useState(booleanArray);

  function toggleAccordian(i: number) {
    let newList = [...accordianToggleList];
    newList[i] = !newList[i];
    setaccordianToggleList(newList);
  }

  return (
    <div className="">
      <div className="m-4 my-4 relative">
        {faqs?.map((x: any, i: number) => (
          <div
            onClick={() => toggleAccordian(i)}
            key={x.question}
            className="border-b-[1px] bg-gray-300 border-black-900 flex rounded-sm"
            style={{
              borderTop: `${
                accordianToggleList[i] && !accordianToggleList[i - 1]
                  ? '2px solid black'
                  : 'none'
              }`,
              borderLeft: `${
                accordianToggleList[i] ? '2px solid black' : 'none'
              }`,
              borderBottom: `${
                accordianToggleList[i] ? '2px solid black' : 'none'
              }`,
              borderRight: `${
                accordianToggleList[i] ? '2px solid black' : 'none'
              }`,
            }}
          >
            <div className="w-full">
              <div className="font-semibold p-1 text-sm border-b-[1px] w-full">
                {x.question}
              </div>
              <div
                className={`text-gray-400 text-[14px] p-1`}
                style={{
                  display: `${accordianToggleList[i] ? 'flex' : 'none'}`,
                }}
              >
                {x.answer}
              </div>
            </div>
            <div className="mx-3 absolute end-4">+</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
