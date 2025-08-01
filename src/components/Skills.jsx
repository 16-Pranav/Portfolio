import React from "react";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { Code, Database, Layers, Wrench } from "lucide-react";
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAppwrite } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";
import { SiNetlify } from "react-icons/si";

const Skills = () => {
  // Skills Data:
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "",
      skills: [
        {
          name: "Java",
          logo: FaJava,
          logoColor: "text-blue-300",
        },
        {
          name: "Python",
          logo: FaPython,
          logoColor: "text-blue-600",
        },
        {
          name: "JavaScript",
          logo: IoLogoJavascript,
          logoColor: "text-yellow-500",
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "",
      skills: [
        {
          name: "ReactJs",
          logo: FaReact,
          logoColor: "text-blue-500 animate-spin",
          animationStyle: { animationDuration: "10s" },
        },
        {
          name: "Node.js",
          logo: FaNodeJs,
          logoColor: "text-green-500",
        },
        {
          name: "Express.js",
          logo: SiExpress,
          logoColor: "text-yellow-500",
        },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "",
      skills: [
        {
          name: "MongoDB",
          logo: SiMongodb,
          logoColor: "text-green-600",
        },
        {
          name: "SQL",
          logo: FaDatabase,
          logoColor: "text-blue-400",
        },
        {
          name: "Firebase",
          logo: IoLogoFirebase,
          logoColor: "text-orange-500",
        },
        {
          name: "Appwrite",
          logo: SiAppwrite,
          logoColor: "text-pink-500",
        },
      ],
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      color: "",
      skills: [
        {
          name: "Git",
          logo: SiGit,
          logoColor: "text-orange-600",
        },
        {
          name: "GitHub",
          logo: FaGithub,
          logoColor: "text-white",
        },
        {
          name: "Postman",
          logo: SiPostman,
          logoColor: "text-orange-500",
        },
        {
          name: "Vercel",
          logo: RiVercelFill,
          logoColor: "text-white",
        },
        {
          name: "Netlify",
          logo: SiNetlify,
          logoColor: "text-blue-400",
        },
      ],
    },
  ];

  return (
    <div className="p-4 md:p-10" id="skills">
      <h1 className="text-5xl font-bold text-center">Skills</h1>

      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 sm:p-10 rounded-lg shadow-lg border border-gray-500`}
            >
              <h2 className="text-2xl font-semibold text-center">
                {category.title}
              </h2>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 "
                  >
                    <span
                      className={`text-3xl ${skill.logoColor}`}
                      style={skill.animationStyle}
                    >
                      {React.createElement(skill.logo)}
                    </span>
                    <span className="font-medium text-center mt-3">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
