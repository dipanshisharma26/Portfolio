import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Marketing Maharaja',
      role: 'Research & Development Intern',
      location: 'Remote',
      date: 'MAR 2026 – PRESENT',
      points: [
        'Built and maintained REST APIs using Django and Django REST Framework to support core product features.',
        'Implemented Redis-backed caching to cut database load and improve API response times.',
        'Set up Celery task queues for asynchronous background jobs (notifications, data exports).',
        'Collaborated with design and marketing teams to translate product requirements into backend functionality.'
      ],
      number: '01',
      align: 'left'
    },
    {
      company: 'Aquad Software Solutions Pvt. Ltd.',
      role: 'Web Development Intern',
      location: 'Remote',
      date: 'JUL 2025 – AUG 2025',
      points: [
        'Created and maintained project documentation to support the core system architecture.',
        'Uploaded, validated, and structured complex educational content on the ExamPrepTool platform.',
        'Performed rigorous QA and bug/UI-UX testing, delivering detailed reports to the development team.'
      ],
      number: '02',
      align: 'right'
    },
    {
      company: 'NIT Delhi',
      role: 'NLP Research Intern',
      location: 'New Delhi',
      date: 'JUN 2024 – JUL 2024',
      points: [
        'Benchmarked five text-vectorization techniques (BoW, TF-IDF, GloVe, Word2Vec, FastText).',
        'Trained and optimized Decision Tree, Logistic Regression, Naive Bayes, SVM, and Random Forest classifiers for sentiment analysis.',
        'Awarded Certificate of Excellence and Letter of Recommendation for contributions to research.'
      ],
      number: '03',
      align: 'left'
    },
    {
      company: 'Codsoft',
      role: 'Web Developer Intern',
      location: 'Virtual',
      date: 'SEP 2023 – OCT 2023',
      points: [
        'Developed responsive, cross-browser web applications using HTML, CSS, and modern JavaScript.',
        'Implemented complex forms with real-time validation, dynamic animations, and interactive content rendering.'
      ],
      number: '04',
      align: 'right'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center mb-16 select-none">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Work Experience - <span className="bg-gradient-to-r from-purple-text to-pink-500 bg-clip-text text-transparent">Professional Journey!</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg">A timeline of my professional growth and technical contributions.</p>
      </div>

      <div className="relative">
        {/* Timeline Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-text/60 via-purple-500/20 to-transparent hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center md:justify-between w-full relative ${
                exp.align === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Bullet Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-text border-4 border-background z-10 hidden md:block" />

              {/* Empty Spacer Column for Alignment */}
              <div className="w-full md:w-[45%] hidden md:block" />

              {/* Timeline Card Column */}
              <div className="w-full md:w-[45%]">
                <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300">
                  
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
                        {exp.company}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {exp.role}
                      </h3>
                    </div>
                    <span className="text-3xl md:text-4xl font-extrabold text-white/10 select-none">
                      {exp.number}
                    </span>
                  </div>

                  {/* Details Bar */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-5 border-b border-white/5 pb-4 relative z-10">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-purple-text" />
                      {exp.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-purple-text" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Achievements Points */}
                  <ul className="space-y-3 relative z-10">
                    {exp.points.map((point, ptIdx) => (
                      <li key={ptIdx} className="text-sm text-gray-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-text mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
