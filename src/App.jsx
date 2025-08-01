import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  
  
  return (
    <>
      <div className="">
        <Navbar />
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>

      {/* Scroll to top button */}
      <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
          aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  )
}

export default App
