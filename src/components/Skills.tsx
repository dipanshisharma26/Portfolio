import React from 'react';
import { 
  SiPython, SiJavascript, SiHtml5, SiPostgresql, 
  SiMysql, SiMongodb, SiRedis, SiGithub, SiPostman, 
  SiDjango, SiReact, SiNodedotjs, SiExpress, SiFlask, SiTensorflow, SiOpencv
} from 'react-icons/si';
import { Brain, Database, Code, Terminal, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-purple-400 w-5 h-5" />,
      skills: [
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'SQL', icon: <Database className="text-[#0064a5]" /> },
        { name: 'HTML/CSS', icon: <SiHtml5 className="text-[#E34F26]" /> }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="text-pink-400 w-5 h-5" />,
      skills: [
        { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-white" /> },
        { name: 'Django / DRF', icon: <SiDjango className="text-[#092E20]" /> },
        { name: 'Flask', icon: <SiFlask className="text-white" /> },
        { name: 'Celery', icon: <Terminal className="text-[#37814A]" /> }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-green-400 w-5 h-5" />,
      skills: [
        { name: 'LangGraph', icon: <Brain className="text-purple-400" /> },
        { name: 'LangChain', icon: <Layers className="text-green-300" /> },
        { name: 'RAG', icon: <Layers className="text-yellow-300" /> },
        { name: 'LLMs', icon: <Brain className="text-indigo-400" /> },
        { name: 'Machine Learning', icon: <Brain className="text-blue-300" /> },
        { name: 'Deep Learning / CNN', icon: <SiTensorflow className="text-[#FF9900]" /> },
        { name: 'NLP / LSTM', icon: <Brain className="text-pink-400" /> },
        { name: 'OpenCV', icon: <SiOpencv className="text-[#00ff00]" /> }
      ]
    },
    {
      title: 'Databases & Storage',
      icon: <Database className="text-blue-400 w-5 h-5" />,
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Redis Cache', icon: <SiRedis className="text-[#DC382D]" /> }
      ]
    },
    {
      title: 'Tools & Ecosystem',
      icon: <Terminal className="text-yellow-400 w-5 h-5" />,
      skills: [
        { name: 'Git & GitHub', icon: <SiGithub className="text-white" /> },
        { name: 'Postman APIs', icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: 'VS Code', icon: <Code className="text-[#007ACC]" /> },
        { name: 'LangSmith', icon: <Layers className="text-[#f97316]" /> },
        { name: 'Guardrails AI', icon: <Terminal className="text-red-400" /> },
        { name: 'ngrok', icon: <Terminal className="text-[#3F66FA]" /> },
        { name: 'Antigravity', icon: <Brain className="text-purple-400" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center mb-16 select-none">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Technical Skills - <span className="bg-gradient-to-r from-purple-text to-pink-500 bg-clip-text text-transparent">Core Expertise!</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg">My engineering toolbelt divided by technical category.</p>
      </div>

      <div className="space-y-10">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-panel p-6 md:p-8 rounded-2xl">
            {/* Category header */}
            <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-white/5 select-none">
              {cat.icon}
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">{cat.title}</h3>
            </div>

            {/* Skill cards inside category */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group cursor-default"
                >
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
