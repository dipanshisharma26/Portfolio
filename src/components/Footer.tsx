import React, { useEffect, useState } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Profiles', href: '#profiles' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="w-full bg-[#070709] border-t border-white/5 py-12 px-6 relative mt-16 select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white mb-2">
            Dipanshi<span className="text-purple-text font-extrabold">.Sharma</span>
          </h2>
          <p className="text-xs text-gray-500 font-medium">
            Engineering at the Intersection of Multi-Agent Workflows, Vision Models, and Full-Stack Design.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-semibold text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/dipanshi-sharma-2605"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 text-gray-400 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/dipanshisharma26"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 text-gray-400 hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>

        {/* Bottom copyright details */}
        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="font-semibold">
            &copy; 2026 Dipanshi Sharma. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-semibold">
            <span>Designed & Developed with</span>
            <Heart size={12} className="text-purple-text fill-purple-text animate-pulse" />
            <span>in React & Tailwind</span>
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={handleScrollTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-600/30 hover:bg-purple-700 hover:scale-105 z-30 transition-all duration-300 focus:outline-none ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;
