import React from 'react';

const Footer = () => {
  return (
    <section id="footer" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-3 lg:scroll-mt-24">
      <footer className="mt-16 text-sm text-slate-500">
        <p>
          Built with <span className="text-slate-200">Next.js</span> & <span className="text-slate-200">Tailwind CSS</span>. Deployed on <span className="text-slate-200">GitHub Pages</span>.
        </p>
      </footer>
    </section>
  );
};

export default Footer;