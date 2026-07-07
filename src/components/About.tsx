import React from 'react';
import { User, Sparkles, Brain, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-20">
      <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden glass-panel-hover select-none">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-300">
              <User size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              About Me - <span className="bg-gradient-to-r from-purple-text to-pink-500 bg-clip-text text-transparent">Behind The Code!</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
            <div className="md:col-span-2 space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                I am a passionate <strong className="text-white font-semibold">Full-Stack Developer</strong> and <strong className="text-white font-semibold">AI Engineer</strong> based in Gurugram, India. My core expertise lies at the intersection of building robust, modular web systems and deploying intelligent, multi-agent AI workflows.
              </p>
              <p>
                With hands-on experience spanning the MERN stack and Django/DRF backends, I engineer scalable APIs and responsive, modern front-ends. At the same time, I train CNN/NLP models and design advanced state-graph agent architectures using <strong className="text-purple-text font-semibold">LangChain</strong> and <strong className="text-purple-text font-semibold">LangGraph</strong> to automate complex business workflows.
              </p>
              <p>
                I thrive in settings that require critical problem-solving, rapid prototyping, and rigorous output-guardrail implementation. I'm always open to new paradigms, continuous iteration, and building software that directly impacts lives.
              </p>
            </div>

            {/* Side highlights grid */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 text-purple-300 font-semibold mb-2">
                  <Brain size={18} />
                  <span>Agentic AI System design</span>
                </div>
                <p className="text-xs text-gray-400">
                  Creating state-graph logic (LangGraph), multi-agent orchestration, and guardrails for secure production deployments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-pink-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 text-pink-400 font-semibold mb-2">
                  <Cpu size={18} />
                  <span>Full-Stack Backends</span>
                </div>
                <p className="text-xs text-gray-400">
                  Designing RESTful APIs using Django REST Framework, Node.js, caching with Redis, and managing PostgreSQL/MongoDB.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 text-blue-400 font-semibold mb-2">
                  <Sparkles size={18} />
                  <span>Machine Learning</span>
                </div>
                <p className="text-xs text-gray-400">
                  Training Convolutional Neural Networks (CNNs) for vision translation and NLP models for custom classifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
