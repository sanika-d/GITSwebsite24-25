import React from "react";
import Navbar from "../components/navBar/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HackReg.css";

const HackReg = () => {
  const nav = useNavigate();
  const [teamMember, setTeamMember] = useState(0);

  const initialTeamMember = {
    username: "",
    email: "",
    contactNumber: "",
    college: "",
    branch: "",
    year: "",
    pptFile: "",
  };

  const onPPTButtonClick = () => {
    const pptUrl = "PPTTemplate.pptx"; // URL of your PowerPoint file
    const link = document.createElement("a");
    link.href = pptUrl;
    link.download = "Your_Teamname.pptx"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [formData, setFormData] = useState({
    teamleader: "",
    teamleademail: "default@gmail.com",
    contactNumber: "",
    college: "",
    branch: "",
    year: "",
    teamMembers: [initialTeamMember],
    domain: "",
    pptFile: "",
    teamName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onChangeHandler = (event, isTeamLead = true, index) => {
    const { name, value } = event.target;

    if (isTeamLead) {
      setFormData((prevData) => ({
        ...prevData,
        teamLead: {
          ...prevData.teamLead,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => {
        const updatedMembers = [...prevData.teamMembers];
        updatedMembers[index] = {
          ...updatedMembers[index],
          [name]: value,
        };
        return { ...prevData, teamMembers: updatedMembers };
      });
    }
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length <= 2) {
      setFormData((prevData) => ({
        ...prevData,
        teamMembers: [...prevData.teamMembers, { ...initialTeamMember }],
      }));
    }
    if (formData.teamMembers.length == 2) {
      setTeamMember(2);
    }
  };

  const removeTeamMember = (index) => {
    setFormData((prevData) => {
      const updatedMembers = [...prevData.teamMembers];
      setTeamMember(updatedMembers);
      updatedMembers.splice(index, 1);
      return { ...prevData, teamMembers: updatedMembers };
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const payload = {
      teamLeaderName: formData.teamleader,
      teamLeaderEmail: formData.teamleademail,
      teamLeaderNumber: formData.contactNumber,
      teamLeaderCollege: formData.college,
      teamLeaderBranch: formData.branch,
      teamLeaderYear: formData.year,
      teamMembers: formData.teamMembers.map((member) => ({
        name: member.username,
        email: member.email,
        number: member.contactNumber,
        college: member.college,
        branch: member.branch,
        year: member.year,
      })),
      domain: formData.domain,
      ppt: formData.pptFile,
      teamName: formData.teamName,
      timestamp: Date.now(),
    };

    try {
      const response = await axios.post(
        "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-cyjek/endpoint/form",
        payload
      );

      console.log(payload);
      console.log(formData);

      console.log("Form submitted successfully:", response.data);
      window.alert("Form submitted successfully!");
      nav("/hackathon24");
      // window.location.reload();
    } catch (error) {
      console.log(error);
      console.error("Error submitting form:", error);
    }
  };

  const [isAfterDate, setIsAfterDate] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date("2024-03-18T14:59:00");

    if (currentDate > targetDate) {
      setIsAfterDate(true);
    }
  }, []);

  const handleButtonClick = () => {
    // Replace 'YOUR_GOOGLE_FORM_LINK' with the actual link to your Google Form
    window.open('https://forms.gle/ncqXy7XptNpwVUq87', '_blank');
  };


  const teamData = [
    { id: 1, name: "SAPP" },
    { id: 2, name: "Innovate XY" },
    { id: 3, name: "Infinity" },
    { id: 4, name: "Aumalgo" },
    { id: 5, name: "init to win it" },
    { id: 6, name: "CORE 4" },
    { id: 7, name: "BLACK HATS" },
    { id: 8, name: "Code Geass" },
    { id: 9, name: "Dev-Elites" },
    { id: 10, name: "AKM" },
    { id: 11, name: "Culinary Coders" },
    { id: 12, name: "Turing Tribe" },
    { id: 13, name: "Brewing Javascript" },
    { id: 14, name: "MERN Marvels" },
    { id: 15, name: "Tech Titans" },
    { id: 16, name: "Raksha" },
    { id: 17, name: "THE UNDERDOGS" },
    { id: 18, name: "Byte Busters" },
    { id: 19, name: "UNDEFINED!!" },
    { id: 20, name: "EmpowerED" },
    { id: 21, name: "FRAUDBUSTER" },
    { id: 22, name: "Bytebusters" },
    { id: 23, name: "Nexus" },
    { id: 24, name: "tech blits" },
    { id: 25, name: "Techmate inovators" },
    { id: 26, name: "Humanoids" },
  ];

  return (
    <>
      <Navbar />
      {isAfterDate ? (
        <>
          <div className="App">
            {/* <h2 className="title">Hackathon Registration Form</h2> */}
            <div
              className="flex flex-col  p-10 justify-center items-center mt-5 m-5"
              data-aos="zoom-in"
            >
              {/* <Topology className="w-2/4 h-2/4 md:w-1/3 md:h-1/3 sm:w-1/2 sm:h-1/2" /> */}
              {/* <p className="text-center text-color-green self-center">OUR EVENTS</p> */}
              {/* <h1
                className="self-center text-color-green event-title text-center font-larabie"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Shortlisted Teams
              </h1> */}

              <h1
                className="font-larabieBold md:text-7xl text-4xl text-center text-[#00ffff] my-5 "
                // data-aos="zoom-in"
              >
                Congratulations Top 26 Teams, see you in Hackathon 2.0
              </h1>
              <h1
                className="font-larabieBold md:text-7xl text-4xl text-center text-[#00ffff] my-5 "
                // data-aos="zoom-in"
              >
                Shortlisted Teams
              </h1>
              <br />
              <br />
              <div className="flex projects content-center justify-center">
                <div
                  className={`justify-center  w-60 text-center h-min ml-4 w-max  mx-auto md:mx-5 `}
                >
                  {teamData.map((team) => (
                    <>
                      <div
                        className="border-gray-400 p-2 cursor-pointer "
                        style={{ borderWidth: 1 }}
                        // data-aos="fade-right"
                        // data-aos-delay="2500"
                      >
                        <h1 className="text-[#00ffff] font-larabieBold text-2xl">
                          {team.name}
                        </h1>
                      </div>
                      <br />
                    </>
                  ))}
                </div>
              </div>
              <h1
                className="font-larabieBold md:text-7xl text-4xl text-center text-[#00ffff] my-5 "
                // data-aos="zoom-in"
              >
                Shortlisted teams are requested to make payment on below form
              </h1>
              <div className="flex flex-col justify-center items-center mt-5">
                <button onClick={handleButtonClick} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                    Form
                  </span>
                </button>
              </div>

              {/* <h3
                className="self-center text-color-green  text-center font-larabie px-8 justify-center text-align-justify px-8  text-justify"
                // data-aos="zoom-in"
                // data-aos-delay="300"
              >
                Congratulations Top 26 Teams, see you in Hackathon 2.0
              </h3> */}
            </div>
          </div>
        </>
      ) : (
        <div className="App">
          {/* <h2 className="title">Hackathon Registration Form</h2> */}
          <div
            className="flex flex-col justify-center items-center mt-5"
            data-aos="zoom-in"
          >
            {/* <Topology className="w-2/4 h-2/4 md:w-1/3 md:h-1/3 sm:w-1/2 sm:h-1/2" /> */}
            {/* <p className="text-center text-color-green self-center">OUR EVENTS</p> */}
            <h1
              className="self-center text-color-green event-title text-center font-larabieBold "
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Register for Hackathon 2.0
            </h1>
            <br />
            <br />
          </div>
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label
                htmlFor="text"
                className="form-label self-center text-color-green reg-title text-center font-larabieBold "
              >
                Team Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control"
                name="teamName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="domain"
                className="form-label self-center text-color-green reg-title text-center font-larabieBold"
              >
                Domain <span style={{ color: "red" }}>*</span>
              </label>
              <select
                className="form-control"
                name="domain"
                onChange={handleChange}
                required
                style={{ backgroundColor: "black" }}
              >
                <option value="" disabled selected>
                  Select Domain
                </option>
                <option value="Web Dev">Web Development</option>
                <option value="ML">Machine Learning</option>
                <option value="Blockchain">Blockchain</option>
                <option value="CyberSec">Cyber Security</option>
                <option value="Other">Others Open Innovation</option>
              </select>
            </div>
            {/* <div className="form-group">
            <label htmlFor="domain" className="form-label self-center text-color-green reg-title text-center font-larabieBold">
              Domain <span style={{ color: "red" }}>*</span>
            </label>
            <select
              className="form-control"
              name="domain"
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Select Domain
              </option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Finance">Finance</option>
              <option value="SecurityECom">Security & E-Commerce</option>
              <option value="Welfare">Welfare</option>
            </select>
          </div> */}

            <div className="form-group">
              <label
                htmlFor="text"
                className="form-label self-center text-color-green reg-title text-center font-larabieBold"
              >
                Team Leader Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control"
                name="teamleader"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="teamLead-email"
                className="form-label self-center text-color-green reg-title text-center font-larabieBold"
              >
                Team Leader Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="teamleademail"
                id="teamLead-email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="contactNumber"
                type="tel"
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  padding: "0",
                }}
                className="form-label self-center text-color-green reg-title text-center font-larabieBold"
              >
                {" "}
                Contact Number <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <input
                type="Number"
                className="form-control"
                name="contactNumber"
                onChange={handleChange}
                required
                pattern="\d{10}"
                title="Please enter a 10-digit number."
                inputMode="numeric"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="text"
                className="form-label self-center text-color-green reg-title text-center font-larabieBold"
              >
                {" "}
                College <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <input
                className="form-control"
                name="college"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="text"
                className="form-label self-center text-color-green reg-title text-center font-larabieBold"
              >
                {" "}
                Branch <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control"
                name="branch"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="text"
                className="form-label self-center text-color-green reg-title text-center font-larabieBold"
              >
                {" "}
                Year <span style={{ color: "red" }}>*</span>
              </label>
              <input
                className="form-control"
                name="year"
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="form-group">
                  <label
                    htmlFor={`teamMember-username-${index}`}
                    className="form-label self-center text-color-green reg-title text-center font-larabieBold"
                  >
                    Team Member {index + 2} Name{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="form-control"
                    name="username"
                    id={`teamMember-username-${index}`}
                    onChange={(e) => onChangeHandler(e, false, index)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor={`teamMember-email-${index}`}
                    className="form-label self-center text-color-green reg-title text-center font-larabieBold"
                  >
                    Team Member Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id={`teamMember-email-${index}`}
                    onChange={(e) => onChangeHandler(e, false, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="number"
                    className="form-label self-center text-color-green reg-title text-center font-larabieBold"
                  >
                    {" "}
                    Contact Number <span style={{ color: "red" }}>*</span>{" "}
                  </label>
                  <input
                    type="Number"
                    className="form-control"
                    name="contactNumber"
                    onChange={(e) => onChangeHandler(e, false, index)} //  value={member.additionalInfo.contactNumber.value}
                    required
                    pattern="\d{10}"
                    title="Please enter a 10-digit number."
                  />
                </div> */}

            {formData.teamMembers.map((member, index) => (
              <div key={index}>
                <div className="form-group">
                  <label
                    htmlFor={`teamMember-username-${index}`}
                    className="form-label self-center text-color-green reg-title text-center font-larabieBold"
                  >
                    Team Member {index + 2} Name{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="form-control"
                    name="username"
                    id={`teamMember-username-${index}`}
                    onChange={(e) => onChangeHandler(e, false, index)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor={`teamMember-email-${index}`}
                    className="form-label self-center text-color-green reg-title text-center font-larabieBold"
                  >
                    Team Member Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id={`teamMember-email-${index}`}
                    onChange={(e) => onChangeHandler(e, false, index)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="number"
                    className="form-label self-center text-color-green reg-title text-center font-larabieBold"
                  >
                    {" "}
                    Contact Number <span style={{ color: "red" }}>*</span>{" "}
                  </label>
                  <input
                    type="Number"
                    className="form-control"
                    name="contactNumber"
                    onChange={(e) => onChangeHandler(e, false, index)} //  value={member.additionalInfo.contactNumber.value}
                    required
                    pattern="\d{10}"
                    title="Please enter a 10-digit number."
                  />
                </div>
                {/* <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {" "}
                  College <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  className="form-control"
                  name="college"
                  onChange={(e) => onChangeHandler(e, false, index)}
                  required
                />
              </div> */}
                {/* <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {" "}
                  Branch <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  className="form-control"
                  name="branch"
                  onChange={(e) => onChangeHandler(e, false, index)}
                  required
                />
              </div> */}
                {/* <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {" "}
                  Year <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  className="form-control"
                  name="year"
                  onChange={(e) => onChangeHandler(e, false, index)}
                  required
                />
              </div> */}
                <div className="internalbtn">
                  <button type="button" onClick={() => removeTeamMember(index)}>
                    Remove
                  </button>
                </div>
                <br />
              </div>
            ))}
            {teamMember == 2 ? (
              <> </>
            ) : (
              <div className="internalbtn2">
                <button type="button" onClick={addTeamMember}>
                  Add Team Member
                </button>
              </div>
            )}
            <div className="form-group">
              <label
                htmlFor="pptFile"
                className="form-label  text-color-green reg-title  font-larabieBold"
              >
                Google Drive PPT Link<span style={{ color: "red" }}>*</span>
              </label>
              <br />
              {/* <button className=" form-label text-color-green reg-title p-2 text-sm text-center border rounded">Download PPT Template </button> */}
              <button
                className="border ppt p-2 rounded"
                onClick={onPPTButtonClick}
              >
                Download PPT Template
              </button>
              <p className="text-color-green reg-title  font-larabie">
                Make sure PPT Link has rights to access.
              </p>
              <input
                className="form-control"
                type="text"
                name="pptFile"
                onChange={handleChange}
                required
              />
            </div>

            {/* <div className="submitbtn">
            <button className="btn" type="submit">
              Submit
            </button>
          </div> */}
            <div className="flex flex-col justify-center items-center mt-5">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default HackReg;
