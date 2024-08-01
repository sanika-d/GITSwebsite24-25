import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImgsViewer from "react-images-viewer";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import "../styles/Events.css";

const EventCard = ({
  ind,
  name,
  type,
  eventUrl,
  date,
  time,
  description,
  link,
  photo,
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className="my-5" data-aos="fade-up">
      <div
        className={`flex flex-col items-center ${
          ind % 2 ? "md:flex-row-reverse" : "md:flex-row"
        } md:justify-center`}
      >
        <div
          className={`justify-center h-min w-max mx-auto md:mx-0 ${
            ind % 2 === 0 ? "md:mr-10" : "md:ml-10"
          }`}
        >
          <div className="border-gray-400 p-2" style={{ borderWidth: 1 }}>
            <div className="border-gray-400 p-2" style={{ borderWidth: 1 }}>
              <div
                className="border-gray-400 p-2 cursor-pointer "
                style={{ borderWidth: 1 }}
                onClick={() => setOpen(true)}
              >
                <ImgsViewer
                  isOpen={open}
                  imgs={[{ src: photo }]}
                  style={{ width: 200, height: 200 }}
                  currImg={0}
                  onClose={() => setOpen(false)}
                  className="w-52 m-0 h-auto max-h-80 md:w-80 box-border p-2"
                />
                <div className="bg-black">
                  <img
                    className="w-52 object-contain m-0 h-auto max-h-80 md:w-80 box-border "
                    src={photo}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* info div */}
        <div className="flex justify-center items-center md:justify-start text-center sm:text-left">
          <div className="text-gray-100 flex flex-col justify-center items-center md:justify-start md:items-start">
            <p className="mt-4 text-5xl md:text-left text-center font-larabieBold text-accent">
              {name}
            </p>
            <br />
            <p
              style={{ fontFamily: "'Sora', sans-serif" }}
              className="md:text-left text-center text-gray-300"
            >
              {type}
            </p>
            <p
              className="text-2xl md:text-left text-center"
              style={{ fontFamily: "'Sora', sans-serif;", lineHeight: 1.2 }}
            >
              {date}
              <span className="hidden md:inline"> |</span>
              <br />
              {time}
            </p>
            <p className="leading-relaxed text-sm my-3 max-w-md md:text-left text-center">
              {description}
            </p>
            <div
              className="flex cursor-pointer justify-center md:justify-start md:text-left text-center w-fit h-fit"
              onClick={() => {
                navigate(eventUrl);
                window.scrollTo(0, 0);
              }}
            >
              <Arrow
                className={`h-14 w-14 flex ${
                  ind % 2 !== 0 ? "rotate-90" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
