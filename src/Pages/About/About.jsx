import React from "react";
// import logo from "../../assets/Images/marstrx.png";
import Tools from "../Skills/Tools";
import Databases from "../Skills/Databas";
import BackEnd from "../Skills/BackEnd";
import FrontEnd from "../Skills/FrontEnd";
import Intro from "../Certifications/Intro";
import MyCertifs from "../Certifications/MyCertifs";

function About() {
  return (
    <>
      <div id="about" className="bg-gray-700 min-h-screen pl-5 pr-5">
        <div className="text-white flex items-center flex-col gap-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-4 md:pt-6 text-center">
            About me
          </h2>
        </div>

        {/*  about me paraghraph*/}
        <div className="flex justify-center items-center border-2 rounded rotate-2 shadow-lg p-6 m-6 bg-gray-800 text-white gap-4 flex-col md:flex-row">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </div>
          <p>
            I work mainly with JavaScript, React, NodeJs to create real
            solutions that deliver value and user satisfaction. I'm constantly
            improving my skills through personal projects, open-source
            contributions, and continuous learning. My goal is to grow as a
            software engineer and collaborate on impactful projects with teams
            who appreciate quality code, strong problem-solving, and creativity.
          </p>
        </div>
        {/* ends of about me */}

        {/* skills */}
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center mb-6 md:mb-8 sticky top-40">
            Skills
          </h2>

          <div>
            {/* Front End */}
            <FrontEnd />

            {/* Backend */}
            <BackEnd />

            {/* databases */}
            <Databases />

            {/* Tools */}
            <Tools />
          </div>
        </div>
        {/* Ends of skills */}

        {/* certifications Intro*/}
        <Intro />
        {/* certifications Cars */}
        <MyCertifs />
      </div>
    </>
  );
}

export default About;
