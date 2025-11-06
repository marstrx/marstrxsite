import React from "react";
import logo from "../../assets/Images/marstrx.png";
// import bgVideo from "../../assets/Images/vd.mp4";
import "./Home.css";
import linkdinLogo from "../../assets/Images/linkdin.png";
import githubLogo from "../../assets/Images/github.png";
import xLogo from "../../assets/Images/x.png";

function Home() {
  return (
    <div className="bg-gray-800 min-h-screen pt-10 md:pt-20">
      <div className="relative w-full text-white flex items-center justify-center overflow-hidden py-12">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 max-w-6xl mx-auto text-center md:text-left px-4">
          <div>
            <img
              className="w-48 md:w-64 lg:w-80 rounded-lg"
              src={logo}
              alt="Marstrx logo"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animated-gradient-text">
              Marouane Bachar
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl mt-4 animated-gradient-text">
              Full Stack Developer
            </h3>

            {/* Social Links */}
            <div className="flex flex-row  gap-4 mt-8 transition duration-300 ease-in-out">
              <a
                href="https://www.linkedin.com/in/marouanebachar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-10 md:w-11 transform transition-transform duration-300 hover:scale-110"
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
                  className="w-9 md:w-10 transform transition-transform duration-300 hover:scale-110"
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
                  className="w-9 md:w-10 transform transition-transform duration-300 hover:scale-110"
                  src={xLogo}
                  alt="X logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="">
        <h2 className="text-lg sm:text-xl md:text-2xl max-w-3xl text-center mx-auto text-gray-200 leading-relaxed">
          I'm a Full-Stack Web Developer passionate about building clean, fast,
          and scalable applications using modern web technologies.
        </h2>
      </div>
    </div>
  );
}

export default Home;
