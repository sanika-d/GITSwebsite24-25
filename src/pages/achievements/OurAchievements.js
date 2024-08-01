import React from "react";
import AchievementsLeft from "./AchievementsLeft";
import AchievementsRight from "./AchievementsRight";

const OurAchievements = () => {
  const achievements = {
   
    a: {
      Event: "SIH 2023",
      Date: "20 / December / 2023",
      Team: "Nikhil Mahajan,Sahil Durgude,Prathamesh Govilkar,Ayush Jadhav,Rushikesh Mane,Mrunal Thakur,Virendra Kori",
      Describtion: "Team Saarthi1, a Self Identifying the Mental Health status of a person and giving guidance. ",
      Photo: "/assets/achievements/Sahil_SIH.jpeg",
    },
    a1: {
      Event: "Prakalp 2K23",
      Date: "10 / March / 2023",
      Team: "Ganesh Padval, Mujahid Mohd Mustafa Sadique, Usama Ansari, Hrushabh N. Patade",
      Describtion: "Team Humanoids, Project FragAbs - a revolutionary machine learning tool that streamlines the process of reading research papers. FragAbs will break the abstract into labelled fragments. E.g. An abstract that contains objective of the project, background study, methods, result achieved or conclusion reached. Technology used SpaCy, Bard Model, Django, Tensorflow, Google Cloud etc",
      Photo: "/assets/achievements/Hrushabh_Hack.jpeg",
    },
    a2: {
      Event: " VEC'23 National Level Hackathon in Warangal, Telangana",
      Date: "10 / NOV / 2023",
      Team: "Lalitkumar Deshmukh,Manas Kulkarni,Prayag Chavan,Omkar Khopade",
      Describtion: "Team Trojan Slicer, Railway Transportation Safety - Our innovative web application, 'RailMedia' designed exclusively for the Indian Railway Community to solve the problems like unclean toilets, roof leak on bridges, etc.",
      Photo: "/assets/achievements/Lalit_Hack.jpeg",
    },
    A: {
      Event: "Technicia'23 Cricket Tournament",
      Date: "01 / March / 2023",
      Team: "Pranil Patil (C), Durgesh Thorat, Krushnal Patil, Aditya Vichare, Sanket Yashwantrao, Anish Pungle, Rahul Bhoir, Shubham Bombe, Harshwardhan Lavand, Saurabh Mankar,Shravan sakpal ",
      Describtion: "Team Dmce Dominators,Total 12-14 teams are played knockouts matches out of that 2 were played for finals. And Dmce Dominators are the winner of the tournament.",
      Photo: "/assets/achievements/Cricket.jpeg",
    },
    achievements: {
      Event: "Chess",
      Date: "16 / Sept / 2022",
      Team: "Pralay Umale",
      Describtion:
        "Chess competition which was held by electrical branch DMCE technitude. Won 1st prize in the competition. Also I have won 2 tournament on lichess com ",
      Photo: "/assets/achievements/chess_Pralay.jpg",
    },
    b: {
      Event: "SIH 2022",
      Date: "25-26 August 2022",
      Describtion:
        "Our team 'TechNodes' was shortlisted for the grand finale of the Smart India Hackathon 2022 and our topic was \"Career Guidance System\". The grand finale was conducted at TPCE, Telangana. We enjoyed the whole journey right from selecting the problem statement to presenting it in the grand finale. We are also thankful to our mentor Ms. Deepali Kadam ma'am, Dinesh Sir from TCS, seniors and everyone involved for their guidance and unparalleled support.\nTech Stack Used: Frontend: HTML, CSS, JS\nBackend:  Python Flask, SQlite DB, PostgreSQL",
      Team: "Yash Joshi, Pranav Jore, Mrunmayee Jakate, Snehal Lavangare, Pravin Tale, Shreyas Ajgaonkar",
      Photo: "/assets/achievements/SIH_Shreyas.jpeg",
    },
    ba: {
      Event: "SIH",
      Date: "25-26 August 2022",
      Describtion: `Winner of the Smart India Hackathon 2022 organized by the Ministry of Education, India. (August 2022)
        (Project – Automated Faulty Streetlight Detection System)
        Conducted at IIT-Kanpur\nTech Stack Used: Frontend: HTML, CSS, ReactJs\nBackend:  Python Flask, Firebase\n Mobile: React-Native And IoT`,
      Team: "Yash Kandalkar, Nirmiti Bhoir, Raj Jadhav, Aarushi Das, Dhruv Bhanushali and Manas Buchade",
      Photo: "/assets/achievements/manas_SIH.jpeg",
    },
    c: {
      Event:
        "Poster making competition organised by IIC(Institutions Innovation Council)",
      Date: "22 April 2022",
      Describtion:
        "Poster making competition organised by IIC, on World Earth Day, topic Innovative Ideas for Reducing Pollution. I won 2nd prize in the competition.",
      Team: "Maulya Shankar Shetty ",
      Photo: "/assets/achievements/Poster_Maulya.jpg",
    },
    ca: {
      Event: "Mastek Deep blue Hackathon S7",
      Date: "22 April 2022",
      Describtion: `Mastek DeepBlue Hackathon S7 - This event was hosted by The Mastek Company itself. 

        Our problem statement was - Resume Match and Ranking.
        
        The Semi-finals were held the Mastek Millenium Centre, Mahape, Navi Mumbai, on 9th April 2022.
        
        Team Name - Optimizers
        On the day of Semifinals, my team had physically presented the solution demo.
        Technology Stack - Spacy Model, Phrase Matcher, Matcher.
        Customized the Spacy model according to our requirements.
        
        Position - Semi Finalists `,
      Team: "Nirmiti Bhoir, Aarushi Das, Mrunmayee Jakate, Snehal Lavangare",
      Photo: "/assets/achievements/nirmiti_mastek.jpg",
    },
    d: {
      Event: "Rhythms",
      Date: "1/4/2022",
      Describtion:
        "Rhythms was an inter college group dance competition which was organized by A C PATIL College of Engineering It was an offline event, in this event we have successfully secured 1st position.",
      Team: "Shruti Pandey, Kimaya Chaudhari ",
      Photo: "/assets/achievements/Rhythms_Shruti.jpeg",
    },
    da: {
      Event: "Techotsav 2022",
      Date: "March 2022",
      Describtion: `First Runner-Up of Techotsav 2022 organized by GDSC-DMCE.
      Conducted at DMCE
      Project - Automated Faulty Streetlight Detection System Tech Stack Used: Frontend: HTML, CSS, ReactJs\nBackend:  Python Flask, Firebase\n Mobile: React-Native And IoT`,
      Team: "Dhruv Bhanushali, Nirmiti Bhoir, Raj Jadhav, Aarushi Das, Yash Kandalkar and Manas Buchade",
      Photo: "/assets/achievements/manas_techotsav.jpeg",
    },
    e: {
      Event: "Smart India Hackathon",
      Date: "16/03/2022",
      Describtion:
        "It was a internal hackathon organized DMCE for the selection of top 10 teams for Smart India Hackathon. I was a team leader and our team presented One Stop Platform for Entrepreneurs. Unfortunately, we didn't qualified for Smart India Hackathon but we learned a lot from our mistakes. We mostly used HTML,CSS, Bootstrap, JavaScript, MySql",
      Team: "Atharva Mathura, Yash Harad, Omkar Golatkar, Pranit, Priyanka Abhuj",
      Photo: "/assets/achievements/SIH_Atharva.jpg",
    },
    f: {
      Event: "Verv",
      Date: "31/3/2022",
      Team: "Shruti Pandey, Kimaya Chaudhari ",
      Describtion:
        "Verv was organized by K J Somaiya College of Science & Commerce it was one of the biggest events. Verv was the name of group dance competition that was organized by them, and we have secured 3rd position in this competition.",
      Photo: "/assets/achievements/Verv_Shruti.jpeg",
    },
    g: {
      Event: "Birlotsav",
      Date: "30/3/2022",
      Team: "Shruti Pandey, Kimaya Chaudhari",
      Describtion:
        "B. K. BIRLA COLLEGE OF ARTS, SCIENCE & COMMERCE, KALYAN hosted an event named Birlotsav it was an offline dance competition which was open for all and we have secured 1st place in that event.",
      Photo: "/assets/achievements/Birlotsav_Shruti.jpeg",
    },
    h: {
      Event: "Flames",
      Date: "1/03/2022",
      Describtion:
        "Gurukul College of Commerce hosted the event Flames. It was an online inter college dance competition, and it was broadcast live on YouTube. We have secured 2nd place in this competition.",
      Team: "Shruti Pandey, Kimaya Chaudhari",
      Photo: "/assets/achievements/Flames_Shruti.jpeg",
    },
    i: {
      Event: "Mastek Deep Blue Season 6",
      Date: "April 2021",
      Describtion: `Project Title - Geofencing using IoT (A wearable IoT device for Geofencing of Covid-19 Patients in Hospitals)
        Position - Semi-Finalists
        Conducted by and hosted at - Mastek Tech Stack Used: Frontend: HTML, CSS, ReactJs\nBackend:  Python Flask, Firebase\n Mobile: React-Native And IoT`,
      Team: "Yash Kandalkar, Raj Jadhav, Dhruv Bhanushali and Manas Buchade",
      Photo: "/assets/achievements/manas_mastek.jpeg",
    },
  };
  return (
    <div className="my-20">
      <h1
        className="font-larabieBold md:text-7xl text-4xl text-center text-[#00ffff] my-5 "
        data-aos="zoom-in"
      >
        Our Achievements
      </h1>
      <div className="flex flex-col space-y-10">
        {Object.keys(achievements).map((key, ind) => {
          return (
            <>
              {ind % 2 === 0 && (
                <AchievementsLeft
                  Event={achievements[key].Event}
                  Date={achievements[key].Date}
                  Describtion={achievements[key].Describtion}
                  Team={achievements[key].Team}
                  Photo={achievements[key].Photo}
                />
              )}
              {ind % 2 !== 0 && (
                <AchievementsRight
                  Event={achievements[key].Event}
                  Date={achievements[key].Date}
                  Describtion={achievements[key].Describtion}
                  Team={achievements[key].Team}
                  Photo={achievements[key].Photo}
                />
              )}
              {/* <AchievementsLeft
                Event={achievements[key].Event}
                Date={achievements[key].Date}
                Describtion={achievements[key].Describtion}
                Team={achievements[key].Team}
                Photo={achievements[key].Photo}
              /> */}
            </>
          );
        })}
      </div>
      <h1 className="font-larabie md:text-5xl text-4xl text-center text-[#00ffff] my-5 animate-pulse">
        And many more<span className="text-4xl typer">....</span>
      </h1>
    </div>
  );
};

export default OurAchievements;
