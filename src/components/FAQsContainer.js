import React from "react";
import FAQsGraphic from "./FAQGraphic";
import FAQs from "./FAQs/FAQs";

const FAQsContainer = () => {
  return (
    <div
      className="flex px-8 flex-col justify-center w-full items-center"
      data-aos="zoom-in"
    >
      <div className="flex justify-center p-3 min-h-screen">
        <FAQsGraphic />
        <h1
          className="self-center text-color-green event-title text-center font-larabieBold uppercase"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          might have a <br />
          question?
        </h1>
      </div>
      <FAQs />
    </div>
  );
};

export default FAQsContainer;
