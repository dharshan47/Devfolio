import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <NavBar />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
