import React from "react";
import bannerImage from "../assets/banner.png";
import picon from "../assets/p-icon.svg";

const Banner = () => {
  return (
    <div className=" mt-24">
      <div className="hero w-10/12 mx-auto min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-4 ">
          <img
            src={bannerImage}
            className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <p className="inline-flex items-center gap-1 text-[#9514FA] bg-[#E1E7FF] rounded-2xl p-2 ">
              <img src={picon} alt="" />
              New: AI-Powered Tools Available
            </p>
            <h1 className="text-5xl font-bold">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-4">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. <br />
              Explore Products
            </p>
            <button className="btn bg-linear-to-r from-[#3628AB] to-[#9514FA] mr-2 rounded-full text-white">
              Explore Products
            </button>
            <button className="btn btn-outline btn-primary rounded-full text-[#9514FA]">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 md:flex-row md:divide-x divide-gray-300  text-center mt-5 text-2xl font-bold p-10 bg-linear-to-r from-[#3628AB] to-[#9514FA] text-white ">
        <div className="flex-1 py-2">
          <h1 className="text-5xl font-extrabold text-white">50K+</h1>
          <p className="text-white">Active Users</p>
        </div>
        <div className="flex-1 py-2">
          <h1 className="text-5xl font-extrabold text-white">200+</h1>
          <p className="text-white">Premium Tools</p>
        </div>
        <div className="flex-1 py-2">
          <h1 className="text-5xl font-extrabold text-white">4.9</h1>
          <p className="text-white">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
