import React, { useState, useEffect, useRef } from "react";
import SphereWithPoints from "../components/SphereWithPoints";
import { useNavigate } from "react-router-dom";
import Geometry from "./Geometry";
import EventsGraphic from "../components/EventsGraphic";

const Landing = () => {
  const mounted = useRef();
  const [viewMore, setViewMore] = useState(false);

  const view = useRef();
  const nav = useNavigate();
  useEffect(() => {
    if (!mounted.current) {
      const typing = document.querySelector(".typing");
      const words = ["Hackathon 2.0"];

      let count = 0;
      let letterCount = 0;

      const type = () => {
        if (count === words.length) {
          count = 0;
        }
        const word = words[count];
        if (letterCount < word.length) {
          typing.textContent += word[letterCount];
          letterCount++;
          setTimeout(type, 300);
        }
      };

      type();
      mounted.current = true;
    }

    return () => {};
  }, []);

  const [isAfterDate, setIsAfterDate] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date("2024-03-17");

    if (currentDate > targetDate) {
      setIsAfterDate(true);
    }
  }, []);
  return (
    <>
      <div
        className="h-screen flex flex-col justify-center items-center relative "
        data-aos="zoom-in-up"
      >
        {/* <SphereWithPoints/> */}

        <div className="flex flex-col justify-center  items-center">
          <span
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-white font-normal mx-10  font-sora text-center capitalize lg:text-2xl md:text-lg text-sm"
          >
            <span className="uppercase text-colour-animation">
              Group of Information Technology Students <br />
            </span>{" "}
            <span className="uppercase text-colour-animation">
              #TechGITS <br />
            </span>{" "}
          </span>
          <div className="flex flex-row">
            <p
              className="lg:text-[4rem] typing  font-larabieBold md:text-[2rem] text-[2rem]"

              // data-aos-duration="1500"
            >
              {"<"}
            </p>
            <p
              className="lg:text-[4rem] typing  font-larabieBold md:text-[2rem] text-[2rem]"

              // data-aos-duration="1500"
            >
              {"/>"}
            </p>
          </div>
          <span className="uppercase text-l text-center text-colour-animation">
            "From Ideas to Impact: Empowering Communities through Technology"
          </span>{" "}
        </div>

        {isAfterDate ? (
          <><button
          className="bg-transparent text-white font-bold py-4 md:w-1/4 w-5/6 border-gradient  border-gradient-purple border-[3px] absolute bottom-4 md:bottom-2"
          onClick={() => {
            nav("/hackReg");
          }}
          // data-aos="zoom-out"
        >
          Shortlisted Teams
        </button></>
        ) : (
          <button
            className="bg-transparent text-white font-bold py-4 md:w-1/4 w-5/6 border-gradient  border-gradient-purple border-[3px] absolute bottom-4 md:bottom-2"
            onClick={() => {
              nav("/hackReg");
            }}
            // data-aos="zoom-out"
          >
            Register Now
          </button>
        )}
      </div>
    </>
  );
};

export default Landing;
