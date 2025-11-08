import React from "react";
import AllCerData from "./AllCerData";
import "tailwind-scrollbar";
function MyCertifs() {
  const certifications = AllCerData();

  return (
    <div
      className="overflow-x-auto "
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="flex gap-5 flex-nowrap">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-transform hover:scale-105"
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={cert.img}
                alt={`${cert.name} certification`}
                className="w-96 max-w-full h-auto object-cover rounded shadow-md mb-16 mt-16"
                loading="lazy"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCertifs;
