import React from "react";
import jsCompiler from "../../assets/Projects/jsCompiler.webp";


function AllProjectsData() {
  const AllProject = [
    {
      id: 1,
      img: jsCompiler,
      des: "An online tool to run JavaScript code instantly in your browser. No setup, no downloads just code and go!",
      name: "JsCompiler",
      tech: ["reactjs", "hooks", "APIs", "Tailwind"],
      githubLink: "https://github.com/marstrx/js-Compiler",
      demoLink: "https://marstrx.github.io/js-Compiler/",
    }
  ];

  return AllProject;
}

export default AllProjectsData;
