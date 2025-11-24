import React from "react";
import Header from "../Layouts/Header/Header.jsx";
import Home from "./../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";
import Projects from "../Pages/Projects/Projects.jsx";
import Github from "../Pages/Github/Github.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Footer from "../Layouts/Footer/Footer.jsx";
import ScrollBar from "../Pages/GlobalStyles/ScrollBar.jsx";
function AppRoutes() {
  return (
    <>
      <ScrollBar />
      <Header />
      <Home />
      <About />
      <Projects />
      <Github />
      <Contact />
      <Footer />
    </>
  );
}

export default AppRoutes;
