import React from "react";
import freecodecampFrontEndLibrariesImg from "../../assets/certifications/freecodecampFrontEndLibraries.png";

function FreecodecampFrontEndLibraries() {
  return (
    <div className="w-96 flex-shrink-0">
      <div className="relative w-full h-64 cursor-pointer">
        <a href="https://freecodecamp.org/certification/marstrx/front-end-development-libraries">
          <img
            src={freecodecampFrontEndLibrariesImg}
            alt="front end development libraries"
            className="w-full h-full object-cover rounded-xl"
          />
        </a>
      </div>
    </div>
  );
}

export default FreecodecampFrontEndLibraries;
