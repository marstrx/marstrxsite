import React from "react";
import jsCompiler from "../../assets/Projects/jsCompiler.webp";
import sentenceAnalyzer from "../../assets/Projects/sentenceAnalyzer.webp";


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
    },
    {
      id: 2,
      img: sentenceAnalyzer,
      des: "A fast online tool that counts words, characters, vowels, numbers and more instantly",
      name: "sentenceAnalyzer",
      tech: ["HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/marstrx/sentenceAnalyzer",
      demoLink: "https://marstrx.github.io/sentenceAnalyzer/",
    }
  ];

  return AllProject;
}

export default AllProjectsData;
