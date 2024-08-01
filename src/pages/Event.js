import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pastEvents, upcomingEvents } from "../assets/event-details";
import Tag from "../components/Tag";
import TeamMember from "../components/teamMembers/TeamMembers";
import { obj1, obj2 } from "../components/teamMembers/Team";

import Slider from "react-slick";

const RegisterNowButton = ({ id }) => {
  const navigate = useNavigate();
  console.log(`events/${id}/register`);
  return (
    <>
      <div className="h-40 flex items-center justify-center">
        <button
          className={`bg-transparent text-white font-bold py-4 md:w-1/4 w-5/6 border-gradient border-gradient-purple border-[3px] hover:bg-slate-800 hover:bg-opacity-60 transition-all duration-300 ease-in-out`}
          onClick={() => {
            navigate(`/events/${id}/register`);
            window.scrollTo(0, 0);
          }}
        >
          Register Now
        </button>
      </div>
    </>
  );
};

const PostEventGallery = ({ listOfImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    pauseOnHover: false,
    slidesToShow:
      window.innerWidth < 450
        ? 1
        : Math.min(Object.keys(listOfImages).length, 2),
    slidesToScroll: 1,
    // vertical: window.innerWidth < 450,
    // verticalSwiping: window.innerWidth < 450,
    variableWidth: window.innerWidth > 450,
    // centerMode: window.innerWidth > 450,
  };
  return (
    <>
      <div className="mt-10">
        <h1 className="text-5xl text-center mb-10">Gallery</h1>
        <div className="md:h-[300px] h-[300px] object-center">
          <Slider {...settings}>
            {Object.keys(listOfImages).map((key, ind) => {
              return (
                <div className="md:h-[300px] h-[300px] px-3" key={ind}>
                  <img
                    src={listOfImages[key]}
                    alt="1"
                    className="h-[300px]  w-auto object-center"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

const Event = (props) => {
  const { id } = useParams();

  if (!pastEvents[id] && !upcomingEvents[id])
    return (
      <div className="min-h-screen text-gray-300 text-4xl flex justify-center items-center">
        <img
          src="/assets/null.png"
          alt="404"
          className="md:max-w-md max-w-xs"
        />
      </div>
    );

  let eventType = "upcoming";
  if (pastEvents[id]) eventType = "past";
  const event = pastEvents[id] || upcomingEvents[id];
  console.log(event, eventType);
  return (
    <div className="mt-16 text-gray-100">
      <div className="flex flex-col p-10 sm:p-14 lg:p-28 pb-4">
        <h1 className="text-2xl sm:text-xl md:text-4xl text-center md:text-left lg:text-5xl">
          {event.name}
        </h1>
        <div className="flex flex-col-reverse md:flex-row gap-10 mt-10">
          <div>
            <h3 className="font-bold text-lg underline">{event.type}</h3>
            <h3 className="mt-6 text-lg">{event.date}</h3>
            <p className="mt-4">{event.description}</p>
            <div className="flex flex-row gap-4 mt-6">
              {event.tags.map((tag, ind) => (
                <Tag key={ind}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="border-gray-400 p-0 w-fit h-fit"
              style={{ borderWidth: 1 }}
            >
              <img
                className="w-52  m-0 h-auto max-h-80 md:max-w-[720px] md:w-fit box-border p-2"
                src={event.photo}
                alt="..."
              />
            </div>
          </div>
        </div>
        {eventType === "upcoming" && <RegisterNowButton id={id} />}
        <hr className="border-gray-700 mt-2" />

        {event.speakers.length ? (
          <div className="mt-10">
            <h1 className="text-5xl text-center">Speakers</h1>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
              {event.speakers.map((speaker, ind) => (
                <TeamMember
                  key={ind}
                  name={obj2[speaker].Name}
                  role={obj2[speaker].Role}
                  insta={obj2[speaker].Instagram}
                  linkedin={obj2[speaker].Linkedin}
                  github={obj2[speaker].Github}
                  email={obj2[speaker].Email}
                  image={obj2[speaker].Image}
                />
              ))}
            </div>
            {eventType === "upcoming" && <RegisterNowButton id={id} />}
            <hr className="border-gray-700 mt-10" />
          </div>
        ) : null}

        {eventType === "past" && pastEvents[id].images.length > 0 && (
          <>
            <PostEventGallery listOfImages={pastEvents[id].images} />
            <hr className="border-gray-700 mt-5" />
          </>
        )}
      </div>
    </div>
  );
};

export default Event;
