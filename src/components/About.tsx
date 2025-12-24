import React from 'react';

const About = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-4 lg:scroll-mt-24">
      <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl mb-4">
        About Me
      </h2>
      <p className="leading-relaxed text-slate-400">
        I&apos;m a 21-year-old DevOps Engineer with a passion for Linux, scripting, and automation. My experience in startup environments has taught me to be adaptable and resourceful, with a strong focus on creating efficient and scalable systems. I thrive on solving complex problems and enjoy delving into system-level customization to optimize for performance and productivity.
      </p>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-slate-300">Interests & Hobbies</h3>
        <ul className="list-disc list-inside mt-2 text-slate-400">
          <li>Exploring niche related to FOSS and Linux</li>
          <li>FOSS Contribution</li>
          <li>Manga & Manhwa</li>
        </ul>
      </div>
    </section>
  );
};

export default About;