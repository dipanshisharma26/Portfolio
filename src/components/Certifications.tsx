import React from 'react';
import { Award, Database, Brain, Globe } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Research & Development Internship',
      org: 'Marketing Maharaja',
      icon: <Award className="text-yellow-400 w-8 h-8" />,
      desc: 'Completed R&D Internship specializing in backend Django/DRF systems, caching architectures, and Celery asynchronous queues.',
      link: '#'
    },
    {
      title: 'NLP Internship Certificate of Excellence',
      org: 'NIT Delhi',
      icon: <Award className="text-purple-400 w-8 h-8" />,
      desc: 'Awarded Certificate of Excellence and Letter of Recommendation for NLP research and benchmarking text-vectorizations.',
      link: '#'
    },
    {
      title: 'Web Development Internship',
      org: 'Aquad Software Solutions Pvt. Ltd.',
      icon: <Award className="text-blue-400 w-8 h-8" />,
      desc: 'Completed web development internship focused on educational systems, content staging, and bug testing.',
      link: '#'
    },
    {
      title: 'Data Science & AI',
      org: 'PynetLabs',
      icon: <Brain className="text-green-400 w-8 h-8" />,
      desc: 'Rigorous data science course training. Covered statistical analysis, predictive modelling, and machine learning pipelines.',
      link: '#'
    },
    {
      title: 'Generative AI: Prompt Engineering',
      org: 'IBM',
      icon: <Brain className="text-pink-400 w-8 h-8" />,
      desc: 'Learned prompt engineering frameworks, capabilities and limitations of LLMs, and integration into workflows.',
      link: '#'
    },
    {
      title: 'Oracle SQL Course',
      org: 'Oracle University',
      icon: <Database className="text-teal-400 w-8 h-8" />,
      desc: 'Earned validation for database query structures, complex joints, views, index optimizations, and transaction control.',
      link: '#'
    },
    {
      title: 'Web Developer Internship',
      org: 'Codsoft',
      icon: <Globe className="text-indigo-400 w-8 h-8" />,
      desc: 'Completed responsive web project buildouts utilizing HTML, CSS, JavaScript, animations, and clean form processing.',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center mb-16 select-none">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Certifications - <span className="bg-gradient-to-r from-purple-text to-pink-500 bg-clip-text text-transparent">Learning Milestones!</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg">Credentials and specializations earned throughout my development career.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div 
            key={idx} 
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Icon badge header */}
              <div className="mb-5 flex justify-between items-center select-none">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-purple-500/20 group-hover:bg-purple-500/5 transition-all duration-300">
                  {cert.icon}
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">Verified</span>
              </div>

              {/* Title & Org */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-purple-text mb-4">
                {cert.org}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {cert.desc}
              </p>
            </div>

            {/* View Link */}
            {cert.link !== '#' ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-semibold border border-purple-500/20 text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
              >
                <span>View Credentials</span>
              </a>
            ) : (
              <div className="w-full text-center py-2 text-xs font-semibold text-gray-500 bg-white/5 border border-white/5 rounded-xl cursor-default select-none">
                Internship Completion
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
