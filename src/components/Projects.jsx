import React from "react";
import { assets } from "../assets/assets";
import { ExternalLink, Code } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAppwrite } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Projects = () => {
  // Projects Data:
  const projectsData = [
    {
      id: 1,
      title: "Full Stack E-Commerce Platform",
      description: `Developed and deployed a modern, responsive e-commerce platform using React.js, Appwrite, and Tailwind CSS. Implemented Google and email/password authentication, a dynamic product catalog, and a real-time shopping cart with quantity management. Leveraged React Context API for global state, React Router for seamless navigation, and followed clean, modular code architecture. Deployed rapidly with Vite and Netlify, ensuring cross-device compatibility and an optimized user experience.`,
      technologies: [
        [
          <FaReact
            className="text-blue-500 text-4xl bg-transparent animate-spin"
            style={{ animationDuration: "10s" }}
          />,
          "React",
        ],
        [
          <RiTailwindCssFill className="text-cyan-500 text-4xl bg-transparent" />,
          "Tailwind CSS",
        ],
        [
          <SiAppwrite className="text-pink-500 text-4xl bg-transparent" />,
          "Appwrite",
        ],
      ],
      liveUrl: "https://theorganicstore.netlify.app/",
      status: "Live",
      year: "2025",
      image: assets.ecom,
    },
    {
      id: 2,
      title: "Job Portal",
      description:
        "Designed and built a job portal from the ground up, featuring intelligent job matching powered by machine learning, advanced filtering, and automated application tracking. The platform connects employers and job seekers through a secure, user-friendly interface, ensuring efficient and personalized job search experiences.",
      technologies: [
        [
          <SiMongodb className="text-green-700 text-4xl bg-transparent" />,
          "MongoDB",
        ],
        [
          <SiExpress className="text-yellow-500 text-4xl bg-transparent" />,
          "Express",
        ],
        [
          <FaReact
            className="text-blue-500 text-4xl bg-transparent animate-spin"
            style={{ animationDuration: "10s" }}
          />,
          "React",
        ],
        [
          <TbBrandNodejs className="text-green-500 text-4xl bg-transparent" />,
          "Node.js",
        ],
        [
          <RiTailwindCssFill className="text-cyan-500 text-4xl bg-transparent" />,
          "Tailwind CSS",
        ],
      ],
      liveUrl: "https://job-portal-new-client-beta.vercel.app/",
      status: "Live",
      year: "2025",
      image: assets.jobPortal,
    },
    {
      id: 3,
      title: "VLC Media Player",
      description:
        "Engineered a browser-based media player inspired by VLC, implementing essential features such as play/pause controls, volume adjustment, and timeline scrubbing. Focused on creating a responsive and intuitive UI with seamless user interactions, leveraging vanilla JavaScript for DOM manipulation. This project highlights strong front-end skills and a commitment to usability and functionality.",
      technologies: [
        [
          <FaHtml5 className="text-orange-600 text-4xl bg-transparent" />,
          "HTML",
        ],
        [
          <FaCss3Alt className="text-blue-600 text-4xl bg-transparent" />,
          "CSS",
        ],
        [
          <IoLogoJavascript className="text-yellow-500 text-4xl bg-transparent" />,
          "JavaScript",
        ],
      ],
      liveUrl: "https://16-pranav.github.io/VLC-Media-Player/",
      status: "Live",
      year: "2024",
      image: assets.vlc,
    },
  ];

  return (
    <div className="p-4 md:p-10" id="projects">
      <h1 className="text-center text-5xl font-bold">Projects</h1>

      <div className="max-w-7xl mx-auto mt-10">
        {/*  Projects Grid */}
        <div className="grid gap-16">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center`}
            >
              {/* Image Column */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="max-w-[800px] max-h-[1280px] relative overflow-hidden rounded-2xl modern-card">
                  {/* Project Container */}
                  <div className="border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Content */}
                    <div className="relative z-10 text-center group">
                      {/* Project Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-30"
                      />

                      {/* Hover Overlay Content - Initially hidden, shows on hover */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1500"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <Code
                          size={48}
                          className="text-white/60 mx-auto mb-4"
                        />

                        <p className="text-white/80 font-medium text-lg">
                          {project.title}
                        </p>

                        <p className="text-white/60 text-sm mt-2">
                          Live Preview Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 text-justify">
                  {project.description}
                </p>

                <div>
                  <p className="mb-2 font-medium">Tech Stack</p>
                  <ul className="flex flex-wrap gap-4 ">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="text-white ">
                        <div className="flex flex-col items-center gap-3 justify-center mt-3">
                          {tech[0]}
                          {tech[1]}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Status & Link */}
                <div className="flex items-center gap-4">
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {project.status} • {project.year}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <ExternalLink className="mr-2" />
                    <span>View Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
