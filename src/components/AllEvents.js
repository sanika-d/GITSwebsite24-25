import React from "react";
import EventCard from "./EventCard";
import { pastEvents, upcomingEvents } from "../assets/event-details";

const AllEvents = () => {
  // const pastEvents = {
  //   1: {
  //     name: "GITS Orientation & Tambola",
  //     type: "Introductory Session",
  //     date: "Tuesday, July 26, 2022",
  //     time: "4:00 PM",

  //     description: `In this, we will be discussing about our committee, events that were held under this committee and our upcoming events. You will be given an opportunity to work with us. "United we stand, divided we fall" and our motto will be giving justice to this saying but in a right way.`,
  //     link: "",
  //     photo: "/assets/events/1.jpeg",
  //   },
  //   2: {
  //     name: "Web Development Workshop",
  //     type: "Hands on Workshop",
  //     date: "Friday, July 29, 2022",
  //     time: "2:00 PM",

  //     description: `This workshop will be entirely hands-on and students will get to build a Portfolio using HTML, CSS, JavaScript😁
  //     So, get ready to learn new stuff and add it to your skill-set!
  //    `,
  //     link: "",
  //     photo: "/assets/events/2.jpeg",
  //   },
  //   3: {
  //     name: "Resume Building",
  //     type: "Informative Session",
  //     date: "Saturday, Aug 6, 2022",
  //     time: "10:00 AM",

  //     description: `This webinar will provide insightful and detailed explanations, as well as a step-by-step process of how to crack interviews and create an effective resume.
  //     This workshop will help you all for future opportunities.`,
  //     link: "",
  //     photo: "/assets/events/3.jpeg",
  //   },
  //   4: {
  //     name: "Internship Fair",
  //     type: "Internship Opportunities",
  //     date: "Tuesday, Aug 9, 2022",
  //     time: "09:00 AM Onwards",

  //     description: `"GITS-DMCE" is holding a session for students to provide them with an exposure to the corporate world. We, while collaborating with the companies, these companies will to conduct Mock Interviews along with Internship Opportunities for the brilliant minds.`,
  //     link: "",
  //     photo: "/assets/events/4.jpeg",
  //   },
  //   5: {
  //     name: "STUDY IN ABROAD 101",
  //     type: "Informative Session",
  //     date: "Tuesday, Sept 27, 2022",
  //     time: "11:00 AM to 12:30 PM",
  //     description: `This event is organised by GITS in association with- Vidyalankar. Studying abroad can be a life-changing experience for students. From enhancing your global network to experiencing a new culture, the benefits to your education and career are significant 🙌🏼`,
  //     link: "",
  //     photo: "/assets/events/5.jpeg",
  //   },
  //   6: {
  //     name: "Introduction to Web3.0",
  //     type: "Hands on Workshop",
  //     date: "Tuesday, Sept 27, 2022",
  //     time: "02:00 PM Onwards",
  //     description: `Join this workshop to gain the knowledge of Web 3.0 , blockchain , career opportunities in Web 3.0 and introduction to the community , followed by a hands-on session on building your first NFT,DAO and many more exciting concepts.`,
  //     link: "",
  //     photo: "/assets/events/6.jpeg",
  //   },
  //   7: {
  //     name: "Open Source & Github",
  //     type: "Hands on Workshop",
  //     date: "Thursday, Sept 29, 2022",
  //     time: "09:00 AM Onwards",
  //     description: `Come join #TECHGITS to learn about the various opportunities and learnings that the world of open source provides and initiate your journey towards becoming a great Open Source Contributor :)

  //     `,
  //     link: "",
  //     photo: "/assets/events/7.jpeg",
  //   },
  //   8: {
  //     name: "Vidyalankar Infinite",
  //     type: "Informative Session",
  //     date: "Monday, Oct 10, 2022",
  //     time: "11:00 AM to 12:30 PM",
  //     description: `GATE a national-level test is a gateway to Master's program or postgraduate engineering (ME/M. Tech) or analysis courses at top colleges in India such as IITs,NITs,etc.
  //     📍This event will be open for all TE and BE branches.
  //     `,
  //     link: "",
  //     photo: "/assets/events/8.jpeg",
  //   },
  // };
  // const upcomingEvents = {
  //   1: {
  //     name: "Cloud Computing",
  //     type: "Informative Session",
  //     date: "Friday, Jan 20, 2023",
  //     time: "2:00 PM to 4:00 PM",
  //     description: `This webinar will provide insightful and detailed explanations, as how you can start your journey to AWS in Step by Step approach.
  //     This workshop will be conducted by Mr. Ranga Karanam who is the founder of 28minutes and Mr. Rakesh Warade who is the Microsoft Employee.

  //     `,
  //     link: "https://forms.gle/dydyBiDgpyVeSWhk9",
  //     photo: "/assets/events/9.jpeg",
  //   },
  //   2: {
  //     name: "Republic Day",
  //     type: "Fun Session",
  //     date: "Friday, Jan 20, 2023",
  //     time: "2:00 PM to 4:00 PM",
  //     description: `On the occasion of Republic Day, we the GITS DMCE of 22-23 , is organizing an event for new emerging talents of India 🇮🇳
  //     📌In this event, we are giving you the opportunity to showcase whatever talents you have and make you stand out from the crowd.
  //     😎So, go out there and own the floor on the stage with your amazing talent😎

  //     `,
  //     link: "https://forms.gle/U8Km94SEFc1wMZPE7",
  //     photo: "/assets/events/10.jpeg",
  //   },
  // };
  return (
    <div
      className="flex flex-col justify-center items-center mt-20"
      data-aos="zoom-in"
    >
      {/* <Topology className="w-2/4 h-2/4 md:w-1/3 md:h-1/3 sm:w-1/2 sm:h-1/2" /> */}
      {/* <p className="text-center text-color-green self-center">OUR EVENTS</p> */}
      <h1
        className="self-center text-color-green event-title text-center font-larabieBold "
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        Our Events
      </h1>
      <div className="flex flex-col justify-center items-center space-y-5 my-5">
        <h1
          className="self-center text-color-green event-title text-center font-larabieBold "
          style={{
            fontSize: "50px",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Upcoming Events
        </h1>
        <div className="flex flex-col justify-center items-center px-20">
          {Object.keys(upcomingEvents).length > 0 ? (
            Object.keys(upcomingEvents)
              .reverse()
              .map((key, ind) => {
                const event = upcomingEvents[key];
                return (
                  <EventCard
                    key={ind}
                    ind={ind}
                    eventUrl={key}
                    name={event.name}
                    type={event.type}
                    date={event.date}
                    time={event.time}
                    description={event.description}
                    link={event.link}
                    photo={event.photo}
                  />
                );
              })
          ) : (
            <h1 className="text-lg text-center text-white">Stay Tuned...</h1>
          )}
        </div>
      </div>
      <hr className="flex w-[90%] border-2 border-white bg-white" />
      <div className="flex flex-col justify-center items-center space-y-5 mt-5">
        <h1
          className="self-center text-color-green event-title text-center font-larabieBold "
          style={{
            fontSize: "50px",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Past Events
        </h1>
        <div className="flex flex-col justify-center items-center px-20">
          {Object.keys(pastEvents)
            .reverse()
            .map((key, ind) => {
              const event = pastEvents[key];
              return (
                <EventCard
                  key={ind}
                  ind={ind}
                  eventUrl={key}
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
      </div>
    </div>
  );
};

export default AllEvents;
