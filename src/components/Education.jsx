import React from "react";
import { assets } from "../assets/assets";

const Education = () => {
  return (
    <div className="p-4 md:p-10" id="education">
      <h2 className="text-5xl font-bold text-center">Education</h2>
      <div className="flex flex-col lg:flex-row gap-10 mt-10 items-stretch justify-center">
        {/* First Education Box */}
        <div className="border p-5 items-center flex flex-col sm:flex-row w-full lg:w-[600px] rounded-lg shadow-md">
          <img
            src={assets.toce}
            alt="Oxford College logo"
            className="w-[150px] sm:w-[200px] object-contain p-4"
          />
          <div className="ml-0 sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
            <h1 className="text-2xl font-semibold">
              Bachelor of Engineering (B.E.)
            </h1>
            <h2>Information Science and Engineering</h2>
            <h2>The Oxford College of Engineering</h2>
            <p>2021-2025</p>
            <p>Bengaluru, India</p>
            <p>CGPA: 9.21</p>
          </div>
        </div>

        {/* Second Education Box */}
        <div className="border p-5 items-center flex flex-col sm:flex-row w-full lg:w-[600px] rounded-lg shadow-md">
          <img
            src={assets.rvpu}
            alt="RV PU College logo"
            className="w-[150px] sm:w-[200px] object-contain p-4"
          />
          <div className="ml-0 sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
            <h1 className="text-2xl font-semibold">
              12th Grade (Pre-University)
            </h1>
            <h2>PCMB</h2>
            <h2>RV PU College</h2>
            <p>2019-2021</p>
            <p>Bengaluru, India</p>
            <p>Percentage: 91%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
