// Mobile-first React Portfolio Template for Mounika

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAVBAR - MOBILE FIRST */}
      <nav className="flex justify-between items-center px-4 py-4 bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <h2 className="text-xl font-bold text-cyan-300">Mounika M</h2>
        <button id="menuBtn" className="text-3xl md:hidden">☰</button>
        <div id="mobileMenu" className="hidden flex-col gap-4 absolute top-16 right-4 bg-[#111] p-4 rounded-lg border border-white/10 md:flex md:static md:flex-row md:bg-transparent md:p-0 md:border-0">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="px-6 py-24 text-center md:text-left md:px-20">
        <h1 className="text-4xl font-extrabold md:text-6xl">Hi, I'm <span className="text-cyan-300">Mounika</span></h1>
        <p className="mt-3 text-lg text-gray-300 md:max-w-xl">
          Full Stack Developer specializing in MERN & Django. I build modern, clean and animated web experiences.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a className="bg-cyan-500 text-black px-6 py-3 rounded-full font-bold">View Projects</a>
          <a className="border border-cyan-400 px-6 py-3 rounded-full font-bold text-cyan-300">Hire Me</a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 py-20 bg-[#0d0d0d] md:px-20">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-10">About Me</h2>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto items-center">
          <img src="/profile.jpeg" className="w-full h-32 object-cover rounded-xl" />
          <p className="text-sm leading-relaxed text-gray-300">
            I am a Full Stack Developer (MERN + Django) who enjoys building fast, responsive and attractive web apps.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-20 md:px-20">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-10">Skills</h2>
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto text-center">
          <div className="bg-[#111] p-4 rounded-lg border border-white/10">HTML</div>
          <div className="bg-[#111] p-4 rounded-lg border border-white/10">CSS</div>
          <div className="bg-[#111] p-4 rounded-lg border border-white/10">JavaScript</div>
          <div className="bg-[#111] p-4 rounded-lg border border-white/10">React</div>
          <div className="bg-[#111] p-4 rounded-lg border border-white/10">Node.js</div>
          <div className="bg-[#111] p-4 rounded-lg border border-white/10">MongoDB</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20 bg-[#0d0d0d] md:px-20">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-10">Projects</h2>
        <div className="grid gap-6 max-w-lg mx-auto">
          <div className="bg-[#111] p-5 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-cyan-300">Village Community Hub</h3>
            <p className="text-gray-400 text-sm mt-2">A React-based community services platform.</p>
          </div>
          <div className="bg-[#111] p-5 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-cyan-300">Tele-Track CRM</h3>
            <p className="text-gray-400 text-sm mt-2">Full MERN CRM system with dashboards and JWT auth.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Contact Me</h2>
        <p className="text-gray-400">Email: mounikamsharma@gmail.com</p>
        <p className="text-gray-400 mt-2">Location: Bengaluru</p>
      </section>
    </div>
  );
}
