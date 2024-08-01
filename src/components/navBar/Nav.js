import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";

function NavBar({ inView }) {
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav
      id="navbar"
      style={{
        backgroundColor: "#1C1C1F",
        opacity: "0.8",
        backdropFilter: "blur(10px)",
        // backdropFilter: "blur(5px)",
        // WebkitBackdropFilter: "blur(5px)",
      }}
      className={
        `flex flex-wrap fixed bg-transparent
        items-center justify-between lg:pl-14
        lg:pr-10 px-0 sm:px-10
        py-3 ml-0 md:hidden
        ` +
        (true
          ? `fixed hrefp-0 z-50 w-full`
          : "relative xl:ml-14 nav-left-triangle")
      }
    >
      <div className="container px-4 transition-all duration-200 flex flex-wrap items-center justify-between">
        <div className="w-full relative transition-all duration-200 flex items-center justify-end lg:w-auhref lg:static lg:block lg:justify-start">
          <button
            className="text-gray-300 cursor-pointer text-xl transition-all duration-300 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {!navbarOpen ? (
              <GiHamburgerMenu color="white" className="mx-1" />
            ) : (
              <IoClose color="white" className="mx-1 animateCross" />
            )}
          </button>
          <div
            className={
              "flex-grow bg-[#1C1C1F] items-center top-14 md:hidden right-0 left-0" +
              (navbarOpen ? " fixed" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex glow text-xl text-[#00ffff] font-sora font-semibold bg-opacity-80 bg-outer pb-5 flex-col w-full items-center space-y-5 lg:flex-row list-none lg:ml-auto lg:justify-end">
              <li
                style={{
                  animationDelay: window.innerWidth < 1024 ? "100ms" : "2s",
                }}
              >
                <div
                  onClick={() => {
                    navigate("/");
                    window.scrollTo(0, 0);
                    setNavbarOpen(false);
                  }}
                  className={`px-3 cursor-pointer hover:bg-slate-800 py-1 flex flex-row-reverse justify-between items-center ${
                    inView === "/" ? "border-b-2 border-slate-300" : ""
                  }`}
                >
                  <h1>Home</h1>
                  <span
                    className={` mr-2 ${
                      inView === "/"
                        ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                        : "border-white border-[2px] bg-[#fff]"
                    }  rounded-full `}
                  ></span>
                </div>
              </li>
              <li
                style={{
                  animationDelay: window.innerWidth < 1024 ? "300ms" : "2.2s",
                }}
              >
                <div
                  onClick={() => {
                    navigate("/events");
                    //scroll to top
                    setNavbarOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`px-3 cursor-pointer hover:bg-slate-800 py-1 flex flex-row-reverse justify-between items-center ${
                    inView === "/events" ? "border-b-2 border-slate-300" : ""
                  }`}
                >
                  <h1>Events</h1>
                  <span
                    className={` mr-2 ${
                      inView === "/events"
                        ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                        : "border-white border-[2px] bg-[#fff]"
                    } rounded-full`}
                  ></span>
                </div>
              </li>
              <li
                style={{
                  animationDelay: window.innerWidth < 1024 ? "400ms" : "2.3s",
                }}
              >
                <div
                  onClick={() => {
                    navigate("/achievements");
                    window.scrollTo(0, 0);
                    setNavbarOpen(false);
                  }}
                  className={`px-3 cursor-pointer hover:bg-slate-800 py-1 flex flex-row-reverse justify-between items-center ${
                    inView === "/achievements"
                      ? "border-b-2 border-slate-300"
                      : ""
                  }`}
                >
                  <h1>Our Achievements</h1>
                  <span
                    className={` mr-2 ${
                      inView === "/achievements"
                        ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                        : "border-white border-[2px] bg-[#fff]"
                    }  rounded-full `}
                  ></span>
                </div>
              </li>
              <li
                style={{
                  animationDelay: window.innerWidth < 1024 ? "500ms" : "2.4s",
                }}
              >
                <div
                  onClick={() => {
                    navigate("/ourTeam");
                    //scroll to top
                    setNavbarOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`px-3 cursor-pointer hover:bg-slate-800 py-1 flex flex-row-reverse justify-between items-center ${
                    inView === "/ourTeam" ? "border-b-2 border-slate-300" : ""
                  }`}
                >
                  <h1>Our Team</h1>
                  <span
                    className={` mr-2 ${
                      inView === "/ourTeam"
                        ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                        : "border-white border-[2px] bg-[#fff]"
                    }  rounded-full `}
                  ></span>
                </div>
              </li>
              <li
                style={{
                  animationDelay: window.innerWidth < 1024 ? "600ms" : "2.5s",
                }}
              >
                <div
                  onClick={() => {
                    navigate("/hackathon24");
                    //scroll to top
                    setNavbarOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`px-3 cursor-pointer hover:bg-slate-800 py-1 flex flex-row-reverse justify-between items-center ${
                    inView === "/hackathon24" ? "border-b-2 border-slate-300" : ""
                  }`}
                >
                  <h1>Hackathon 2.0</h1>
                  <span
                    className={` mr-2 ${
                      inView === "/hackathon24"
                        ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                        : "border-white border-[2px] bg-[#fff]"
                    }  rounded-full `}
                  ></span>
                </div>
              </li>
              {/* <li
                style={{
                  animationDelay: window.innerWidth < 1024 ? "500ms" : "2.4s",
                }}
              >
                <div
                  onClick={() => {
                    navigate("/technitude");
                    //scroll to top
                    setNavbarOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`px-3 cursor-pointer hover:bg-slate-800 py-1 flex flex-row-reverse justify-between items-center ${
                    inView === "/Technitude" ? "border-b-2 border-slate-300" : ""
                  }`}
                >
                  <h1>Technitude</h1>
                  <span
                    className={` mr-2 ${
                      inView === "/Technitude"
                        ? "border-[#00ffff] border-[3px] bg-[#00ffff]"
                        : "border-white border-[2px] bg-[#fff]"
                    }  rounded-full `}
                  ></span>
                </div>
              </li> */}
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
