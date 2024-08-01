import React from "react";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex justify-center items-center  space-y-8 flex-col">
      {/* <span className="h-36 border-2 border-[#00ffff]  bg-[#00ffff]"></span> */}
      <div className="flex justify-center items-center flex-col space-y-3  animate-pulse">
        <a href="https://www.instagram.com/dmce_gits/">
          <GrInstagram className="text-3xl text-[#00ffff] mx-2 transition-all duration-100 ease-linear hover:rotate-0 -rotate-90" />
        </a>
        <a href="https://mobile.twitter.com/dmce_gits">
          <BsTwitterX className="text-3xl text-[#00ffff] mx-2 transition-all duration-100 ease-linear hover:rotate-0 -rotate-90" />
        </a>
        <a href="mailto:gits@dmce.ac.in">
          <IoMailOutline className="text-3xl text-[#00ffff] mx-2 transition-all duration-100 ease-linear hover:rotate-0 -rotate-90" />
        </a>
        <a href="https://www.linkedin.com/company/dmce-gits/">
          <FaLinkedinIn className="text-3xl text-[#00ffff] mx-2 transition-all duration-100 ease-linear hover:rotate-0 -rotate-90" />
        </a>
      </div>
      <span className="h-60 border-[1px] border-[#00ffff]  bg-[#00ffff]"></span>
    </div>
  );
};

export default Socials;
