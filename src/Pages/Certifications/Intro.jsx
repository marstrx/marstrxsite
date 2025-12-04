import React from "react";

function Intro() {
  return (
    <>
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center mb-6 md:mb-8 my-12">
        certifications
      </h2>
      <p
        className="text-lg md:text-xl text-gray-300 text-center leading-relaxed mx-auto 
                   bg-gray-800 rounded-2xl p-6 md:p-8 border
                     transition-all duration-300 rotate-x-6"
      >
        During my journey as a developer, I've continuously expanded my
        knowledge and skills, earning these valuable certifications that
        validate my expertise in modern web technologies.
      </p>
    </>
  );
}

export default Intro;
