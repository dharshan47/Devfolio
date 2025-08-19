import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <section id="about"></section>
      <section id="skills"></section>
      <section id="contact"></section>
      <Footer />
    </div>
  );
};

export default Home;
