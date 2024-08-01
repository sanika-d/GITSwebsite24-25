import React from "react";
import Gold from "./assets/GoldTrophy.png";
import Silver from "./assets/SilverTrophy.png";
import Bronze from "./assets/BronzeTrophy.png";

const Prize = () => {
  return (
    <>
      <div className="justify-center content-center">
        <div>
          <h1
            className="font-larabieBold md:text-7xl text-4xl text-center text-[#00ffff] my-5 "
            data-aos="zoom-in"
          >
            Prize
          </h1>
        </div>
        <div className="flex prize justify-center content-center items-center">
          <div class="rounded p-4 shadow-lg transition-all duration-700 hover:scale-110">
            <div class="flex flex-col gap-2 rounded">
              <img src={Gold} width="150" height="150" />
              <h2 class="text-xl font-bold text-center text-teal-100 ">
                Rs.15000/-
              </h2>
            </div>
          </div>
          <div class="rounded p-4 shadow-lg transition-all duration-700 hover:scale-110">
            <div class="flex flex-col gap-2">
              <img src={Silver} width="150" height="150" />
              <h2 class="text-xl font-bold text-center text-teal-100 ">
                Rs.10000/-
              </h2>
            </div>
          </div>
          <div class="rounded p-4 shadow-lg transition-all duration-700 hover:scale-110">
            <div class="flex flex-col gap-2">
              <img src={Bronze} width="150" height="150" />
              <h2 class="text-xl font-bold text-center text-teal-100 ">
                Rs.5000/-
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prize;
