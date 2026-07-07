import React, { useState, useEffect } from 'react';
import { Terminal, Brain, Code, Sparkles, Send, FileText } from 'lucide-react';
import resumePdf from '../assets/Dipanshi_Sharma_CV.pdf';

const Hero: React.FC = () => {
  const words = [
    'AI Engineer',
    'Full-Stack Developer',
    'Machine Learning Engineer'
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        // Deleting character
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypingSpeed(75); // Faster when deleting
      } else {
        // Adding character
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentWord) {
        // Finished typing, pause
        setTypingSpeed(1800);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <main 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Floating Corner Icons */}
      <div className="absolute top-1/4 left-10 md:left-24 floating-icon animate-float-slow text-purple-text/30">
        <Code size={40} className="md:w-12 md:h-12" />
      </div>
      <div className="absolute top-1/4 right-10 md:right-24 floating-icon animate-float-medium text-pink-500/30">
        <Brain size={40} className="md:w-12 md:h-12" />
      </div>
      <div className="absolute bottom-1/4 left-10 md:left-24 floating-icon animate-float-fast text-blue-500/30">
        <Sparkles size={40} className="md:w-12 md:h-12" />
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-24 floating-icon animate-float-medium text-purple-400/30">
        <Terminal size={40} className="md:w-12 md:h-12" />
      </div>

      <div className="max-w-4xl mx-auto z-10 select-none">
        {/* Animated Pill Tag */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/5 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Portfolio</span>
        </div>

        {/* Hero Headlines */}
        <h2 className="text-gray-400 font-semibold tracking-wide text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-widest leading-relaxed mb-4">
          Woah! You Landed on the Portfolio Website of The
        </h2>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 min-h-[80px] sm:min-h-[100px] md:min-h-[160px] flex items-center justify-center">
          <span className="bg-gradient-to-r from-purple-gradient-start via-purple-text to-purple-gradient-end bg-clip-text text-transparent typing-cursor pb-2">
            {currentText}
          </span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 px-4">
          Dipanshi Sharma <span className="text-purple-text font-bold">|</span> Full-Stack Developer & AI Systems Engineer specializing in multi-agent workflows, machine learning, and scalable backends.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-600/30 hover:shadow-purple-700/50 hover:scale-[1.02] transition-all duration-300"
          >
            <span>Let's Connect</span>
            <Send className="w-4 h-4" />
          </a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] backdrop-blur-md transition-all duration-300"
          >
            <FileText className="w-4 h-4 text-purple-text" />
            <span>View Resume</span>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border border-gray-500 flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-purple-text rounded-full animate-bounce" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
