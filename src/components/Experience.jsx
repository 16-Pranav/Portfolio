import React from "react";
import { assets } from "../assets/assets";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiGit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { TbBrandFigma } from "react-icons/tb";
import { FaAndroid } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";

const Experience = () => {
  // techStack icons:
  const techStackIcons = [
    [
      <FaReact
        className="text-3xl animate-spin text-blue-400"
        style={{ animationDuration: "10s" }}
      />,
      "ReactJs",
    ],
    [<FaJava className="text-3xl text-blue-300" />, "Java"],
    [<SiMongodb className="text-3xl text-green-600" />, "MongoDB"],
    [<FaNodeJs className="text-3xl text-green-500" />, "NodeJs"],
    [<FaPython className="text-3xl text-blue-500" />, "Python"],
    [<SiGit className="text-3xl text-orange-600" />, "Git"],
    [<FaGithub className="text-3xl " />, "GitHub"],
    [<FaFlutter className="text-3xl text-blue-300" />, "Flutter"],
    [<SiPostman className="text-3xl text-orange-500" />, "Postman"],
    [<TbBrandFigma className="text-3xl text-purple-500" />, "Figma"],
    [<FaAndroid className="text-3xl text-green-700" />, "Android"],
    [<LuBrainCircuit className="text-3xl text-blue-600" />, "Machine Learning"],
  ];

  return (
    <div className="p-4 md:p-10" id="experience">
      <div className="">
        <h1 className="text-5xl font-bold text-center">Work Experience</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-10">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-semibold max-w-2xl">
            Software Development Intern
          </h2>
          <h2 className="text-2xl font-semibold mt-5">Mphasis</h2>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mt-2">
            <h2>Feb-May, 2025</h2>
            <h2>Bengaluru, India</h2>
          </div>

          <h2 className="mt-5 mb-5 font-semibold">Tech Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
            {techStackIcons.map((icon, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-center">{icon[0]}</span>
                <span className="mt-2 text-center text-sm">{icon[1]}</span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-lg max-w-[56rem] text-justify">
            Designed and developed a real-time Android application for vehicle
            number plate detection, integrating a machine learning model
            (TensorFlow Lite), GPS-based vehicle tracking, and a MongoDB backend
            for data storage. Collaborated in a 3-member Agile team, actively
            contributing to daily standups, sprint planning, and all phases of
            the Software Development Life Cycle (SDLC), including requirement
            gathering, architecture design, and test documentation.
          </p>
        </div>
        <img
          src={assets.mphasisLogo}
          alt=""
          className="max-h-[20vh] lg:max-h-[30vh] p-5"
        />
      </div>
    </div>
  );
};

export default Experience;
