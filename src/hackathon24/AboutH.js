import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image1 from "./assets/About1.jpg";
import Image2 from "./assets/About2.jpg";
import Image3 from "./assets/About3.jpg";
import Image4 from "./assets/About4.jpg";
import Image5 from "./assets/About5.jpg";
import Image6 from "./assets/About6.jpg";
import SwiperCore from "swiper";
import ImgsViewer from "react-images-viewer";
import { Navigation, Autoplay } from "swiper/modules";

SwiperCore.use([Navigation, Autoplay]);

const AboutH = () => {
  const images = [Image1, Image2, Image3, Image4];
  const swiperRef = useRef(null);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && !swiperRef.current.swiper.autoplay.running) {
      swiperRef.current.swiper.autoplay.start();
    }
  };
  return (
    <>
      <div className="justify-center flex flex-col content-center">
        <div>
          <h1
            className="font-larabieBold md:text-7xl text-4xl text-center text-[#00ffff] my-5 "
            data-aos="zoom-in"
          >
            About Us
          </h1>
          <section className="h-fit">
            <div className="relative md:mt-[4rem] mt-5 text-white text-center md:w-2/4 mx-auto md:space-y-12 space-y-8">
              <h1 className="font-sans lg:text-3xl text-2xl px-8  text-justify">
                {/* Group of Information Technology (GITS) was established in 2005.
                It is an apex student body, student’s council that integrates
                the academic, co-curricular spares of student’s life. We try to
                provide the out of class experience to the academic mission of
                the department for uplifting student’s intellectual, public
                service and leadership qualities. GITS committee aims towards
                solving the problems faced by students. The committee promotes
                extra- curricular activities in the Information Technology
                Department. GITS fosters TECHNITUDE, Teacher's day, Engineer's
                day celebration etc. GITS is the representative body for the
                students of Information Technology Department of the college. */}
                Group of Information Technology (GITS) was established in 2005.
                It is an apex student body, a student council that integrates
                the academic, and co-curricular spares of a student’s life. We
                try to provide an out-of-class experience to the academic
                mission of the department to uplift students’ intellectual,
                public service, and leadership qualities. The GITS committee
                aims towards solving the problems faced by students.GITS is the
                representative body for the students of the Information
                Technology Department of the college.
              </h1>
            </div>
          </section>
        </div>

        <br />
        <div className="p-12 hackabout">
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div class="-m-1 abouth flex flex-wrap md:-m-2">
              <div class="flex aboutHack flex-wrap">
                <div class="w-full p-1 md:p-2" onClick={() => setOpen1(true)}>
                  <ImgsViewer
                    isOpen={open1}
                    imgs={[{ src: Image1 }]}
                    style={{ width: 200, height: 200 }}
                    currImg={0}
                    onClose={() => setOpen1(false)}
                    className="w-52 m-0 h-auto max-h-80 md:w-80 box-border p-2"
                  />
                  <img
                    alt="gallery"
                    class="block aboutImg h-full w-full rounded-lg object-cover object-center"
                    src={Image1}
                  />
                </div>
              </div>
              <div class="flex aboutHack  flex-wrap">
                <div class="w-full p-1 md:p-2" onClick={() => setOpen2(true)}>
                  <ImgsViewer
                    isOpen={open2}
                    imgs={[{ src: Image2 }]}
                    style={{ width: 200, height: 200 }}
                    currImg={0}
                    onClose={() => setOpen2(false)}
                    className="w-52 m-0 h-auto max-h-80 md:w-80 box-border p-2"
                  />
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                    src={Image2}
                  />
                </div>
              </div>
              <div class="flex aboutHack  flex-wrap">
                <div class="w-full p-1 md:p-2" onClick={() => setOpen3(true)}>
                  <ImgsViewer
                    isOpen={open3}
                    imgs={[{ src: Image3 }]}
                    style={{ width: 200, height: 200 }}
                    currImg={0}
                    onClose={() => setOpen3(false)}
                    className="w-52 m-0 h-auto max-h-80 md:w-80 box-border p-2"
                  />
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                    src={Image3}
                  />
                </div>
              </div>
              <div class="flex aboutHack  flex-wrap">
                <div class="w-full p-1 md:p-2" onClick={() => setOpen4(true)}>
                  <ImgsViewer
                    isOpen={open4}
                    imgs={[{ src: Image4 }]}
                    style={{ width: 200, height: 200 }}
                    currImg={0}
                    onClose={() => setOpen4(false)}
                    className="w-52 m-0 h-auto max-h-80 md:w-80 box-border p-2"
                  />
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                    src={Image4}
                  />
                </div>
              </div>
              <div class="flex aboutHack  flex-wrap">
                <div class="w-full p-1 md:p-2" onClick={() => setOpen5(true)}>
                  <ImgsViewer
                    isOpen={open5}
                    imgs={[{ src: Image5 }]}
                    style={{ width: 200, height: 200 }}
                    currImg={0}
                    onClose={() => setOpen5(false)}
                    className="w-52 m-0 h-auto max-h-80 md:w-80 box-border p-2"
                  />
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                    src={Image5}
                  />
                </div>
              </div>
              <div class="flex aboutHack  flex-wrap">
                <div class="w-full p-1 md:p-2" onClick={() => setOpen6(true)}>
                  <ImgsViewer
                    isOpen={open6}
                    imgs={[{ src: Image6 }]}
                    style={{ width: 200, height: 200 }}
                    currImg={0}
                    onClose={() => setOpen6(false)}
                    className="w-52 m-0 h-auto max-h-80 md:w-80 box-border p-2"
                  />
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                    src={Image6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutH;
