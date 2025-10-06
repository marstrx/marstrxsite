import React from "react";
import logo from "../../assets/Images/marstrx.png";
// import bgVideo from "../../assets/Images/vd.mp4";
import "./Home.css";
import linkdinLogo from "../../assets/Images/linkdin.png";
import githubLogo from "../../assets/Images/github.png";
import xLogo from "../../assets/Images/x.png";

function Home() {
  return (
    <div className="bg-gray-800 relative min-h-screen w-full text-white flex items-center justify-center overflow-hidden px-4 md:px-10">
      {/* <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      /> */}

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-12 max-w-6xl mx-auto text-center md:text-left">
        <div>
          <img
            className="w-36 md:w-48 lg:w-64 rounded"
            src={logo}
            alt="Marstrx logo"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold animated-gradient-text">
            Marouane Bachar
          </h1>
          <h3 className="text-lg md:text-2xl mt-2 animated-gradient-text">
            Full Stack Developer
          </h3>
          {/* socials */}

          <div className="flex flex-row gap-8 mt-7 transition duration-300 ease-in-out">
            <a
              href="https://www.linkedin.com/in/marouanebachar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[42px] transform transition-transform duration-300 hover:scale-110"
                src={linkdinLogo}
                alt="LinkedIn logo"
              />
            </a>

            <a
              href="https://github.com/marstrx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[37px] transform transition-transform duration-300 hover:scale-110"
                src={githubLogo}
                alt="GitHub logo"
              />
            </a>

            <a
              href="https://x.com/marstrx_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[37px] transform transition-transform duration-300 hover:scale-110"
                src={xLogo}
                alt="X logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
