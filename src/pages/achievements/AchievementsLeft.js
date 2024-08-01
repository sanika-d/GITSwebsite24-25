import React from "react";

const AchievementsLeft = ({ Event, Date, Describtion, Team, Photo }) => {
  return (
    <div
      className=" md:mr-auto mx-5 flex md:flex-row flex-col lg:w-2/3 w-fit border-2 border-white items-center justify-center text-white rounded-lg"
      data-aos="fade-right"
    >
      <div className="md:mr-auto flex md:flex-row flex-col md:w-fit h-fit w-full">
        <div
          className="md:w-1/2 md:h-auto w-full h-44 items-center flex justify-center object-center  bg-white  rounded-lg"
          style={{
            backgroundImage: `url(${Photo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="md:w-1/2 md:h-full w-full h-1/2 flex flex-col justify-center items-start p-3">
          <h1 className=" text-3xl font-bold font-sora">{Event}</h1>
          <h1 className=" text-xl font-bold font-sora">{Date}</h1>
          <p className="h-fit text-left py-5">{Describtion}</p>
          <h1 className=" text-xl font-bold font-sora">
            Team :<br />
            {Team}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AchievementsLeft;
