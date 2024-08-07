import React from "react";
import TeamMembers from "./TeamMembers";

const obj1 = {
  // Dhruv: {
  //   Image: "/assets/allmembers/ShubhamGS.jpg",
  //   Role: "General Secretary",
  //   Name: "Dhruv Bhanushali",
  //   Email: "dhruvchandra01.dc@gmail.com",
  //   Github: "https://github.com/dhruv-bhanushali",
  //   Linkedin: "https://www.linkedin.com/in/dhruv-bhanushali-1801",
  //   Instagram: "https://www.instagram.com/_.dhru_vv._/",
  // },
  // Deep: {
  //   Image: "/assets/allmembers/Nandini.jpg",
  //   Role: "President",
  //   Name: "DEEP SHELKE",
  //   Email: "shelkedeep0404@gmail.com",
  //   Github: "https://github.com/DEEP2925",
  //   Linkedin: "https://www.linkedin.com/in/deep-shelke-516061b3/",
  //   Instagram: "https://www.instagram.com/deepshelke_/",
  // },
  // Nirmiti: {
  //   Image: "/assets/allmembers/Nirmiti.jpg",
  //   Role: "Co-General Secretary",
  //   Name: "Nirmiti Bhoir",
  //   Email: "purvi.b2001@gmail.com",
  //   Github: "https://github.com/The-CoffeeCraver",
  //   Linkedin: "https://www.linkedin.com/in/nirmiti-bhoir-b22b671bb/",
  //   Instagram: "https://www.instagram.com/_nirmitibhoir/",
  // },
  // Manas: {
  //   Image: "/assets/allmembers/Manas.jpg",
  //   Role: "Convenor",
  //   Name: "Manas Buchade",
  //   Email: "manas.buchade@gmail.com",
  //   Github: "https://github.com/manasb15",
  //   Linkedin: "https://www.linkedin.com/in/thisismanas/",
  //   Instagram: "https://www.instagram.com/just_fa._.cough_/",
  // },
  // AthangB: {
  //   Image: "/assets/allmembers/AthangB.jpg",
  //   Role: "Co-Convenor",
  //   Name: "Athang Bhandarkar",
  //   Email: "bhandarkarathang@gmail.com",
  //   Github: "https://github.com/Athang9",
  //   Linkedin: "https://www.linkedin.com/in/athang-bhandarkar-0048761a9/",
  //   Instagram: "https://www.instagram.com/_athang__/",
  // },
  // Snehal: {
  //   Image: "/assets/allmembers/Snehal.jpg",
  //   Role: "Treasurer",
  //   Name: "Snehal Lavangare",
  //   Email: "snehallavangare19@gmail.com",
  //   Github: "https://github.com/Snehal193",
  //   Linkedin: "https://www.linkedin.com/in/snehal-lavangare-2253231b5/",
  // },
  // Ishika: {
  //   Image: "/assets/allmembers/Ishika.jpg",
  //   Role: "Treasurer",
  //   Timestamp: "10/6/2022 17:21:35",
  //   Name: "Ishika More",
  //   Email: "morechiku2001@gmail.com",
  //   Github: "https://github.com/ishika-debug",
  //   Linkedin: "https://www.linkedin.com/in/ishika-more-831732213",
  //   Instagram: "https://www.instagram.com/chikuu_2310/",
  // },
  // Aarushi: {
  //   Image: "/assets/allmembers/Aarushi.jpg",
  //   Role: "Lady Representative",
  //   Name: "Aarushi Das",
  //   Email: "aarushidas.mumbai@gmail.com",
  //   Github: "https://github.com/iamaarushidas",
  //   Linkedin: "https://www.linkedin.com/in/aarushi-das-b48a291bb",
  // },
  // Rohan: {
  //   Image: "/assets/allmembers/Rohan.jpg",
  //   Role: "Event Head",
  //   Name: "Rohan Chaudhari",
  //   Email: "chaudharirohan24@gmail.com",
  //   Github: "github.com/https://gitlab.com/rohan2424",
  //   Linkedin: "https://www.linkedin.com/in/rohan-chaudhari-11241b202",
  //   Instagram:
  //     "https://www.instagram.com/invites/contact/?i=1r2rcmf527wtb&utm_content=2mao0gt",
  // },
  // Mohan: {
  //   Image: "/assets/allmembers/Mohan.jpg",
  //   Role: "Sponsorship Head",
  //   Name: "Mohan Vethekar",
  //   Email: "mohanvethekar336699@gmail.com",
  // },
  // Pratham: {
  //   Image: "/assets/allmembers/Pratham.jpg",
  //   Role: "Co-Sponsorship Head",
  //   Name: "Pratham Mandavkar",
  //   Email: "prathammandavkar96@gmail.com",
  //   Github: "https://github.com/PrathamOp",
  //   Linkedin: "https://www.linkedin.com/in/pratham-mandavkar-041985214/",
  //   Instagram: "https://www.instagram.com/_pratham.xd_/",
  // },
  // Maulya: {
  //   Image: "/assets/allmembers/Maulya.jpg",
  //   Role: "Cultural Head",
  //   Name: "Maulya Shetty",
  //   Email: "maulyashetty710@gmail.com",
  //   Github: "https://github.com/maulya230",
  //   Linkedin: "https://www.linkedin.com/in/maulya-shetty-8b6301216/",
  //   Instagram: "https://www.instagram.com/maulyashetty7/",
  // },
  // Saumya: {
  //   Image: "/assets/allmembers/Saumya.jpg",
  //   Role: "Co-Cultural Head",
  //   Name: "Saumya Prasad",
  //   Email: "saumya.prasad460@gmail.com",
  //   Github: "https://github.com/saumya07p",
  //   Linkedin: "https://www.linkedin.com/in/saumyap07/",
  //   Instagram: "https://www.instagram.com/saumya._.prasad/",
  // },
  // Shruti: {
  //   Image: "/assets/allmembers/Shruti.jpg",
  //   Role: "Co-Cultural Head",
  //   Name: "Shruti Pandey",
  //   Email: "pandeyshruti1062001@gmail.com",
  //   Github: "https://github.com/Shrutipandey10",
  //   Linkedin: "https://www.linkedin.com/in/shruti-pandey-ba8316216/",
  //   Instagram: "https://www.instagram.com/_.shrutiiiii/",
  // },
  // Prajna: {
  //   Image: "/assets/allmembers/Prajna.jpg",
  //   Role: "Design Head",
  //   Name: "Prajna Puthran",
  //   Email: "prajna2572001@gmail.com",
  //   Linkedin: "https://www.linkedin.com/in/prajna-puthran-7a71b4213/",
  //   Instagram: "https://www.instagram.com/prajnaaa__/",
  // },
  // Aniket: {
  //   Image: "/assets/allmembers/Aniket.jpg",
  //   Role: "Co-Design Head",
  //   Name: "Aniket Shelake",
  //   Email: "shelakeaniket11@gmail.com",
  //   Github: "https://www.github.com/shelakeaniket11",
  //   Instagram: "https://www.instagram.com/aniket.shelake_/",
  // },
  // Atharvi: {
  //   Image: "/assets/allmembers/Atharvi.jpg",
  //   Role: "Co-Design Head",
  //   Name: "Atharvi Nair",
  //   Email: "atharvinair3690@gmail.com",
  //   Github: "https://github.com/atharvi06",
  //   Linkedin: "https://www.linkedin.com/in/atharvi-nair-a5b1b2216/",
  //   Instagram: "https://www.instagram.com/atharvi_01/",
  // },
  // Tanmay: {
  //   Image: "/assets/allmembers/Tanmay.jpg",
  //   Role: "Publicity Head",
  //   Name: "Tanmay",
  //   Email: "tanmaysalunkhe09@gmail.com",
  //   Github: "https://github.com/TANMAY12346789",
  //   Linkedin: "https://www.linkedin.com/in/tanmay-salunkhe-1aa881194/",
  //   Instagram: "https://www.instagram.com/salunkhetanmay1004/",
  // },
  // Prem: {
  //   Image: "/assets/allmembers/Prem.jpg",
  //   Role: "Co-Publicity Head",
  //   Name: "Prem Tatkari",
  //   Email: "tatkariprem6801@gmail.com",
  //   Instagram: "http://instagram.com/_never_settle_007_",
  // },
  // Amshitha: {
  //   Image: "/assets/allmembers/Amshitha.jpg",
  //   Role: "Co-Publicity Head",
  //   Name: "Amshitha Nair",
  //   Email: "amshithanair0@gmail.com",
  //   Github: "https://github.com/Amshitha-Nair",
  //   Linkedin: "https://www.linkedin.com/in/amshitha-nair-9580b5215",
  //   Instagram: "https://www.instagram.com/amshithanair/",
  // },
  // Vrushali: {
  //   Image: "/assets/allmembers/Vrushali.jpg",
  //   Role: "Co-Publicity Head",
  //   Name: "Vrushali Paul",
  //   Email: "vrushalipaul02@gmail.com",
  //   Github: "https://github.com/vrushalipaul",
  //   Linkedin: "https://www.linkedin.com/in/vrushali-paul-7b7735230",
  //   Instagram: "https://instagram.com/__.vrush.__?igshid=ZmZhODViOGI=",
  // },
  // Harshal: {
  //   Image: "/assets/allmembers/Harshal.jpg",
  //   Role: "Sports Head",
  //   Name: "Harshal Rane",
  //   Email: "harshalrane114@gmail.com",
  //   Github: "https://github.com/HarshalRaneHR",
  //   Linkedin: "https://www.linkedin.com/in/harshal-rane-009916227",
  //   Instagram: "https://www.instagram.com/r.a.n.e___xx/",
  // },
  // Sagar: {
  //   Image: "/assets/allmembers/Sagar.jpg",
  //   Role: "Co-Sports Head",
  //   Name: "Sagar Patil",
  //   Email: "sagarpatil1917118@gmail.com",
  //   Github: "https://github.com/S-a-g-a-r-P-a-t-i-l",
  //   Linkedin: "https://www.linkedin.com/in/sagar-patil-2b377b202",
  //   Instagram: "https://www.instagram.com/s_a_g_a_r__p_a_t_i_l_/",
  // },
  // Shubham: {
  //   Image: "/assets/allmembers/Shubham.jpg",
  //   Role: "Co-Sports Head",
  //   Name: "Shubham Shivekar",
  //   Email: "shubhamshivekar22@gmail.com",
  //   Github: "https://github.com/shubhamshivekar",
  //   Linkedin: "https://www.linkedin.com/in/shubham-shivekar-114903245",
  //   Instagram: "https://instagram.com/shubham_shivekar?igshid=ZmZhODViOGI=",
  // },
  // AthangP: {
  //   Image: "/assets/allmembers/AthangP.jpg",
  //   Role: "Social Media Head",
  //   Name: "Athang Patil",
  //   Email: "athangp2002@gmail.com",
  //   Linkedin: "https://www.linkedin.com/mwlite/in/athang-patil",
  //   Instagram: "https://www.instagram.com/athang_patil/",
  // },
  ShubhamGS: {
    Image: "/assets/allmembers23/ShubhamGS.jpg",
    Role: "General Secretary",
    Name: "Shubham Pawar",
    Email: "shubhampawar00007@gmail.com",
    Github: "https://github.com/shubham3700",
    Linkedin: "https://www.linkedin.com/in/shubham-pawar-9a8756247/",
    Instagram: "https://www.instagram.com/_shubhhhhh_/",
  },
  Sahil: {
    Image: "/assets/allmembers23/PisalSahil.jpg",
    
    Role: "Co-General Secretary",
    Name: "Sahil Pisal",
    Email: "pisalsahil3105@gmail.com",
    Github: "https://github.com/SAHILPISAL3105",
    Linkedin: "https://www.linkedin.com/in/sahil-pisal-104b1a196/",
    Instagram: "https://www.instagram.com/_sahil_pisal.31?igsh=YXdvZnJoaHdwemE1&utm_source=qr",
  },
  Pranav: {
    Image: "/assets/allmembers23/Pranav.jpg",
    Role: "Convenor",
    Name: "Pranav Patil",
    Email: "pp294132@gmail.com",
    // Github: "https://github.com/The-CoffeeCraver",
    Linkedin: "https://www.linkedin.com/in/pranav-patil-423a47248/",
    Instagram: "https://www.instagram.com/pranav__5222/",
  },
  Yash: {
    Image: "/assets/allmembers23/Yash.jpg",
    Role: "Co-Convenor",
    Name: "Yash Bhosle",
    Email: "yashbhosale3568@gmail.com",
    Github: "https://github.com/Yash1050",
    Linkedin: "http://www.linkedin.com/in/yashb19/",
    Instagram: "https://www.instagram.com/_yaasshh33__/",
  },
  Dhiraj: {
    Image: "/assets/allmembers23/Dhiraj_P.jpg",
    Role: "Treasurer",
    Name: "Dhiraj Phalak ",
    Email: "dhirajphalak123@gmail.com",
    Github: "https://github.com/Dhirajphalak",
    Linkedin: "https://www.linkedin.com/in/dhiraj-phalak-b43611247/",
    Instagram: "https://www.instagram.com/dhirajphalak16?igsh=bGpzZm41NGNhYzA3",
  },
  Pawan: {
    Image: "/assets/allmembers23/Pawan.jpg",
    Role: "Treasurer",
    Name: "Pawan Nemane",
    Email: "snehallavangare19@gmail.com",
    Github: "https://github.com/Pawan051002",
    Linkedin: "https://www.linkedin.com/in/pawan-nemane",
    Instagram: "https://www.instagram.com/pawan_nemane?igsh=MTFzaDk2M2NkZm1sbg==",

  },
  Varad: {
    Image: "/assets/allmembers23/Varad.jpg",
    Role: "Event Head",
    // Timestamp: "10/6/2022 17:21:35",
    Name: "Varad Yelamkar",
    Email: "varadyelamkar16@gmail.com",
    Github: "https://github.com/BubbleeTea",
    Linkedin: "https://www.linkedin.com/in/varad-yelamkar",
    Instagram: "https://www.instagram.com/varadyelamkar",
  },
  Ananya: {
    Image: "/assets/allmembers23/Ananya.jpg",
    Role: "Lady Representative",
    Name: "Ananya Vichare",
    Email: "aarushidas.mumbai@gmail.com",
    // Github: "https://github.com/iamaarushidas",
    // Linkedin: "https://www.linkedin.com/in/aarushi-das-b48a291bb",
  },
  Vinayak: {
    Image: "/assets/allmembers23/Vinayak.jpg",
    Role: "Documentation Head",
    Name: "Vinayak Revdekar",
    Email: "revdekarvinayak54@gmail.com",
    // Github: "github.com/https://gitlab.com/rohan2424",
    Linkedin: "https://www.linkedin.com/in/vinayak-revdekar-451988215/",
    Instagram:
      "https://www.instagram.com/vinayak_1601/?hl=en",
  },
  Pabha: {
    Image: "/assets/allmembers23/Pabha.jpg",
    Role: "Documentation Head",
    Name: "Pabha Jadhav",
    Email: "it.a.38.pabha.jadhav@gmail.com",
    Instagram:"https://www.instagram.com/___mauve_?igsh=MXAxc3Q2dnY2d2t4eA%3D%3D",
    Linkedin: "https://www.linkedin.com/in/pabhajadhav"
  },
  Tanisha: {
    Image: "/assets/allmembers23/Tanisha.jpg",
    Role: "Cultural Head",
    Name: "Tanisha Thape ",
    Email: "it.b.54.tanisha.thape@gmail.com",
    // Github: "https://github.com/PrathamOp",
    Linkedin: "www.linkedin.com/in/tanisha-thape-566942248",
    Instagram: "https://www.instagram.com/tanisha_thape/",
  },
  Snehal: {
    Image: "/assets/allmembers23/Snehal.jpg",
    Role: "Co-Cultural Head",
    Name: "Snehal Morbale",
    Email: "morbalesnehal@gmail.com",
    Github: "https://github.com/Snehalmorbale",
    Linkedin: "https://www.linkedin.com/in/snehalmorbale",
    Instagram: "https://www.instagram.com/snehal.morbale?igsh=ZTEyYzVxenh6aTYw&utm_source=qr",
  },
  Aditya: {
    Image: "/assets/allmembers23/AdityaSawant.jpg",
    Role: "Design Head",
    Name: "Aditya Sawant",
    Email: "adityaswt181830@gmail.com",
    Github: "https://github.com/miigwech",
    Linkedin: "https://www.linkedin.com/in/aditya-sawant-98a877205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    Instagram: "https://www.instagram.com/adityaa.sawant?igsh=bWl2azVhMDB6b3pn",
  },
  Ritesh: {
    Image: "/assets/allmembers23/Ritesh.jpg",
    Role: "Co-Design Head",
    Name: "Ritesh Shekar",
    Email: "riteshvshekhar06@gmail.com",
    Github: "https://github.com/ritesh0606",
    Linkedin: "https://www.linkedin.com/in/ritesh-shekhar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    Instagram: "https://www.instagram.com/ritesh__06?igsh=MWhjdzYxNzBvNjg5Yw%3D%3D&utm_source=qr",
  },
  Pratik: {
    Image: "/assets/allmembers23/Pratik.jpg",
    Role: "Sports Head",
    Name: "Pratik Sapale ",
    Email: "pratiksapale1952002@gmail.com",
    // Github: "https://github.com/saumya07p",
    // Linkedin: "https://www.linkedin.com/in/saumyap07/",
    Instagram: "https://www.instagram.com/pratik_sapale_2974?igsh=MTJ1MHN0eTBhNTl5NA==",
  },
  SahilD: {
    Image: "/assets/allmembers23/SahilD.jpg",
    Role: "Sponsorship Head",
    Name: "Sahil Durgude",
    Email: "it.a.23.sahil.durgude@gmail.com",
    Github: "https://github.com/sxhil",
    Linkedin: "https://www.linkedin.com/in/sahil-durgude-b41790158",
    Instagram: "https://www.instagram.com/sxhil.zz?igsh=MThqcDRhZzA4MWx5bA==",
  },
  Kunal: {
    Image: "/assets/allmembers23/Kunal.jpg",
    Role: "Social-Media Head",
    Name: "Kunal Gosavi",
    Email: "kunalgosavi106@gmail.com",
    Linkedin: "https://www.linkedin.com/in/kunal-gosavi-56a143248/",
    Instagram: "https://www.instagram.com/_.kunal.09?igsh=MWZoM3ViaHZ0M2R3eg==",
  },
  Sarvesh: {
    Image: "/assets/allmembers23/sarvesh.jpg",
    Role: "Publicity Head",
    Name: "Sarvesh More",
    Email: "more5362@gmail.com",
    // Github: "https://www.github.com/shelakeaniket11",
    // Instagram: "https://www.linkedin.com/in/sarvesh-more-4425ab247/",
    Linkedin: "https://www.linkedin.com/in/sarvesh-more-4425ab247/",

  },
  Vaishnavi: {
    Image: "/assets/allmembers23/Vaishnavi.jpg",
    Role: "Publicity Head",
    Name: "Vaishnavi Gaikwad",
    Email: "it.a.27.vaishnavi.gaikwad@gmail.com",
    Github: "https://github.com/VaishnaviGaikwad23",
    Instagram: "https://www.instagram.com/vaishupatil.23/",
    Linkedin: "https://www.linkedin.com/in/vaishnavi-gaikwad-0b798a215",

  },

};

const obj2 = {
  Hrushabh: {
    Image: "/assets/allmembers23/HrushabhP.jpg",
    Role: "TECH-GITS Head",
    Name: "Hrushabh Patade",
    Email: "phrushabh13@gmail.com",
    Github: "https://github.com/HrushabhPatade",
    Linkedin: "https://www.linkedin.com/in/hrushabh-patade-218346219/",
    Instagram: "https://www.instagram.com/_hp_1302/",
  },
  Ganesh: {
    Image: "/assets/allmembers23/Ganesh.jpg",
    Role: "TECH-GITS Member",
    Name: "Ganesh Padval",
    Email: "ganesh26padval@gmail.com",
    Github: "github.com/ganupadval/",
    Linkedin: "https://www.linkedin.com/in/ganesh-padval/",
    Instagram: "https://www.instagram.com/ganesh_padval/",
  },
  Sameer: {
    Image: "/assets/allmembers23/Sameer.jpg",
    Role: "TECH-GITS Member",
    Name: "Sameer Narkhede",
    Email: "it.b.15.sameer.narkhede@gmail.com",
    Github: "https://github.com/s-ameer",
    Linkedin: "https://www.linkedin.com/in/sameer-narkhede-279b73221/",
    Instagram: "https://www.instagram.com/sameer942002/",

  },
  Omkar: {
    Image: "/assets/allmembers23/OmkarKale.jpeg",
    Role: "TECH-GITS Member",
    Name: "Omkar Kale",
    Email: "it.a.46.omkar.kale@gmail.com",
    Github: "https://github.com/Omkar-2003",
    Linkedin: "https://www.linkedin.com/in/omkar-kale-329655211/",
    Instagram: "https://www.instagram.com/omiii_zzz/",
  },
  Atharva: {
    Image: "/assets/allmembers23/Atharva.jpg",
    Role: "TECH-GITS Member",
    Name: "Atharva Mathure",
    Email: "atharvamathure@gmail.com",
    Github: "https://github.com/AtharvaMathure",
    Linkedin: "https://www.linkedin.com/in/atharva-mathure/",
    Instagram: "https://www.instagram.com/atharva166?igsh=NXN5azBwMmRodHBm",
  },
  Murnal: {
    Image: "/assets/allmembers23/Mrunal.jpg",
    Role: "TECH-GITS Member",
    Name: "Mrunal Thakur",
    Email: "Mrunalu.thakur@gmail.com",
    Github: "https://github.com/mrunal3996",
    Linkedin: "www.linkedin.com/in/mrunal-thakur-6201b91b2",
    Instagram: "https://www.instagram.com/piyu._.24/?hl=en",
  },
  Aditya_Raj: {
    Image: "/assets/allmembers23/AdityaRaj.jpg",
    Role: "TECH-GITS Member",
    Name: "Aditya Raj",
    Email: "gits@dmce.ac.in",
    Github: "https://github.com/11adi",
    Linkedin: "https://www.linkedin.com/in/aditya-raj-tiwari-985927215/",
    Instagram:"https://www.instagram.com/be_adi11?igsh=MTB6eHYwNGxqczM4dg==",
  },
};
const Team = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-20"
      data-aos="zoom-in"
    >
      <h1 className="font-larabieBold text-7xl text-center text-[#00ffff] md:my-5">
        OUR TEAM
      </h1>
      <div className="flex flex-wrap justify-center items-center ">
        {Object.keys(obj1).map((key) => {
          return (
            <div className="mx-5 my-5">
              <TeamMembers
                name={obj1[key].Name}
                role={obj1[key].Role}
                insta={obj1[key].Instagram}
                linkedin={obj1[key].Linkedin}
                github={obj1[key].Github}
                email={obj1[key].Email}
                image={obj1[key].Image}
              />
            </div>
          );
        })}
      </div>
      <h1 className="font-larabie text-7xl text-center text-[#00ffff] md:my-5">
        TECH-GITS
      </h1>
      <div className="flex flex-wrap justify-center items-center ">
        {Object.keys(obj2).map((key) => {
          return (
            <div className="mx-5 my-5 ">
              <TeamMembers
                name={obj2[key].Name}
                role={obj2[key].Role}
                insta={obj2[key].Instagram}
                linkedin={obj2[key].Linkedin}
                github={obj2[key].Github}
                email={obj2[key].Email}
                image={obj2[key].Image}
              />
            </div>
          );
        })}
      </div>
      {/* <h1 className="font-larabieBold text-7xl text-center text-[#00ffff] md:my-5">
        Coming Soon ...
      </h1>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
    </div>
  );
};

export { obj1, obj2 };
export default Team;