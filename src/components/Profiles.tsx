import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Profiles: React.FC = () => {
  const profiles = [
    {
      name: 'LinkedIn',
      action: 'Connect',
      icon: <FaLinkedin size={36} className="text-[#0077B5]" />,
      username: '@dipanshi-sharma',
      link: 'https://linkedin.com/in/dipanshi-sharma-2605', // we will use a general profile or user link
      color: 'hover:border-[#0077B5]/40 hover:bg-[#0077B5]/5'
    },
    {
      name: 'GitHub',
      action: 'Commit',
      icon: <FaGithub size={36} className="text-white" />,
      username: '@dipanshisharma26',
      link: 'https://github.com/dipanshisharma26',
      color: 'hover:border-white/20 hover:bg-white/5'
    }
  ];

  return (
    <section id="profiles" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-20">
      <div className="text-center mb-16 select-none">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Web Presence - <span className="bg-gradient-to-r from-purple-text to-pink-500 bg-clip-text text-transparent">Dev Network!</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg">Explore my professional coding repositories and network links.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {profiles.map((profile, idx) => (
          <a
            key={idx}
            href={profile.link}
            target="_blank"
            rel="noreferrer"
            className={`glass-panel p-6 rounded-2xl flex items-center justify-between group transition-all duration-300 ${profile.color}`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 transition-transform duration-300 group-hover:scale-110">
                {profile.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {profile.name}
                </h3>
                <p className="text-xs text-gray-500 font-semibold">{profile.username}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-300 opacity-60 group-hover:opacity-100 transition-all duration-300">
              <span>{profile.action}</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
      
      <p className="text-center text-xs text-gray-500 font-semibold uppercase tracking-widest mt-12 select-none">
        Click on any card to view my developer profile details
      </p>
    </section>
  );
};

export default Profiles;
