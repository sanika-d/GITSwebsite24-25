import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ path }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-16 w-screen fixed top-0 md:flex flex-row z-50 justify-end items-center px-7 font-larabie text-xl text-[#00ffff] bg-[#1C1C1F] bg-opacity-80 hidden">
        <div
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="px-3 border-r-2 border-white cursor-pointer hover:bg-slate-800 py-1 flex flex-row justify-between items-center"
        >
          <h1>Home</h1>
          <span
            className={` ml-2 ${
              path === "/"
                ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                : "border-white border-[2px] bg-[#fff]"
            }  rounded-full `}
          ></span>
        </div>
        <div
          onClick={() => {
            navigate("/events");
            //scroll to top
            window.scrollTo(0, 0);
          }}
          className="px-3 border-r-2 border-white cursor-pointer hover:bg-slate-800 py-1 flex flex-row justify-between items-center"
        >
          <h1>Events</h1>
          <span
            className={` ml-2 ${
              path === "/events"
                ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                : "border-white border-[2px] bg-[#fff]"
            }  rounded-full `}
          ></span>
        </div>
        <div
          onClick={() => {
            navigate("/achievements");
            window.scrollTo(0, 0);
          }}
          className="px-3 border-r-2 border-white cursor-pointer hover:bg-slate-800 py-1 flex flex-row justify-between items-center"
        >
          <h1>Our Achievements</h1>
          <span
            className={` ml-2 ${
              path === "/achievements"
                ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                : "border-white border-[2px] bg-[#fff]"
            }  rounded-full `}
          ></span>
        </div>
        <div
          onClick={() => {
            navigate("/ourTeam");
            //scroll to top
            window.scrollTo(0, 0);
          }}
          className="px-3 border-r-2 border-white cursor-pointer hover:bg-slate-800 py-1 flex flex-row justify-between items-center"
        >
          <h1>Our Team</h1>
          <span
            className={` ml-2 ${
              path === "/ourTeam"
                ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                : "border-white border-[2px] bg-[#fff]"
            }  rounded-full `}
          ></span>
        </div>
        <div
          onClick={() => {
            navigate("/hackathon24");
            //scroll to top
            window.scrollTo(0, 0);
          }}
          className="px-3 border-r-2 border-white cursor-pointer hover:bg-slate-800 py-1 flex flex-row justify-between items-center"
        >
          <h1>Hackathon 2.0</h1>
          <span
            className={` ml-2 ${
              path === "/hackathon24"
                ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                : "border-white border-[2px] bg-[#fff]"
            }  rounded-full `}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
