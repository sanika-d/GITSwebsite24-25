import React from "react";
import { useState } from "react";
import "./Accordion.css";

const FAQs = [
  {
    question: "What are the dates of Hackathon 2.0?",
    answer:
      "Hackathon'24 will be held on 20th and 21st March, 2024, where innovation is welcome.",
  },
  {
    question: "Benefits of being in Hackathon 2.0?",
    answer:
      "Join us at Hackathon 2.0 on March 20th & 21st, 2024, where innovation takes center stage. Embrace the opportunity to showcase your creativity and push the boundaries of technology.",
  },
  {
    question: "What kind of projects are allowed ?",
    answer:
      "Its an open innovation competition & judging is based on your project that will be Beneficial for The Society",
  },
  {
    question: "Number of participants?",
    answer: "A team of minimum 2 and maximum 4 members are allowed.",
  },
  {
    question: "Is any registration fees ?",
    answer:
      "No registration fees, once team shortlisted need to pay Rs.100/Member.",
  },
  {
    question: "Food will be provided?",
    answer: "Snacks and Lunch for both days will be offered.",
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
                        ? document.getElementById("faq-ans-" + ind).clientHeight
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
