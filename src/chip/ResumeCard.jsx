import React from "react";
import { resumeData } from "../data/data";
const ResumeCard = () => {
  return (
    <>
      {resumeData.map((data) => {
        return (
          <div
            className="left flex-1 flex items-center justify-center"
            key={data.id}
          >
            <fieldset
              data-aos="zoom-in"
              className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
            >
              <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
                {data.type}
              </legend>
              <div className=" relative">
                {/* design */}
                <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                  <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                  <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                  <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                </div>
                {/* design */}
                <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                    {data.title}
                  </h1>
                  <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                    {data.institute}
                  </span>
                  <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                    {data.timePeriod}
                  </span>
                </div>
              </div>
            </fieldset>
          </div>
        );
      })}
    </>
  );
};

export default ResumeCard;
