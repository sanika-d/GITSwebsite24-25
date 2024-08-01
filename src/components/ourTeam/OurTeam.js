import React from "react";
import { useEffect, useState } from "react";
import New from "./New";

const OurTeam = () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  // const obj = {
  //   Yash: {
  //     height: "0px",
  //     front: "/Yash/front.jpeg",
  //     top: "/Yash/top.jpeg",
  //     buttom: "/Yash/buttom.jpeg",
  //     left: "/Yash/left.jpeg",
  //     right: "/Yash/right.jpeg",
  //     topright: "/Yash/topright.jpeg",
  //     topleft: "/Yash/topleft.jpeg",
  //     buttomright: "/Yash/buttomright.jpeg",
  //     buttomleft: "/Yash/buttomleft.jpeg",
  //   },
  //   Raj: {
  //     height: "-180px",
  //     front: "/Raj/front.jpeg",
  //     top: "/Raj/top.jpeg",
  //     buttom: "/Raj/buttom.jpeg",
  //     left: "/Raj/left.jpeg",
  //     right: "/Raj/right.jpeg",
  //     topright: "/Raj/topright.jpeg",
  //     topleft: "/Raj/topleft.jpeg",
  //     buttomright: "/Raj/buttomright.jpeg",
  //     buttomleft: "/Raj/buttomleft.jpeg",
  //   },
  // };

  /////////////////////////////// image dimension = 1280 x 159   ////////////////////////////////////////
  const obj1 = {
    Dhruv: "/assets/allmembers23/ShubhamGS.jpg",
    Deep: "/assets/allmembers/Deep.jpg",
    Nirmiti: "/assets/allmembers/Nandini.jpg",
    Manas: "/assets/allmembers/Manas.jpg",
    AthangB: "/assets/allmembers/AthangB.jpg",
    Snehal: "/assets/allmembers/Snehal.jpg",
    Ishika: "/assets/allmembers/Ishika.jpg",
    Maulya: "/assets/allmembers/Maulya.jpg",
    Saumya: "/assets/allmembers/Saumya.jpg",
    Shruti: "/assets/allmembers/Shruti.jpg",
    Rohan: "/assets/allmembers/Rohan.jpg",
    Aarushi: "/assets/allmembers/Aarushi.jpg",
    Prajna: "/assets/allmembers/Prajna.jpg",
    Aniket: "/assets/allmembers/Aniket.jpg",
    Atharvi: "/assets/allmembers/Atharvi.jpg",
    Prem: "/assets/allmembers/Prem.jpg",
    Tanmay: "/assets/allmembers/Tanmay.jpg",
    Amshitha: "/assets/allmembers/Amshitha.jpg",
    Vrushali: "/assets/allmembers/Vrushali.jpg",
    Mohan: "/assets/allmembers/Mohan.jpg",
    Pratham: "/assets/allmembers/Pratham.jpg",
    Harshal: "/assets/allmembers/Harshal.jpg",
    Sagar: "/assets/allmembers/Sagar.jpg",
    Shubham: "/assets/allmembers/Shubham.jpg",
    AthangP: "/assets/allmembers/AthangP.jpg",
    "You?": "/assets/allmembers/You_.jpg",
  };

  const obj2 = {
    Hrushabh: "/assets/allmembers/Raj.jpg",
    Yash: "/assets/allmembers/Yash.jpg",
    Mrunmayee: "/assets/allmembers/Mrunmayee.jpg",
    Jay: "/assets/allmembers/Jay.jpg",
    // Akshata: "/assets/allmembers/Akshata.jpg",
    Akshay: "/assets/allmembers/Akshay.jpg",
    Saikiran: "/assets/allmembers/Saikiran.jpg",
    Tanushree: "/assets/allmembers/Tanushree.jpg",
    "You?": "/assets/allmembers/You_.jpg",
  };

  useEffect(() => {
    console.log("useEffect");
    const body = document.getElementsByTagName("body")[0];
    body.style.height = "100%";
    body.onmousemove = (e) => {
      setMouseCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };
  }, []);
  return (
    <section className="mt-20 flex justify-center items-center flex-col">
      <h1
        className="team-title text-center font-larabieBold"
        data-aos="zoom-in"
      >
        Our Team
      </h1>
      <div
        className="flex flex-wrap justify-center items-center h-fit my-auto mx-auto "
        style={{
          width: window.innerWidth > 450 ? "65%" : "100%",
          cursor: "crosshair",
        }}
        data-aos="fadeup"
      >
        {mouseCoords &&
          Object.keys(obj1).map((key, ind) => {
            return (
              <New
                key={key}
                name={obj1[key]}
                mouseCoords={mouseCoords}
                Id={key}
                animationDelay={(ind + 1) * 0.1}
              />
            );
          })}
      </div>
      <h1
        className="tech-team-title text-center font-larabie mt-16 "
        data-aos="zoom-in"
      >
        TECH-GITS
      </h1>
      <div
        className="flex flex-wrap justify-center items-center h-fit md:my-auto mx-auto  my-1"
        style={{ width: "65%", cursor: "crosshair" }}
        data-aos="fade-up"
      >
        {mouseCoords &&
          Object.keys(obj2).map((key, ind) => {
            return (
              <New
                key={key}
                name={obj2[key]}
                mouseCoords={mouseCoords}
                Id={key}
                animationDelay={(ind + 1) * 0.3}
              />
            );
          })}
      </div>
    </section>
  );
};

export default OurTeam;
