import React, { useState } from "react";
import notebooks from "../data/book";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swipeable } from "react-swipeable";

const NotebookSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextNotebook = () => {
    setCurrentIndex((currentIndex + 1) % notebooks.length);
  };

  const showPreviousNotebook = () => {
    setCurrentIndex((currentIndex - 1 + notebooks.length) % notebooks.length);
  };
  const handleSwipe = (direction) => {
    if (direction === "left") {
      showNextNotebook();
    } else if (direction === "right") {
      showPreviousNotebook();
    }
  };

  return (
    <div>
      {/* <Swipeable onSwiped={handleSwipe}> */}
      <div className="w-80 h-96 bg-gray-100 p-4 overflow-hidden">
        <div className="text-xl  font-bold text-black mb-4 mt-0 text-center">
          Exciting Category Range
        </div>
        <div className="relative h-80">
          <img
            src={notebooks[currentIndex].image}
            alt={notebooks[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="">
            <h2 className="text-2xl font-bold text-black text-center">
              {notebooks[currentIndex].title}
            </h2>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={showPreviousNotebook}
            className="bg-black text-white px-4 py-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full">
            Swipe
          </button>
          <button
            onClick={showNextNotebook}
            className="bg-black text-white px-4 py-2 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* </Swipeable> */}
    </div>
  );
};

export default NotebookSlider;
