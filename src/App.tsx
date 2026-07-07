import { useState } from 'react';
import FluidBackground from './components/FluidBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-gray-300 font-sans antialiased selection:bg-purple-600/30 selection:text-white">
      {/* GPU Fluid Simulation */}
      <FluidBackground />

      {/* Custom Trailing Pointer Cursor */}
      <CustomCursor />

      {/* Header Menu */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Profiles />
      <Contact />

      {/* Footer Navigation */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
