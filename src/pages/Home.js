import React, { useEffect, useRef, useState } from "react";
import SphereWithPoints from "../components/SphereWithPoints";

const Home = () => {
  const mounted = useRef();
  const [viewMore, setViewMore] = useState(false);
  const view = useRef();
  useEffect(() => {
    if (!mounted.current) {
      const typing = document.querySelector(".typing");
      const words = ["GITS-DMCE"];

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
        } else {
          setTimeout(erase, 300);
        }
      };

      const erase = () => {
        const word = words[count];
        if (letterCount > 0) {
          typing.textContent = ">" + word.substring(0, letterCount - 1);
          letterCount--;
          setTimeout(erase, 300);
        } else {
          count++;
          setTimeout(type, 300);
        }
      };
      type();
      mounted.current = true;
    }

    return () => {};
  }, []);

  return (
    <>
      <div
        className="h-screen flex flex-col justify-center items-center relative "
        data-aos="zoom-in-up"
      >
        <SphereWithPoints />
        <div className="flex flex-col justify-center items-center">
          <span
            className="lg:text-[7rem] typing  font-larabieBold md:text-[5rem] text-[3rem]"

            // data-aos-duration="1500"
          >
            {">"}
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="text-white font-normal mx-10 font-sora text-center capitalize lg:text-2xl md:text-lg text-sm"
          >
            Welcome <span className="lowercase">to</span>{" "}
            <span className="uppercase text-colour-animation">
              Group of Information Technology Students <br />
            </span>{" "}
            We are glad <span className="lowercase">to</span> see You Here.
          </span>
          <button
            className="bg-transparent text-white font-bold py-4 md:w-1/4 w-5/6 border-gradient  border-gradient-purple border-[3px] absolute bottom-4 md:bottom-2"
            onClick={() => {
              setViewMore(!viewMore);
              view.current.scrollIntoView({ behavior: "smooth" });
            }}
            // data-aos="zoom-out"
          >
            Learn More
          </button>
        </div>
      </div>
      <section className="h-fit" ref={view}>
        <div
          className="relative md:mt-[4rem] mt-5 text-white text-center md:w-2/4 mx-auto md:space-y-12 space-y-8"
          style={{
            display: !viewMore ? "none" : "block",
          }}
        >
          <h1 className="font-sans lg:text-3xl text-2xl font-semibold px-2">
            Group of Information Technology (GITS) was established in 2005. It
            is an apex student body, student’s counsel that integrates the
            academic, co-curricular spares of student’s life.
          </h1>
          <h1 className="font-sans lg:text-3xl text-2xl px-2">
            GITS provides the out of class experience to the academic mission of
            the department and uplifting student’s intellectual, public service
            and leadership qualities.
          </h1>
          <h1 className="font-sans lg:text-3xl text-2xl px-2">
            The GITS committee includes the members of Third year students. GITS
            committee solves student’s problems. GITS committee promotes
            extra-curricular activities in the Information Technology
            Department.
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
