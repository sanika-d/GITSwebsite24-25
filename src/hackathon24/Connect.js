import React from "react";

const Connect = () => {
  
  return (
    <>
      <div className="my-5 mt-10" data-aos="fade-up">
        <div className="flex justify-center ">
        <h1
            className="font-larabieBold md:text-7xl text-4xl text-center text-[#00ffff] my-5 "
            data-aos="zoom-in"
          >
            Reach us
          </h1>
        </div>
        <div
          className={`flex reach flex-row items-center space-x-10 md:justify-center`}
        >
          {/* info div */}

          <div className="flex justify-center items-center md:justify-start text-center sm:text-left">
            <div className="text-gray-100 flex flex-col justify-center items-center md:justify-start md:items-start">
              <p className="mt-4 text-5xl md:text-left text-center font-larabieBold text-accent">
                Group of IT Students, DMCE
              </p>
              <br />
              <p
                style={{ fontFamily: "'Sora', sans-serif" }}
                className="md:text-left text-xl text-center text-gray-300"
              >
                Hackathon 2.0
              </p>
              <p
                className="text-2xl md:text-left text-center"
                style={{ fontFamily: "'Sora', sans-serif;", lineHeight: 1.2 }}
              >
                20 & 21 March
                <span className="hidden md:inline"> |</span>
                <br />
                Contact
              </p>
              <p className="leading-relaxed text-sm my-3 text-xl max-w-md md:text-left text-center">
                Shubham Pawar -8108061629
                <br />
                Sahil Pisal - 7039107763
                <br />
                Hrushabh Patade - 8369051061
                <br />
              </p>
              {/* <div
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
              </div> */}
            </div>
          </div>
          <div className={`justify-center h-min ml-4 w-max mx-auto md:mx-0`}>
            <div className="border-gray-400 p-2" style={{ borderWidth: 1 }}>
              <div className="border-gray-400 p-2" style={{ borderWidth: 1 }}>
                <div
                  className="border-gray-400 p-2 cursor-pointer "
                  style={{ borderWidth: 1 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7967111727576!2d72.99298087520746!3d19.160373882061627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf4daf8967d9%3A0xdd90bed2058f7eaa!2sDatta%20Meghe%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1709815687329!5m2!1sen!2sin"
                    width="300"
                    height="300"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
