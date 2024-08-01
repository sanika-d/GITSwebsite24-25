import { useState } from "react";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
  Directions,
} from "react-floating-button-menu";

import { GrInstagram, GrTwitter, GrClose } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWindmill } from "react-icons/tb";

const FloatingButtons = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center z-10 position fixed bottom-5 right-5">
      {" "}
      <FloatingMenu
        slideSpeed={500}
        direction={Directions.Up}
        spacing={8}
        isOpen={isOpen}
      >
        <MainButton
          iconResting={
            <TbWindmill
              style={{ fontSize: 20 }}
              nativeColor="white"
              className="animate-spin"
            />
          }
          iconActive={<GrClose style={{ fontSize: 20 }} nativeColor="white" />}
          background="white"
          onClick={() => setIsOpen(!isOpen)}
          size={56}
        />
        <ChildButton
          icon={
            <a
              href="https://www.instagram.com/dmce_gits/"
              target={"_blank"}
              rel="noreferrer"
            >
              <GrInstagram style={{ fontSize: 20 }} />
            </a>
          }
          background="white"
          size={40}
          onClick={() => console.log("First button clicked")}
        />
        <ChildButton
          icon={
            <a
              href="https://mobile.twitter.com/dmce_gits"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsTwitterX style={{ fontSize: 20 }} />{" "}
            </a>
          }
          background="white"
          size={40}
        />
        <ChildButton
          icon={
            <a href="mailto:gits@dmce.ac.in" target={"_blank"} rel="noreferrer">
              <IoMailOutline style={{ fontSize: 20 }} />
            </a>
          }
          background="white"
          size={40}
        />
        <ChildButton
          icon={
            <a
              href="https://www.linkedin.com/company/dmce-gits/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedinIn style={{ fontSize: 20 }} />
            </a>
          }
          background="white"
          size={40}
        />
      </FloatingMenu>
    </div>
  );
};

export default FloatingButtons;
