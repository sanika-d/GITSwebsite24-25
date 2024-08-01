import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiArchiveRegister } from "react-icons/gi";
import { FcAcceptDatabase } from "react-icons/fc";
import { FaUserShield } from "react-icons/fa";
import { PiShootingStarThin } from "react-icons/pi";
import { MdRateReview } from "react-icons/md";

import { GiPodiumWinner } from "react-icons/gi";
import "../index.css";
const TimeLine = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  // useEffect(() => {
  //   const currentDate = new Date("2024-03-16T23:59:00");
  //   const fifteenthMarch = new Date("2024-03-15T23:59:00");
  //   const seventeenthMarch = new Date("2024-03-17T23:59:00");

  //   if (currentDate <= fifteenthMarch) {
  //     setComponentIndex(0); // Render InitialComponent
  //   } else if (currentDate <= seventeenthMarch) {
  //     setComponentIndex(1); // Render SecondComponent
  //   } else {
  //     setComponentIndex(2); // Render ThirdComponent
  //   }
  // }, []);
  useEffect(() => {
    const updateComponentIndex = () => {
      const currentDate = new Date();
      const fifteenthMarch = new Date("2024-03-14T23:59:00");
      const seventeenthMarch = new Date("2024-03-18T15:00:00");

      if (currentDate <= fifteenthMarch) {
        setComponentIndex(0); // Render InitialComponent
      } else if (currentDate <= seventeenthMarch) {
        setComponentIndex(1); // Render SecondComponent
      } else {
        setComponentIndex(2); // Render ThirdComponent
      }
    };

    // Update component index initially
    updateComponentIndex();

    // Setup interval to update component index every 10 seconds
    const intervalId = setInterval(updateComponentIndex, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const onButtonClick = () => {
    const pdfUrl = "COCHack'24.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CodeOfConduct.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const onPPTButtonClick = () => {
    const pptUrl = "PPTTemplate.pptx"; // URL of your PowerPoint file
    const link = document.createElement("a");
    link.href = pptUrl;
    link.download = "Your_Teamname.pptx"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div>
        <h1 className="font-larabieBold md:text-7xl mt-10 text-4xl text-center text-[#00ffff] my-5 ">
          Timeline
        </h1>
      </div>
      <VerticalTimeline>
        {/* <VerticalTimelineElement
          class="vertical-timeline-element-content bounce-in"
          className="vertical-timeline-element--work"
          // date="15 Oct to 19 Feb"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiArchiveRegister />}
        >
          <div className="bor">
            <h3 className="vertical-timeline-element-title">
              Registration Starts for Hackathon 2.0
            </h3>

           
            <p>Date : 10th March, 2024 to 15th March, 2024</p>
            <br />
            <button className="border p-2 rounded">
              Download PPT Template
            </button>
          </div>
        </VerticalTimelineElement> */}
        {componentIndex === 0 ? (
          <VerticalTimelineElement
            class="vertical-timeline-element-content bounce-in"
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GiArchiveRegister />}
          >
            <div className="bor">
              <h3 className="vertical-timeline-element-title">
                Registration Starts for Hackathon 2.0
              </h3>
              <p>Date : 10th March, 2024 to 15th March, 2024 Midnight</p>
              <br />
              <button className="border p-2 rounded" onClick={onPPTButtonClick}>
                Download PPT Template
              </button>
            </div>
          </VerticalTimelineElement>
        ) : componentIndex === 1 ? (
          <VerticalTimelineElement
            class="vertical-timeline-element-content bounce-in"
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GiArchiveRegister />}
          >
            <div className="bor">
              <h3 className="vertical-timeline-element-title">
                Registration dates for Hackathon 2.0 has extended till 18th
                March, 2024.
              </h3>
              <p>Date : 10th March, 2024 to 18th March, 2024 3PM Afternoon</p>
              <br />
              <button className="border p-2 rounded" onClick={onPPTButtonClick}>
                Download PPT Template
              </button>
            </div>
          </VerticalTimelineElement>
        ) : (
          <VerticalTimelineElement
            class="vertical-timeline-element-content bounce-in"
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<GiArchiveRegister />}
          >
            <div className="bor">
              <h3 className="vertical-timeline-element-title">
                Registration closed for Hackathon 2.0.
              </h3>
              <p>Date : 10th March, 2024 to 18th March, 2024</p>
              <br />
            </div>
          </VerticalTimelineElement>
        )}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="16 Feb to 28 Feb"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FcAcceptDatabase />}
        >
          <div className="bor">
            <h3 className="vertical-timeline-element-title">
              Shortlisted team receive mails
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">GITS.io</h4> */}
            <p>Date : 18th March, 2024 by 7PM Evening</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="02 March to 03 Mar"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaUserShield />}
        >
          <div className="bor">
            <h3 className="vertical-timeline-element-title">
              RSVP and Rs.100/Member Payment
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">DMCE CAMPUS</h4> */}
            <p>Date : 18th March, 2024</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--winner"
          // date="03 March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#ffffff" }}
          icon={<PiShootingStarThin />}
        >
          <div className="bor">
            <h3 className="vertical-timeline-element-title">
              Hackathon 2.0 Starts
            </h3>
            <h3 className="vertical-timeline-element-title">
              Day 1 Hacking & Review 1
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">DMCE CAMPUS</h4> */}
            <p>Date : 20th March, 2024</p>
            <p>Time : 9AM to 6PM</p>
            <br />
            <button className="border p-2 rounded" onClick={onButtonClick}>
              Code of Conduct
            </button>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--winner"
          // date="03 March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdRateReview />}
        >
          <div className="bor">
            <h3 className="vertical-timeline-element-title">Hackathon 2.0</h3>
            <h3 className="vertical-timeline-element-title">
              Day 2 Hacking & Review 2
            </h3>
            {/* <h4 className="vertical-timeline-element-subtitle">DMCE CAMPUS</h4> */}
            <p>Date : 21st March, 2024</p>
            <p>Time : 9AM to 5PM</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--winner"
          // date="03 March"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GiPodiumWinner />}
        >
          <div className="bor">
            <h3 className="vertical-timeline-element-title">
              Results Announced
            </h3>

            {/* <h4 className="vertical-timeline-element-subtitle">DMCE CAMPUS</h4> */}
            <p>Date : 21st March, 2024</p>
            <p>Time : 5PM onwards</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <br />
      <br />
    </>
  );
};

export default TimeLine;
