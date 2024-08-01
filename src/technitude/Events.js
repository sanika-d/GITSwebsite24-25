import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navBar/Navbar";
import "./Events.css";
import cardsList from "./Cards_list";
import Cards from "./Cards";
import Contact from "./Contact";

const Events = () => {
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      const typing = document.querySelector(".typing");
      const words = ["TECHNITUDE' 23"];

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
        // else {
        //   setTimeout(erase, 300);
        // }
      };

      //   const erase = () => {
      //     const word = words[count];
      //     if (letterCount > 0) {
      //       typing.textContent = ">" + word.substring(0, letterCount - 1);
      //       letterCount--;
      //       setTimeout(erase, 300);
      //     } else {
      //       count++;
      //       setTimeout(type, 300);
      //     }
      //   };
      type();
      mounted.current = true;
    }

    return () => {};
  }, []);
  return (
    <>
      <Navbar />

      <div
        className="flex flex-col justify-center items-center"
        style={{ marginTop: "60px" }}
      >
        <span
          className="lg:text-[7rem] typing  font-larabieBold md:text-[5rem] text-[3rem]"

          // data-aos-duration="1500"
        ></span>
      </div>
      <center>
        <span
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="text-white font-normal mx-auto font-sora text-center capitalize lg:text-2xl md:text-lg text-sm"
        >
          Presented <span className="lowercase">by</span>{" "}
          <span className="uppercase text-colour-animation">
            Group of Information Technology Students <br /><br/>
          </span>{" "}
          Come dive with us into a World full of Events – where{" "}
          <span className="uppercase">
            Techy games, Esports, Indoor - Outdoor Games, Dance and Music
          </span>{" "}
          converge for ultimate excitement! .
        </span>
      </center>

      <h1
        className="self-center text-color-green event-title text-center font-larabieBold mt-10"
        data-aos="zoom-in"
        data-aos-delay="2000"
        style={{ marginBottom: "0" }}
      >
        Our Events
      </h1>
      <div
        className="flex flex-col justify-center items-center mt-0"
        data-aos="zoom-out-down"
      >
        <div className="appEvents" style={{ marginTop: "0px" }}>
          {cardsList.map((eventsList) => (
            <Cards
              key={eventsList.id}
              image={eventsList.image}
              name={eventsList.name}
              details={eventsList.details}
              register={eventsList.register}
            />
          ))}
        </div>
        <br />
      </div>
      <Contact />
    </>
  );
};

export default Events;
