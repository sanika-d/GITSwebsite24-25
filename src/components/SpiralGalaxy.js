import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";

const SpiralGalaxy = () => {
  return (
    <div
      className=" h-screen w-screen flex justify-center items-center -z-10"
      style={{ overflow: "hidden" }}
      data-aos="zoom-in"
    >
      <div
        style={{ position: "relative", animationDuration: "8s", zIndex: -1 }}
        className="flex justify-center items-center flex-col  animate-spin rounded-full"
      >
        {Array.from(Array(30).keys()).map((key) => (
          <Star
            key={key}
            alt="star"
            style={{
              transform: `rotate(${-key * 3}deg) scale(${
                (key * 0.03 + (key + 60) / 10) * 0.15
              })`,
              position: "absolute",
              opacity: 1 - (key + 1) / 30,
              color: "#888",
            }}
          />
        ))}
      </div>
      <h1
        className="text-[#00ffff] absolute flex-col flex items-center uppercase font-larabieBold   lg:text-6xl text-[2.5rem] text-center"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        Want to collaborate <br /> with us?
      </h1>
      <a
        className="bg-transparent text-white font-bold py-4 md:w-2/4 w-5/6 border-gradient  border-gradient-green border-[3px] absolute bottom-4 md:bottom-2 capitalize text-center"
        href="mailto:gits@dmce.ac.in"
        data-aos="fade-up"
      >
        Email Us Here
      </a>
    </div>
  );
};

export default SpiralGalaxy;
