import React from "react";

function AllProjectsData() {
  const AllProject = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnao_vWcQrpTOcbNYUPsOufBqS9g4xhz9eA&s",
      des: "An online tool to run JavaScript code instantly in your browser. No setup, no downloads just code and go!",
      name: "JsCompiler",
      tech: ["reactjs", "hooks", "APIs", "Tailwind"],
      githubLink: "https://github.com/marstrx/js-Compiler",
      demoLink: "https://marstrx.github.io/js-Compiler/",
    },
    {
      id: 2,
      img: "",
      des: "A productivity app for managing daily tasks with drag and drop functionality and due date tracking.",
      name: "TaskManager",
      tech: ["reactjs", "context", "localStorage", "CSS3"],
      githubLink: "",
      demoLink: "",
    },
    {
      id: 3,
      img: "",
      des: "Real-time weather application with location detection and 5-day forecast using weather API integration.",
      name: "WeatherApp",
      tech: ["reactjs", "API", "geolocation", "charts"],
      githubLink: "",
      demoLink: "",
    },
    {
      id: 4,
      img: "",
      des: "Full-stack e-commerce platform with shopping cart, user authentication, and payment integration.",
      name: "E-Commerce Store",
      tech: ["reactjs", "nodejs", "mongodb", "stripe"],
      githubLink: "",
      demoLink: "",
    },
  ];

  return AllProject;
}

export default AllProjectsData;
