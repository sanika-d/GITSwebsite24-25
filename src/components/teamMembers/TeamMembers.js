import "../../styles/TeamMembers.css";
import React from "react";
import { GrInstagram, GrGithub } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
const TeamMember = ({
  name = null,
  role = null,
  insta = null,
  linkedin = null,
  mail = null,
  github = null,
  image,
}) => {
  let [onDiv, setOnDiv] = React.useState(false);
  return (
    <div>
      <div>
        <section data-aos="fade-up">
          <div
            className="something container2"
            onMouseOver={() => {
              setOnDiv(true);
            }}
            onMouseLeave={() => {
              setOnDiv(false);
            }}
          >
            <div className="something card">
              <div className="something content" style={{"marginLeft":"0"}}>
                <div
                  className={`something imgBx opacity-100`}
                  style={{
                    background: "white",
                  }}
                >
                  <div
                    className={`  image opacity-100`}
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "0px 0px",
                      filter: onDiv ? "grayscale(0%)" : "grayscale(80%)",
                      position: "relative",
                      width: "140px",
                      height: "140px",
                      overflow: "hidden",
                    }}
                  >
                    {/* <img src="/assets/member_photo/person1.jpeg" height="250px" /> */}
                  </div>
                </div>
                <div className="something contentBx">
                  <h3>
                    {name}
                    <br />
                    <span>{role}</span>
                  </h3>
                </div>
              </div>
              <ul className="something sci">
                {insta ? (
                  <li>
                    <a href={`${insta}`} target="_blank" rel="noreferrer">
                      <GrInstagram />
                    </a>
                  </li>
                ) : null}
                {github ? (
                  <li>
                    <a href={`${github}`} target="_blank" rel="noreferrer">
                      <GrGithub />
                    </a>
                  </li>
                ) : null}
                {linkedin ? (
                  <li>
                    <a href={`${linkedin}`} target="_blank" rel="noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </li>
                ) : null}
                {((!github || !linkedin || !insta) && mail) ?? (
                  <li>
                    <a
                      href={`mailto: ${mail}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoMailOutline />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default TeamMember;