import clsx from "clsx";
import React, { useState } from "react";
import "./alignment.scss";

const Alignment = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleButtonClick = (index) => (e) => {
    console.log(index);
    if (activeIndex !== index) setActiveIndex(index);
  };
  return (
    <div id="alignment">
      <button
        onClick={handleButtonClick(0)}
        className={clsx(
          "btn",
          "typ-btn",
          activeIndex === 0 ? "btn-info" : "btn-default"
        )}
      >
        Left
      </button>
      <button
        onClick={handleButtonClick(1)}
        className={clsx(
          "btn",
          "typ-btn",
          activeIndex === 1 ? "btn-info" : "btn-default"
        )}
      >
        Center
      </button>
      <button
        onClick={handleButtonClick(2)}
        className={clsx(
          "btn",
          "typ-btn",
          activeIndex === 2 ? "btn-info" : "btn-default"
        )}
      >
        Right
      </button>
    </div>
  );
};

export default Alignment;
