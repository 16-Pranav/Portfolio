import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <div
        className="text-xl cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("profile").offsetTop,
            behavior: "smooth",
          });
          if (isOpen) toggleMenu();
        }}
      >
        Profile
      </div>
      <div
        className="text-xl cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("experience").offsetTop,
            behavior: "smooth",
          });
          if (isOpen) toggleMenu();
        }}
      >
        Experience
      </div>
      <div
        className="text-xl cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("projects").offsetTop,
            behavior: "smooth",
          });
          if (isOpen) toggleMenu();
        }}
      >
        Projects
      </div>
      <div
        className="text-xl cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("skills").offsetTop,
            behavior: "smooth",
          });
          if (isOpen) toggleMenu();
        }}
      >
        Skills
      </div>
      <div
        className="text-xl cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("education").offsetTop,
            behavior: "smooth",
          });
          if (isOpen) toggleMenu();
        }}
      >
        Education
      </div>
      <div
        className="text-xl cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: document.getElementById("contact").offsetTop,
            behavior: "smooth",
          });
          if (isOpen) toggleMenu();
        }}
      >
        Contact
      </div>
    </>
  );

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 max-w-6xl w-[90%] z-50">
      <div className="liquid-glass-navbar p-5 flex justify-between items-center shadow-lg rounded-2xl">
        <h1 className="text-white font-bold text-3xl">PORTFOLIO</h1>
        <div className="hidden md:flex space-x-4 text-white">{navLinks}</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 liquid-glass-navbar p-5 rounded-2xl">
          <div className="flex flex-col items-center space-y-4 text-white">
            {navLinks}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
