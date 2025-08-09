import React from "react";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="mt-3 bg-gray-200 flex-col flex justify-center items-center gap-1">
        <div className="text-blue-500 font-bold">
          <h1 className="text-2xl">Dharshan M</h1>
        </div>
        <div className=" text-xl font-semibold flex justify-center items-center gap-4 cursor-pointer">
          <a href="#About">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </div>
        <div className="flex justify-center items-center gap-4 mb-1 mt-1 cursor-pointer">
          <a
            href="mailto:dharshan0747@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="text-2xl text-[#D14836]" />
          </a>
          <a
            href="https://www.linkedin.com/in/dharshan47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="text-2xl text-[#0077B5]" />
          </a>
          <a
            href="https://github.com/dharshan47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl text-black" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
