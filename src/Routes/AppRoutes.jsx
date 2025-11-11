import React from 'react';
import Header from "../Layouts/Header/Header.jsx";
import Home from "./../Pages/Home/Home.jsx";
import About from '../Pages/About/About.jsx';
import Projects from "../Pages/Projects/Projects.jsx";
import Github from "../Pages/Github/Github.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
function AppRoutes() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Github/>
    <Contact/>
    </>

  )
}

export default AppRoutes