import { useEffect } from "react";
import StarsBackground from "../StarsBackground";
import "./Splash.css";

const Splash = () => {
  useEffect(() => {
    const timer1 = setTimeout(() => {
      document.querySelector("#git-ss-logo").style.animation =
        "zoom-in 2s ease-in-out forwards";
    }, 4000);

    const timer = setTimeout(() => {
      document.querySelector("#quote-container").style.display = "none";
      document.body.style.overflowY = "auto";
      document.querySelector("html").style.overflowY = "auto";
    }, 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div
      id="quote-container"
      style={{
        fontFamily: "'Yuji Syuku', serif",
        zIndex: 999,
      }}
      className="top-0 left-0 fixed w-full h-full z-50 flex items-center text-sm sm:text-base md:text-lg justify-center flex-col"
    >
      {/* <img
        src={"/dmce-logo.png"}
        alt="logo"
        className="h-auto mb-12"
        style={{ width: "80vmin" }}
      /> */}
      {/* <StarsBackground /> */}
      <div alt="logo" id="git-ss-logo" className="h-auto coin copper" />
    </div>
  );
};

export default Splash;
