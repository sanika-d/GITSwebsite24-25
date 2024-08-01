import React from "react";
import { useState } from "react";
import "./Accordion.css";

const FAQs = [
  {
    question:
      "What benefits one might be recieved by joining Group of IT Students?",
    answer:
      "Interestingly, it will allow you to develop your patience, confidence, and leadership abilities.",
  },
  {
    question: "What is the Group of IT Students' mission?",
    answer:
      "The goal is to develop management and leadership abilities. Additionally, it will help you become a responsible team player.",
  },
  {
    question: "What value does a GITS have for my future endeavours?",
    answer:
      "It will present a fresh idea, motivate audience members to investigate it further on their own, or it might demonstrate and encourage process practise.",
  },
  {
    question: "How will GITS help to improve a person's personality?",
    answer:
      "In fact necessary for you to become an autonomous person who can eventually aid you in your path, it will first train you to work in a precise hierarchy and also teach you to take responsibility.",
  },
];

const Accordion = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const showanswer = (faqId) => {
    setOpenFaq(faqId);
  };

  return (
    <div className="h-fit flex justify-center w-full items-center  mt-10">
      <div className="container w-full ">
        <div className="accordion space-y-4 lg:max-w-5xl mx-auto">
          {FAQs.map((faq, ind) => (
            <div
              key={"faq" + ind}
              className={`accordion-item flex flex-col items-center ${
                ind % 2 === 0
                  ? "md:mr-52 lg:mr-[24rem]"
                  : "md:ml-52 lg:ml-[24rem]"
              }`}
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center w-fit flex-col">
                <div className="flex flex-col items-center ">
                  <label
                    className="text-white opacity-80 w-fit cursor-pointer text-center flex flex-col md:text-xl text-lg"
                    onClick={() => {
                      showanswer(
                        openFaq === "faq-" + ind ? null : "faq-" + ind
                      );
                    }}
                  >
                    {faq.question}
                  </label>

                  <img
                    src={
                      openFaq === "faq-" + ind
                        ? "/assets/onstate.svg"
                        : "/assets/offstate.svg"
                    }
                    alt=""
                    onClick={() => {
                      showanswer(
                        openFaq === "faq-" + ind ? null : "faq-" + ind
                      );
                    }}
                    className="w-8 h-8 cursor-pointer"
                  />
                </div>
                <div
                  className="w-80 text-center text-[#00FFFF] flex justify-center overflow-y-hidden items-center"
                  style={{
                    height:
                      openFaq === "faq-" + ind
                        ? document.getElementById("faq-ans-" + ind)
                            .clientHeight
                        : 0,
                    transition: "height 0.3s ease-in-out",
                  }}
                >
                  <p id={"faq-ans-" + ind}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
