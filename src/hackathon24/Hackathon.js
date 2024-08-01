import React from "react";
import Navbar from "../components/navBar/Navbar";
import Socials from "../components/Socials";
import Landing from "./Landing";
import AboutH from "./AboutH";
import TimeLine from "./TimeLine";
import Accordion from "./FAQ/HFAQ";
import Connect from "./Connect";
import Domain from "./Domain";
import Prize from "./Prize";
import CodeC from "./CodeC";
import FloatingButtons from "../components/FloatingButton";


const Hackathon = () => {
  return (
    <>
    <span className="block md:hidden" data-aos="fade-left">
          <FloatingButtons />
        </span>
      <Navbar />
      <div
        className="justify-center hidden md:flex items-center z-10 fixed bottom-0 left-5"
        data-aos="fade-right"
      >
        <Socials />
      </div>
      {/* <Viewer /> */}
      <Landing />

      <AboutH />
      {/* <CodeC/> */}
      <Domain />
      <Prize />
      <TimeLine />
      <div className="flex justify-center ">
        <h1
          className="font-larabieBold md:text-7xl text-4xl text-center text-[#00ffff] my-5 "
          data-aos="zoom-in"
        >
          FAQ
        </h1>
      </div>
      <Accordion />
      <Connect />
    </>
  );
};

export default Hackathon;
