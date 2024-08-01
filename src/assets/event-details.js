/*
FORM LINKS:
  COPY EXACT IFRAME URL (FOUND WHILE SHARING GOOGLE FORM)
  ** NO SHORTEN URL **
*/

const upcomingEvents = {};
const pastEvents = {
  "gits-orientation-and-tambola": {
    name: "GITS Orientation & Tambola",
    type: "Introductory Session",
    date: "Tuesday, July 26, 2022",
    time: "4:00 PM",

    description: `In this, we will be discussing about our committee, events that were held under this committee and our upcoming events. You will be given an opportunity to work with us. "United we stand, divided we fall" and our motto will be giving justice to this saying but in a right way.`,
    photo: "/assets/events/1.jpeg",
    tags: ["fun", "tambola", "orientation"],
    speakers: [],
    report:
      "https://drive.google.com/drive/u/6/folders/12pWsPJwM5SxftpjIIlCfcBG69FDpn3vr",
    formLink: "",
    images: [
      "/assets/event-images/gits-orientation-and-tambola/1.jpg",
      "/assets/event-images/gits-orientation-and-tambola/2.jpg",
    ],
    feedbackLink: "",
  },
  "web-development-workshop": {
    name: "Web Development Workshop",
    type: "Hands on Workshop",
    date: "Friday, July 29, 2022",
    time: "2:00 PM",

    description: `This workshop will be entirely hands-on and students will get to build a Portfolio using HTML, CSS, JavaScript😁
      So, get ready to learn new stuff and add it to your skill-set! 
     `,
    photo: "/assets/events/2.jpeg",
    tags: ["website", "HTML", "CSS", "JS", "web development"],
    speakers: ["Mrunmayee", "Jay"],
    report: "",
    formLink: "",
    images: [
      "/assets/event-images/web-dev/1.jpg",
      "/assets/event-images/web-dev/2.jpg",
      "/assets/event-images/web-dev/3.jpg",
    ],
    feedbackLink: "",
  },
  "resume-building": {
    name: "Resume Building",
    type: "Informative Session",
    date: "Saturday, Aug 6, 2022",
    time: "10:00 AM",

    description: `This webinar will provide insightful and detailed explanations, as well as a step-by-step process of how to crack interviews and create an effective resume.
      This workshop will help you all for future opportunities.`,
    photo: "/assets/events/3.jpeg",
    tags: ["Resume", "Informative", "Portfolio"],
    speakers: [],
    report: "",
    formLink: "",
    feedbackLink: "",
    images: [],
  },
  "internship-fair": {
    name: "Internship Fair",
    type: "Internship Opportunities",
    date: "Tuesday, Aug 9, 2022",
    time: "09:00 AM Onwards",

    description: `"GITS-DMCE" is holding a session for students to provide them with an exposure to the corporate world. We, while collaborating with the companies, these companies will to conduct Mock Interviews along with Internship Opportunities for the brilliant minds.`,
    photo: "/assets/events/4.jpeg",
    tags: ["Internship", "Technology", "Interview"],
    speakers: [],
    report: "",
    formLink: "",
    feedbackLink: "",
    images: [],
  },
  "study-in-abroad-101": {
    name: "STUDY IN ABROAD 101",
    type: "Informative Session",
    date: "Tuesday, Sept 27, 2022",
    time: "11:00 AM to 12:30 PM",
    description: `This event is organised by GITS in association with- Vidyalankar. Studying abroad can be a life-changing experience for students. From enhancing your global network to experiencing a new culture, the benefits to your education and career are significant 🙌🏼`,
    photo: "/assets/events/5.jpeg",
    tags: ["Study", "International Degree", "GATE"],
    speakers: [],
    report: "",
    formLink: "",
    feedbackLink: "",
    images: [],
  },
  "introduction-to-web-3": {
    name: "Introduction to Web3.0",
    type: "Hands on Workshop",
    date: "Tuesday, Sept 27, 2022",
    time: "02:00 PM Onwards",
    description: `Join this workshop to gain the knowledge of Web 3.0 , blockchain , career opportunities in Web 3.0 and introduction to the community , followed by a hands-on session on building your first NFT,DAO and many more exciting concepts.`,
    photo: "/assets/events/6.jpeg",
    tags: ["Web3", "BlockChain", "Metaverse"],
    speakers: [],
    report: "",
    formLink: "",
    images: [
      "/assets/event-images/web-3/1.jpeg",
      "/assets/event-images/web-3/2.jpeg",
      "/assets/event-images/web-3/3.jpeg",
      "/assets/event-images/web-3/4.jpeg",
    ],
  },
  "opensource-and-github": {
    name: "Open Source & Github",
    type: "Hands on Workshop",
    date: "Thursday, Sept 29, 2022",
    time: "09:00 AM Onwards",
    description: `Come join #TECHGITS to learn about the various opportunities and learnings that the world of open source provides and initiate your journey towards becoming a great Open Source Contributor :)   
      `,
    photo: "/assets/events/7.jpeg",
    tags: ["GIT", "GITHUB", "Git Bash", "Open Source"],
    speakers: ["Raj", "Yash"],
    report: "",
    formLink: "",
    images: [
      "/assets/event-images/opensource-git/1.jpg",
      "/assets/event-images/opensource-git/2.jpg",
      "/assets/event-images/opensource-git/3.jpg",
    ],
  },
  "vidyalankar-infinite": {
    name: "Vidyalankar Infinite",
    type: "Informative Session",
    date: "Monday, Oct 10, 2022",
    time: "11:00 AM to 12:30 PM",
    description: `GATE a national-level test is a gateway to Master's program or postgraduate engineering (ME/M. Tech) or analysis courses at top colleges in India such as IITs,NITs,etc.
      📍This event will be open for all TE and BE branches.  
      `,
    photo: "/assets/events/8.jpeg",
    tags: ["Learning"],
    speakers: [],
    report: "",
    formLink: "",
    images: [],
    feedbackLink: "",
  },
  "cloud-computing": {
    name: "Cloud Computing",
    type: "Informative Session",
    date: "Friday, Jan 20, 2023",
    time: "2:00 PM to 4:00 PM",
    description: `This webinar will provide insightful and detailed explanations, as how you can start your journey to AWS in Step by Step approach.
      This workshop will be conducted by Mr. Ranga Karanam who is the founder of 28minutes and Mr. Rakesh Warade who is the Microsoft Employee.
        
      `,
    photo: "/assets/events/9.jpeg",
    tags: ["Cloud", "AWS", "GCP", "ASSURE"],
    speakers: [],
    report: "",
    formLink: "https://forms.gle/dydyBiDgpyVeSWhk9",
    images: [
      "/assets/event-images/cloud-computing/1.jpeg",
      "/assets/event-images/cloud-computing/2.jpeg",
    ],
  },
  "republic-day": {
    name: "Republic Day",
    type: "Fun Session",
    date: "Friday, Jan 20, 2023",
    time: "2:00 PM to 4:00 PM",
    description: `On the occasion of Republic Day, we the GITS DMCE of 22-23 , is organizing an event for new emerging talents of India 🇮🇳 
      📌In this event, we are giving you the opportunity to showcase whatever talents you have and make you stand out from the crowd.
      😎So, go out there and own the floor on the stage with your amazing talent😎      
        
      `,

    photo: "/assets/events/10.jpeg",
    tags: ["Fun", "Talent"],
    speakers: [],
    report: "",
    formLink: "https://forms.gle/U8Km94SEFc1wMZPE7",
    images: [
      "/assets/event-images/republic-day/1.jpeg",
      "/assets/event-images/republic-day/2.jpeg",
      "/assets/event-images/republic-day/3.jpeg",
      "/assets/event-images/republic-day/4.jpeg",
      "/assets/event-images/republic-day/5.jpeg",
      "/assets/event-images/republic-day/6.jpeg",
      "/assets/event-images/republic-day/7.jpeg",
    ],
  },
  "introduction-to-mechatronics": {
    name: "Introduction to Mechatronics",
    type: "Workshop",
    date: "Thursday, Feb 2, 2023",
    time: "02:00 PM to 05:00 PM",
    description:
      "GITS DMCE are organizing this event for the students with the intention of providing an introduction to the unique and interesting field of mechatronics.",
    photo: "/assets/events/11.jpeg",
    tags: ["Mechatronics", "Workshop", "IoT", "Arduino"],
    speakers: ["Raj", "Yash"],
    report: "",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd_jfHCHKPQaWYGzKOIj2fJw15oPfhRadoe6cZ94t6RoBKNww/viewform?embedded=true",
    feedbackLink:
      "https://docs.google.com/forms/d/1OoXVB7K580vyWbWBmZ91PJam8AnnvJ8Xssb0LIxEkUA/viewform?embedded=true",
    images: [
      "/assets/event-images/mechatronics/1.jpg",
      "/assets/event-images/mechatronics/2.jpg",
      "/assets/event-images/mechatronics/3.jpg",
      "/assets/event-images/mechatronics/4.jpg",
      "/assets/event-images/mechatronics/5.jpg",
      "/assets/event-images/mechatronics/6.jpg",
    ],
  },

  "General Programming Concept": {
    name: "Programming in Regional Language",
    type: "Hands On Workshop, student even code on mobile",
    date: "Aug 07, 2023 ",
    time: "11:00 AM to 01:00 PM",
    description:
      "GITS DMCE, with TechGITS's Hrushabh and Ganesh hosted seminar, to give detailed and real life application of programming concept and there usecase in students comfort language. ",
    photo: "/assets/events/GeneralProgram.jpeg",
    tags: ["Mechatronics", "Workshop", "IoT", "Arduino"],
    speakers: ["Raj", "Yash"],
    report: "",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd_jfHCHKPQaWYGzKOIj2fJw15oPfhRadoe6cZ94t6RoBKNww/viewform?embedded=true",
    feedbackLink:
      "https://docs.google.com/forms/d/1OoXVB7K580vyWbWBmZ91PJam8AnnvJ8Xssb0LIxEkUA/viewform?embedded=true",
    images: [
      "/assets/event-images/mechatronics/1.jpg",
      "/assets/event-images/mechatronics/2.jpg",
      "/assets/event-images/mechatronics/3.jpg",
      "/assets/event-images/mechatronics/4.jpg",
      "/assets/event-images/mechatronics/5.jpg",
      "/assets/event-images/mechatronics/6.jpg",
    ],
  },
  WebDevBootcamp: {
    name: "Web Development Bootcamp",
    type: "2 Days Hands on Coding Bootcamp",
    date: "Oct 10, 2023 to Oct 11, 2023",
    time: "10:00 AM to 12:00 PM",
    description:
      "GITS DMCE, with TECHGITS organised a 2 days from scratch to advance level web development bootcamp, starting from HTML,CSS till ReactJS.",
    photo: "/assets/events/WebDevBoot.jpeg",
    tags: ["Mechatronics", "Workshop", "IoT", "Arduino"],
    speakers: ["Raj", "Yash"],
    report: "",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd_jfHCHKPQaWYGzKOIj2fJw15oPfhRadoe6cZ94t6RoBKNww/viewform?embedded=true",
    feedbackLink:
      "https://docs.google.com/forms/d/1OoXVB7K580vyWbWBmZ91PJam8AnnvJ8Xssb0LIxEkUA/viewform?embedded=true",
    images: [
      "/assets/event-images/mechatronics/1.jpg",
      "/assets/event-images/mechatronics/2.jpg",
      "/assets/event-images/mechatronics/3.jpg",
      "/assets/event-images/mechatronics/4.jpg",
      "/assets/event-images/mechatronics/5.jpg",
      "/assets/event-images/mechatronics/6.jpg",
    ],
  },
  AWS: {
    name: "Cloud Basics and AWS",
    type: "Handson Bootcamp",
    date: "Jan 29, 2024 to Feb 2, 2024",
    time: "10:00 AM to 12:00 PM",
    description:
      "GITS DMCE organzed event with Prof. Aparna Bhonde on Cloud Computing, services and deployment methods. And handson to AWS services.",
    photo: "/assets/events/AWSWorkshop.jpeg",
    tags: ["Mechatronics", "Workshop", "IoT", "Arduino"],
    speakers: ["Raj", "Yash"],
    report: "",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd_jfHCHKPQaWYGzKOIj2fJw15oPfhRadoe6cZ94t6RoBKNww/viewform?embedded=true",
    feedbackLink:
      "https://docs.google.com/forms/d/1OoXVB7K580vyWbWBmZ91PJam8AnnvJ8Xssb0LIxEkUA/viewform?embedded=true",
    images: [
      "/assets/event-images/mechatronics/1.jpg",
      "/assets/event-images/mechatronics/2.jpg",
      "/assets/event-images/mechatronics/3.jpg",
      "/assets/event-images/mechatronics/4.jpg",
      "/assets/event-images/mechatronics/5.jpg",
      "/assets/event-images/mechatronics/6.jpg",
    ],
  },
};

export { pastEvents, upcomingEvents };
