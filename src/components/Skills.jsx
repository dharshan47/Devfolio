import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss, SiPython, SiMysql, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <>
      <section id="Skills">
        <h1 className="flex justify-center font-bold  text-3xl mr-5 mt-3">
          Skills
        </h1>
        <div className="mt-5 mx-auto flex justify-center items-center bg-white shadow-xl rounded w-full max-w-[500px] p-3">
          <ul className="flex flex-row justify-center items-center flex-wrap gap-4 font-semibold">
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1 ">
              <FontAwesomeIcon
                icon={faHtml5}
                className="text-3xl text-orange-600"
              />
              <span>HTML</span>
            </li>
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="text-3xl text-blue-600"
              />
              <span>CSS</span>
            </li>
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1">
              <FontAwesomeIcon
                icon={faJs}
                className="text-3xl text-yellow-400"
              />
              <span className="ml-0.5">Javascript</span>
            </li>
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1">
              <SiTailwindcss className="text-3xl text-cyan-500" />
              <span className="ml-1.5">Tailwind CSS</span>
            </li>
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1">
              <FontAwesomeIcon
                icon={faReact}
                className="text-3xl text-sky-400"
              />
              <span className="ml-0.5">React</span>
            </li>
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1">
              <SiPython className="text-3xl text-blue-500" />
              <span className="ml-1.5">Python</span>
            </li>
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1">
              <SiMysql className="text-4xl text-blue-700 " />
              <span className="ml-1.5">Mysql</span>
            </li>
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1">
              <SiTypescript className="text-3xl text-blue-500" />
              <span className="ml-1.5">Typescript</span>
            </li>
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl text-black"
              />
              <span className="ml-0.5">Github</span>
            </li>
            <li className="flex justify-center items-center border-1 border-blue-600 rounded-lg p-1 ">
              <VscVscode className="text-3xl text-[#007ACC]" />
              <span className="ml-0.5">VS Code</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
