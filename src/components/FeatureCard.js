import React from "react";
import Card2 from "../assets/Card2.png";
import Card1 from "../assets/Card1.png";
const FeatureCard = () => {
  return (
    <div className="ml-2 mr-2">
      <div className="h-48 md:h-full mb-5 relative  ">
        <img
          src={Card1}
          alt="Book Cover"
          className="w-full rounded-lg h-full object-cover"
        />
      </div>
      <div className="h-48 md:h-full  relative ">
        <img
          src={Card2}
          alt="Book Cover"
          className="w-full h-full rounded-lg	 object-cover "
        />
      </div>
    </div>
  );
};

export default FeatureCard;
