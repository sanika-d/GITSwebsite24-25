import React from "react";
import EventCard from "./EventCard";
import EventsGraphic from "./EventsGraphic";
import { useNavigate } from "react-router-dom";
import { pastEvents, upcomingEvents } from "../assets/event-details";

const EventsContainer = () => {
  const navigate = useNavigate();
  const allEvents = { ...pastEvents, ...upcomingEvents };
  return (
    <div
      className="flex flex-col justify-center items-center"
      data-aos="zoom-in"
    >
      <div className="flex justify-center p-3 min-h-screen">
        {/* <Topology className="w-2/4 h-2/4 md:w-1/3 md:h-1/3 sm:w-1/2 sm:h-1/2" /> */}
        <EventsGraphic />
        {/* <p className="text-center text-color-green self-center">OUR EVENTS</p> */}
        <h1
          className="self-center text-color-green event-title text-center font-larabieBold "
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Our Events
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center px-20">
        {Object.keys(allEvents)
          .reverse()
          .slice(0, 3)
          .map((key, ind) => {
            const event = allEvents[key];
            return (
              <EventCard
                key={ind}
                ind={ind}
                eventUrl={"events/" + key}
                name={event.name}
                type={event.type}
                date={event.date}
                time={event.time}
                description={event.description}
                link={event.link}
                photo={event.photo}
              />
            );
          })}
      </div>
      <button
        className="bg-transparent text-white font-bold py-4 md:w-1/4 w-5/6 border-gradient  border-gradient-purple border-[3px]  "
        onClick={() => {
          navigate("/events");
          window.scrollTo(0, 0);
        }}
        data-aos="zoom-in"
      >
        Know More
      </button>
    </div>
  );
};

export default EventsContainer;
