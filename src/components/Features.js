import React, { useState, useEffect } from "react";
import {
  FaTruck,
  FaHeadphonesAlt,
  FaCheckCircle,
  FaGift
} from "react-icons/fa";

const MobileTwoByTwoComponent = () => {
  return (
    <div className="flex flex-col ml-2 mr-2 mb-4 mt-3 ">
      <h1 className="text-center text-xl font-bold  mb-2 ">Our Services</h1>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col  justify-center items-center w-1/5">
          <FaTruck size={28} className="text-black text-3xl" />
          <h2 className=" text-gray-700 font-bold text-sm line-clamp-2">
            Free
          </h2>
          <h2 className=" text-gray-700 font-bold text-sm line-clamp-2">
            Delivery
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-1/5">
          <FaHeadphonesAlt size={28} className="text-black text-3xl" />
          <h2 className=" text-gray-700 font-bold text-sm line-clamp-2">
            Online
          </h2>
          <h2 className=" text-gray-700 font-bold text-sm line-clamp-2">
            Order
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center w-1/5">
          <FaCheckCircle size={28} className="text-black text-3xl" />
          <h2 className=" text-gray-700 font-bold text-sm line-clamp-2">
            Quality
          </h2>
          <h2 className=" text-gray-700 font-bold text-sm line-clamp-2">
            Assurance
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center w-1/5">
          <FaGift size={28} className="text-black text-3xl" />
          <h2 className=" text-gray-700 font-bold text-sm line-clamp-2">
            Exciting
          </h2>
          <h2 className=" text-gray-700 font-bold text-sm line-clamp-2">
            Offers
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MobileTwoByTwoComponent;
