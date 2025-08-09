import React from 'react';
import logo from "../../assets/Images/marstrx.png";
import bgVideo from "../../assets/Images/vd.mp4";
import "./Home.css";

function Home() {
  return (
    <div className="relative min-h-screen w-full text-white flex items-center justify-center overflow-hidden px-4 md:px-10">

      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto text-center md:text-left">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
