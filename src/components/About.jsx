import React from "react";
import Typetext from "./Typetext";

const About = () => {
  return (
    <>
    <section id="About">
      <div className=" text-2xl sm:text-4xl text-center flex justify-center mt-[55px]">
        <h1 className="my-2 font-semibold">Hi,I am</h1>
        <span className=" text-4xl sm:text-5xl text-blue-500 font-extrabold mx-1 sm:mx-2">
          Dharshan
        </span>
      </div>
        <Typetext phrases = {["Web Developer","Front End Developer","React Developer"]}/>
        </section>
    </>
  );
};

export default About;
