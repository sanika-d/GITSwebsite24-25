import React from "react";
import Image1 from "./assets/Education.png";
import Image2 from "./assets/Finance.jpg";
import Image3 from "./assets/Security.jpg";
import Image4 from "./assets/Ecom.jpg";

const Domain = () => {
  return (
    <>
      <div>
        <div>
          <h1
            className="font-larabieBold md:text-7xl text-4xl text-center text-[#00ffff] my-5 "
            // data-aos="zoom-in"
          >
            Projects
          </h1>
        </div>
        <div className="flex projects content-center justify-center">
          <div
            className={`justify-center  w-60 text-center h-min ml-4 w-max  mx-auto md:mx-5 `}
          >
            <div
              className="border-gray-400 p-2 cursor-pointer "
              style={{ borderWidth: 1 }}
              data-aos="fade-right"
              data-aos-delay="2500"
            >
              <h1 className="text-[#00ffff] font-larabieBold text-2xl">
                Web Development
              </h1>
            </div>
          </div>
          <div
            className={`justify-center w-60 text-center h-min ml-4 w-max mx-auto md:mx-5`}
          >
            <div
              className="border-gray-400 p-2 cursor-pointer "
              style={{ borderWidth: 1 }}
              data-aos="fade-right"
              data-aos-delay="2000"
            >
              <h1 className="text-[#00ffff] font-larabieBold text-2xl">
                Machine Learning
              </h1>
            </div>
          </div>
          <div
            className={`justify-center w-60 text-center h-min ml-4 w-max mx-auto md:mx-5`}
          >
            <div
              className="border-gray-400 p-2 cursor-pointer "
              style={{ borderWidth: 1 }}
              data-aos="fade-right"
              data-aos-delay="1500"
            >
              <h1 className="text-[#00ffff] font-larabieBold text-2xl">
                Cyber Security
              </h1>
            </div>
          </div>
          <div
            className={`justify-center w-60 text-center  h-min ml-4 w-max mx-auto md:mx-5`}
          >
            <div
              className="border-gray-400 p-2 cursor-pointer "
              style={{ borderWidth: 1 }}
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              <h1 className="text-[#00ffff] font-larabieBold text-2xl">
                Blockchain
              </h1>
            </div>
          </div>
          <div
            className={`justify-center w-60 text-center  h-min ml-4 w-max mx-auto md:mx-5`}
          >
            <div
              className="border-gray-400 p-2 cursor-pointer "
              style={{ borderWidth: 1 }}
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <h1 className="text-[#00ffff] font-larabieBold text-2xl">
                Other innovation
              </h1>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image1} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image2} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image3} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image4} alt="" />
          </div>
        </div> */}

        <section className="h-fit">
          <div className="relative md:mt-[4rem] mt-5 text-white justify-center text-aling-justify text-center md:w-2/4 mx-auto md:space-y-12 space-y-8">
            <h1 className="font-sans lg:text-3xl text-2xl px-8 justify-center text-align-justify px-8  text-justify">
              Participants are encouraged to present innovative projects and
              contribute improvements during the ongoing hackathon. Judging
              criteria will emphasize addressing actual needs and evaluating the
              extent to which projects satisfy those needs effectively.
            </h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Domain;
