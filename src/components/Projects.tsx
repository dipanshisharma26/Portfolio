import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Text-to-SQL & Research-and-Report Agent',
      category: 'AI System / Multi-Agent',
      date: 'MAY-2K26',
      tech: ['LangChain', 'LangGraph', 'Guardrails AI', 'LangSmith'],
      description: 'Designed a production-grade LangGraph agent with a shared state graph. Handles natural-language-to-SQL query compilation (with bounded retries and validation) and research reporting. Implemented entry/output guardrails for security and compliance, with human-in-the-loop overrides.',
      github: 'https://github.com/dipanshisharma26/Text-to-SQL',
      live: '#'
    },
    {
      title: 'Supply Chain Disruption Agent',
      category: 'AI System / LangGraph',
      date: 'MAY-2K26',
      tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'LangGraph', 'WebSockets', 'Docker', 'SQLite', 'Tailwind CSS'],
      description: 'Developed a production-patterned, full-stack supply chain operator dashboard powered by a multi-agent LangGraph orchestration backend. The system dynamically monitors e-commerce order logs, classifies delivery risks utilizing LLM integrations, and features a state-serialized Human-in-the-Loop approval mechanism powered by SQLite checkpointers. Integrated live bi-directional WebSocket streams to update an interactive React graph visualizer, and containerized the end-to-end stack using Docker Compose for automated seeding and deployments.',
      github: 'https://github.com/dipanshisharma26/Supply-Chain-Agent',
      live: '#'
    },
    {
      title: 'Flourish Health Backend',
      category: 'Django Backend / System Design',
      date: 'FEB-2K26',
      tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'JWT'],
      description: 'Engineered a Django backend using the Service-Selector pattern. Designed 18+ secure REST API endpoints with centralized exceptions. Built a time-decay risk engine triggering real-time flags, plus a Celery-Redis queue with tenant-isolated database rules.',
      github: 'https://github.com/dipanshisharma26',
      live: '#'
    },
    {
      title: 'CampusConnect CS',
      category: 'MERN Web App',
      date: 'DEC-2K25',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay API'],
      description: 'Integrated a secure Razorpay payment gateway into a campus portal. Built robust backend routes for order creation, payment state verification, and Webhook callback validation to manage transaction states and update student subscriptions.',
      github: 'https://github.com/dipanshisharma26/Payment_Module',
      live: '#'
    },
    {
      title: 'Visionary - AI Braille Engine',
      category: 'Computer Vision / Deep Learning',
      date: 'JUN-2K26',
      tech: ['TensorFlow', 'Keras', 'OpenCV', 'Python', 'Streamlit', 'Gemini API'],
      description: 'Built a hybrid computer vision system and translator bridging tactile Braille and digital text. Integrates a custom 5-block CNN with Squeeze-and-Excitation attention and Hough Circle detection for OCR. Features real-time webcam text capture with Gemini-powered OCR auto-correction, an agentic document assistant for interactive chat, and Hindi Bharati Braille translation.',
      github: 'https://github.com/dipanshisharma26/Visionary',
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16 select-none">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Projects Showcase - <span className="bg-gradient-to-r from-purple-text to-pink-500 bg-clip-text text-transparent">What I've Built!</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg">A selection of backend systems, machine learning workflows, and multi-agent designs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Hover visual accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Top date + category tags */}
              <div className="flex justify-between items-center mb-4 select-none">
                <span className="flex items-center gap-1 text-xs text-purple-300 font-semibold uppercase bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/10">
                  <Calendar size={12} />
                  {proj.date}
                </span>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  {proj.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {proj.title}
              </h3>

              {/* Technology badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            {/* Bottom Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5 relative z-10">
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors duration-300"
              >
                <FaGithub size={14} />
                <span>GitHub</span>
              </a>
              {proj.live !== '#' && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
                >
                  <ExternalLink size={14} />
                  <span>View Live</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
