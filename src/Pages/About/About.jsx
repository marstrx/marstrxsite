import React from "react";
// import logo from "../../assets/Images/marstrx.png";

function About() {
  return (
    <>
      <div className="bg-gray-700 min-h-screen pl-5 pr-5">
        <div className="text-white flex items-center flex-col gap-5">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold pt-4 md:pt-6 text-center md:text-left">
            About me
          </h1>
          <h2 class="text-lg sm:text-xl md:text-2xl pt-4 md:pt-6 max-w-3xl text-center mx-auto px-4">
            I'm a Full-Stack Web Developer passionate about building clean,
            fast, and scalable applications using modern web technologies.
          </h2>
        </div>

        {/*  about me paraghraph*/}
        <div className="flex">
            <div>

            </div>
          <p>
            I work mainly with JavaScript, React, PHP, and Laravel to create
            real solutions that deliver value and user satisfaction. I'm
            constantly improving my skills through personal projects,
            open-source contributions, and continuous learning. My goal is to
            grow as a software engineer and collaborate on impactful projects
            with teams who appreciate quality code, strong problem-solving, and
            creativity.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
