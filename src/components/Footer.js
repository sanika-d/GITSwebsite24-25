import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ path }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="md:w-2/4 w-3/4 font-baron uppercase mx-auto  my-10 flex justify-between  relative text-xs "
        data-aos="fade-up"
        data-aos-offset="0"
      >
        <div
          className="flex-col justify-center flex items-center relative cursor-pointer"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={path === "/" ? "/assets/ellipse.png" : "/assets/offstate.svg"}
            alt=""
            className={"w-5 h-5 z-[2]"}
          />
          <h1
            className={`${
              path === "/" ? "text-[#00ffff]" : "text-white"
            } absolute mt-10`}
          >
            Home
          </h1>
        </div>
        <div
          className="flex-col justify-center flex items-center relative cursor-pointer"
          onClick={() => {
            navigate("/events");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={
              path === "/events"
                ? "/assets/ellipse.png"
                : "/assets/offstate.svg"
            }
            alt=""
            className={"w-5 h-5 z-[2]"}
          />
          <h1
            className={`${
              path === "/events" ? "text-[#00ffff]" : "text-white"
            } absolute mt-10`}
          >
            Events
          </h1>
        </div>
        <div
          className="flex-col justify-center flex items-center relative cursor-pointer"
          onClick={() => {
            navigate("/achievements");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={
              path === "/achievements"
                ? "/assets/ellipse.png"
                : "/assets/offstate.svg"
            }
            alt=""
            className={"w-5 h-5 z-[2]"}
          />
          <h1
            className={`${
              path === "/achievements" ? "text-[#00ffff]" : "text-white"
            } absolute mt-10`}
          >
            Achievements
          </h1>
        </div>
        <div
          className="flex-col justify-center flex items-center relative cursor-pointer"
          onClick={() => {
            navigate("/ourTeam");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={
              path === "/ourTeam"
                ? "/assets/ellipse.png"
                : "/assets/offstate.svg"
            }
            alt=""
            className={"w-5 h-5 z-[2]"}
          />
          <h1
            className={`${
              path === "/ourTeam" ? "text-[#00ffff]" : "text-white"
            } absolute mt-10`}
          >
            OurTeam
          </h1>
        </div>
        <div
          className="flex-col justify-center flex items-center relative cursor-pointer"
          onClick={() => {
            navigate("/hackathon24");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={
              path === "/hackathon24"
                ? "/assets/ellipse.png"
                : "/assets/offstate.svg"
            }
            alt=""
            className={"w-5 h-5 z-[2]"}
          />
          <h1
            className={`${
              path === "/hackathon24" ? "text-[#00ffff]" : "text-white"
            } absolute mt-10`}
          >
            Hackathon24
          </h1>
        </div>
        {/* <div
          className="flex-col justify-center flex items-center relative cursor-pointer"
          onClick={() => {
            navigate("/Technitude");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={
              path === "/Technitude"
                ? "/assets/ellipse.png"
                : "/assets/offstate.svg"
            }
            alt=""
            className={"w-5 h-5 z-[2]"}
          />
          <h1
            className={`${
              path === "/Technitude" ? "text-[#00ffff]" : "text-white"
            } absolute mt-10`}
          >
            Technitude
          </h1>
        </div> */}
        <div className="w-full h-0 border-[0.5px] border-white bg-white absolute top-[50%] mx-auto -z-[1]"></div>
      </div>
      <a href="https://github.com/dmce-gits" target="_blank" rel="noreferrer">
        <h1 className="text-[#00FFFF] font-larabie text-center text-xs px-10 my-10">
          COPYRIGHT @ GITS-DMCE.2023-24
          <br /> MADE WITH 💕 BY TECH-GITS TEAM
        </h1>
      </a>
    </>
  );
};

export default Footer;
