import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { upcomingEvents } from "../assets/event-details";

const Register = () => {
  const { id } = useParams();
  const [formLink, setFormLink] = useState(null);
  // const formLink =
  //   "https://docs.google.com/forms/d/e/1FAIpQLSdqjDv9kJhWk7so96xlw9mJcSe6WL62KoEFrXc2YvCaLJ2HGQ/viewform?usp=sf_link";
  useEffect(() => {
    window.scrollTo(0, 0);
    const form = upcomingEvents[id].formLink;
    setFormLink(form);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {formLink === null || formLink === "" ? (
        <div className="mt-32">
          <h1 className="w-full text-center text-4xl text-white font-larabieBold">
            PLEASE WAIT...
          </h1>
        </div>
      ) : (
        <section className="mt-16 flex flex-col">
          <div
            className="ml-10 mt-10 hidden md:flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => {
              // const url = window.location.href;
              // const t = url.split("/");
              // t.pop();
              // const eventName = t.pop();
              navigate("/events/" + id);
              window.scrollTo(0, 0);
            }}
          >
            <BiArrowBack className="text-gray-200" />
            <h1 className="text-gray-200">{"Event Page"}</h1>
          </div>
          <h1 className="text-gray-200 text-2xl sm:text-xl md:text-4xl text-center  lg:text-5xl">
            {"Register"}
          </h1>
          <div className="w-full h-full flex justify-center items-center  relative">
            <div className=" z-10 absolute top-20 flex flex-col justify-center items-center h-fit w-fit">
              <img
                src="/GITS_LOGO.png"
                alt=""
                className="w-14 h-14 animate-spin"
              />
              <h1 className="text-white text-xl mt-2">LOADING...</h1>
            </div>

            <iframe
              src={formLink + "?embedded=true"}
              width="60%"
              height="1076"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Registration Form"
              className={`mx-auto md:w-[60%] w-[100%] mt-10  text-xl text-white z-20`}
            >
              Loading…
            </iframe>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
