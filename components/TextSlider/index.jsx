import React from "react";

const TextSlider = ({ textList }) => {
  const textView = textList?.map((item, index) => (
    <h3
      className={`${
        item.classList && item.classList
      } text-8xl capitalize font-bold`}
      key={index}
    >
      {item.label ? item.label : ""}
    </h3>
  ));

  return (
    <>
      <div className="bg-gray-400 inline-block h-[110px] overflow-hidden">
        <div className="wrap animate-verticalSlide">{textView}</div>
      </div>
    </>
  );
};

export default TextSlider;
