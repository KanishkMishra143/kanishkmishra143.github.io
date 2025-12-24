import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import NavLink from './NavLink';

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-16">
      <div>
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-slate-700 mb-4">
          <Image 
            src="/profile.png" 
            alt="Profile Picture" 
            className="rounded-full" 
            width={192} 
            height={192} 
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Kanishk Kumar Mishra
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          DevOps Engineer
        </h2>
        <div className="mt-4">
          <p className="text-sm text-slate-400">21 Years old</p>
          <div className="mt-2 flex items-center gap-1 text-sm text-slate-400">
            <MapPin className="h-4 w-4" />
            <span>New Delhi, India</span>
          </div>
        </div>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build and maintain the infrastructure that powers modern web applications.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li><NavLink href="#about">About</NavLink></li>
            <li><NavLink href="#skills">Skills</NavLink></li>
            <li><NavLink href="#experience">Experience</NavLink></li>
            <li><NavLink href="#projects">Projects</NavLink></li>
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center lg:mt-auto" aria-label="Social media">
        <li className="mr-5 shrink-0">
          <a href="https://github.com/KanishkMishra143" target="_blank" rel="noreferrer noopener" className="block hover:text-slate-200">
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a href="https://www.linkedin.com/in/kanishk-kumar-83603b194/" target="_blank" rel="noreferrer noopener" className="block hover:text-slate-200">
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a href="mailto:kanishk.kumar412@gmail.com" className="block hover:text-slate-200">
            <Mail className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a href="https://drive.google.com/file/d/10dGFMZgfRK_BKxujZKWcFycJaD4HKSxX/view" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-200 hover:border-teal-300 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/50" download="Kanishk_Mishra_CV.pdf">
            <Download className="h-4 w-4" />
            <span>Download CV</span>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;