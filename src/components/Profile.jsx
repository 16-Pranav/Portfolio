import React from "react";
import { assets } from "../assets/assets.js";
import { Mail, Linkedin, Github, Phone, ChevronsDown } from "lucide-react";
import { SiGmail } from "react-icons/si";

const Profile = () => {
  return (
    <div className="pt-24 md:pt-32">
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[60vh] max-w-7xl mx-auto px-4 scroll-mt-28"
        id="profile"
      >
        {/* Text Content */}
        <div className="p-5 md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl">Hey there! I'm</h3>
          <h1 className="text-4xl md:text-5xl font-bold">Pranav Bhat</h1>
          <p className="text-lg max-w-2xl mt-5 text-justify text-white/70 leading-relaxed">
            I'm a Software Engineering student passionate about building
            full-stack web applications with the MERN stack. Experienced in
            problem-solving, team leadership, and organizing technical events
            for 120+ participants. Eager to create impactful, scalable, and
            user-focused software solutions.
          </p>

          <div>
            <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <button className="bg-[#065084] px-6 py-4 font-semibold rounded-3xl cursor-pointer hover:bg-[#053a61] transition-colors">
                <a href={assets.resume} download>
                  Download Resume
                </a>
              </button>
              <button
                className="flex items-center justify-center px-6 py-4 cursor-pointer hover:text-white/80 transition-colors"
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("contact").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Get In touch
              </button>
            </div>

            <div className="flex gap-5 mt-6 pl-3 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/pranav-bhat-9b44bb176"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={35}
                  className="text-blue-600 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://github.com/16-pranav"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={35}
                  className="text-purple-900 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="mailto:16pranavbhat.official@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail
                  size={35}
                  className="text-red-600 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="relative self-center w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] aspect-[11/13] md:ml-auto">
          {/* Blurry background */}
          <div
            className="absolute inset-0 p-5 rounded-[100px] bg-gradient-to-r from-cyan-400 to-pink-500 blur-xl opacity-30 animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>

          {/* Image with full shadow */}
          <img
            src={assets.myPhoto}
            alt="Profile"
            className="relative z-10 w-full h-full object-cover rounded-[100px] shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center mt-15 mb-5 flex-col">
        <h2 className="text-center text-white">Scroll Down</h2>
        <div className="flex items-center justify-center">
          <ChevronsDown size={32} className="text-2xl animate-bounce mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
