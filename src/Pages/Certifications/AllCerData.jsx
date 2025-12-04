import React from "react";
import freecodecampFrontEndLibrariesImg from "../../assets/certifications/freecodecampFrontEndLibraries.webp";
import IntroductiontoCybersecurity from "../../assets/certifications/IntroductiontoCybersecurity.webp";
import JavaScriptBasic from "../../assets/certifications/JavaScript(Basic).webp";
import SQLBasic from "../../assets/certifications/SQL(Basic).webp";
import SQLIntermediate from "../../assets/certifications/SQL(Intermediate).webp";
import WordPress from "../../assets/certifications/WordPress.webp";
import Cs50x from "../../assets/certifications/cs50x.webp";
import Nodejs from "../../assets/certifications/nodejs.webp";


function AllCerData() {
  const myCertifications = [
    {
      name: "Introduction to Computer Science",
      img: Cs50x,
      link: "https://cs50.harvard.edu/certificates/dd4f606f-6200-440f-bc4c-ac0a1256373c",
    },
    {
      name: "Introduction to Cybersecurity",
      img: freecodecampFrontEndLibrariesImg,
      link: "https://freecodecamp.org/certification/marstrx/front-end-development-libraries",
    },
    {
      name: "front end development libraries",
      img: IntroductiontoCybersecurity,
      link: "https://www.credly.com/badges/ccb94d59-00a4-402a-bd8a-06223459afc1",
    },
    {
      name: "Nodejs",
      img: Nodejs,
      link: "https://simpli-web.app.link/e/BmEziS58JYb",
    },
     {
      name: "JavaScript (Basic)",
      img: JavaScriptBasic,
      link: "https://www.hackerrank.com/certificates/b2f7f75db900",
    },
    {
      name: "SQL (Basic)",
      img: SQLBasic,
      link: "https://www.hackerrank.com/certificates/39c7400c482e",
    },
    {
      name: "SQL (Intermediate)",
      img: SQLIntermediate,
      link: "https://www.hackerrank.com/certificates/143c49ebbd4f",
    },
     {
      name: "Build a free website with WordPress",
      img: WordPress,
      link: "https://coursera.org/share/6bf4d5eeb1df3e07f7f7385fdea1f7f4",
    },
  ];

  return myCertifications;
}

export default AllCerData;
