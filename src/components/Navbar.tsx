import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Profiles', href: '#profiles' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll style
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust offset for navbar height
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-background/50 border-b border-white/5 backdrop-blur-xl shadow-lg' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home')}
          className="text-2xl font-bold tracking-tight text-white hover:opacity-95 transition-opacity"
        >
          Dipanshi<span className="text-purple-text font-extrabold">.Sharma</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1 glass-panel px-4 py-2 rounded-full">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'bg-purple-text text-white shadow-md shadow-purple-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Resume Quick Link */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="px-5 py-2.5 rounded-full text-sm font-semibold border border-purple-500/30 text-white bg-purple-500/10 hover:bg-purple-500 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 right-0 w-64 z-50 bg-background/95 border-l border-white/10 backdrop-blur-2xl transition-transform duration-300 transform lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full py-8 px-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-lg font-medium transition-all ${
                  activeSection === item.href.substring(1)
                    ? 'text-purple-text font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="block text-center w-full px-5 py-3 rounded-full text-sm font-semibold border border-purple-500/30 text-white bg-purple-500/10 hover:bg-purple-500 hover:border-purple-500 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
