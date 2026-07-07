import React from 'react';
import { X, MapPin, Mail, Phone, Award, BookOpen, Briefcase, Code, GraduationCap, FileText, Download } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import resumePdf from '../assets/Dipanshi_Sharma_CV.pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-panel max-w-4xl w-full max-h-[90vh] rounded-3xl p-6 md:p-8 flex flex-col relative select-text">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-white/5 border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/10 text-gray-400 hover:text-white rounded-full transition-all duration-300"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 select-none">
          <BookOpen className="text-purple-text" />
          <span>Dipanshi's Resume <span className="text-purple-text">- On Paper</span></span>
        </h2>

        {/* Scrollable Document Container */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-8 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-6">
          
          {/* Resume Header Info */}
          <div className="text-center md:text-left md:flex md:justify-between md:items-end border-b border-white/5 pb-6">
            <div>
              <h1 className="text-3xl font-black text-white">Dipanshi Sharma</h1>
              <p className="text-purple-text font-bold uppercase tracking-wider text-xs mt-1">Full-Stack Developer & AI Systems Engineer</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1.5 text-xs text-gray-400">
              <span className="flex items-center gap-1.5 justify-center md:justify-end">
                <MapPin size={13} className="text-purple-text" /> Sohna, Gurugram, Haryana
              </span>
              <span className="flex items-center gap-1.5 justify-center md:justify-end">
                <Mail size={13} className="text-purple-text" /> dipanshivashisth26@gmail.com
              </span>
              <span className="flex items-center gap-1.5 justify-center md:justify-end">
                <Phone size={13} className="text-purple-text" /> +91 8307571313
              </span>
              <span className="flex items-center gap-3 justify-center md:justify-end mt-1">
                <a href="https://linkedin.com/in/dipanshi-sharma-2605" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition-colors duration-200">
                  <FaLinkedin size={12} className="text-purple-text" /> LinkedIn
                </a>
                <span className="text-white/10">|</span>
                <a href="https://github.com/dipanshisharma26" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 transition-colors duration-200">
                  <FaGithub size={12} className="text-purple-text" /> GitHub
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-text mb-3 select-none flex items-center gap-2">
              <FileText size={14} /> Summary
            </h3>
            <p className="text-gray-300 bg-white/5 border border-white/5 p-4 rounded-xl">
              Full-stack developer and AI engineer skilled in the MERN stack, Django/DRF, Machine Learning, NLP, and agentic AI systems (LangChain/LangGraph). Hands-on experience building web applications, payment modules, ML-based solutions, and multi-agent LLM workflows with strong API development, debugging, and data-handling skills.
            </p>
          </div>

          {/* Technical Skills Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-text mb-3 select-none flex items-center gap-2">
              <Code size={14} /> Technical Skills
            </h3>
            <div className="bg-white/5 border border-white/5 p-4 rounded-xl space-y-3 text-xs md:text-sm">
              <div>
                <span className="font-bold text-white">Languages: </span>
                <span className="text-gray-300">Python (Intermediate), JavaScript (Intermediate), SQL (Intermediate), HTML/CSS</span>
              </div>
              <div>
                <span className="font-bold text-white">Frameworks & Libraries: </span>
                <span className="text-gray-300">React.js, Node.js, Express.js, Flask, Django, Django REST Framework, Celery, TensorFlow/Keras, OpenCV</span>
              </div>
              <div>
                <span className="font-bold text-white">AI / ML: </span>
                <span className="text-gray-300">Machine Learning, Deep Learning, NLP, CNNs, LSTM, Retrieval-Augmented Generation, LLMs, LangChain, LangGraph</span>
              </div>
              <div>
                <span className="font-bold text-white">Databases: </span>
                <span className="text-gray-300">PostgreSQL, MySQL, MongoDB, Redis, SQL</span>
              </div>
              <div>
                <span className="font-bold text-white">Tools: </span>
                <span className="text-gray-300">Git, GitHub, Postman, Flask, ngrok, VS Code, Antigravity, Guardrails AI, LangSmith</span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-text mb-4 select-none flex items-center gap-2">
              <Briefcase size={14} /> Internship Experience
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">Research & Development Intern</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">Remote</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
                  <span className="font-semibold text-gray-300">Marketing Maharaja</span>
                  <span>Mar 2026 – Present</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Built and maintained REST APIs using Django and Django REST Framework to support core product features; implemented Redis-backed caching to cut database load and improve response times.</li>
                  <li>Set up Celery task queues for asynchronous background jobs (notifications, data exports) and collaborated with design/marketing teams to translate research requirements into backend functionality.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">Web Development Intern</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">Remote</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
                  <span className="font-semibold text-gray-300">Aquad Software Solutions Pvt. Ltd.</span>
                  <span>Jul 2025 – Aug 2025</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Created and maintained project documentation; uploaded, validated, and structured educational content on the ExamPrepTool platform; performed bug/UI-UX testing with clear reproduction reports for the dev team.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">NLP Research Intern</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">New Delhi</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
                  <span className="font-semibold text-gray-300">NIT Delhi</span>
                  <span>Jun 2024 – Jul 2024</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Benchmarked five text-vectorization techniques (BoW, TF-IDF, GloVe, Word2Vec, FastText) and trained/optimized Decision Tree, Logistic Regression, Naive Bayes, SVM, and Random Forest classifiers for sentiment analysis; awarded Certificate of Excellence and Letter of Recommendation.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">Web Developer Intern</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">Virtual</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
                  <span className="font-semibold text-gray-300">Codsoft</span>
                  <span>Sep 2023 – Oct 2023</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Developed responsive web applications using HTML, CSS, and JavaScript, including form validation, animations, and dynamic content rendering.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-text mb-4 select-none flex items-center gap-2">
              <Code size={14} /> Projects
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">Text-to-SQL & Research-and-Report Agent</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">LangChain, LangGraph</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Designed a production-grade LangGraph agent with one shared state graph handling two paths: natural-language-to-SQL retrieval (list_tables → get_schema → generate_sql → validate_sql → execute_sql with bounded retries) and a research-and-report path that synthesizes findings into attributed, audience-specific reports.</li>
                  <li>Implemented dual-pass guardrails (entry + output) for prompt-injection, disguised destructive-intent, PII, and unsupported-claim screening, plus human-in-the-loop interrupts on restricted-table queries and external report sends, phased across a 5-stage delivery plan with eval harnesses and go/no-go gates.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">Visionary - AI Braille Engine</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">TensorFlow, OpenCV, Gemini</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Built a hybrid computer vision system and translator bridging tactile Braille and digital text, integrating a custom 5-block CNN with Squeeze-and-Excitation attention and Hough Circle detection for accurate dot-pattern OCR.</li>
                  <li>Engineered real-time webcam text capture with Gemini API-powered OCR auto-correction, an agentic document assistant for interactive chat, and Hindi Bharati Braille translation.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">Supply Chain Disruption Agent</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">FastAPI, LangGraph, WebSockets</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Architected a full-stack disruption-monitoring system on 100k+ Olist orders where an APScheduler worker runs live SQL scans to flag carrier/seller delays, feeding a LangGraph state machine (Monitor → Classifier → Resolver → Report) that auto-resolves low-risk cases and escalates critical ones.</li>
                  <li>Implemented true state checkpointing with LangGraph's SqliteSaver to pause execution on high-severity interrupts and resume from saved thread state on operator approval, while streaming node transitions and logs to a React dashboard in real time over WebSockets.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">Flourish</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">Django, PostgreSQL, Celery</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Engineered a modular Django backend using the Service-Selector (Fat Services, Thin Views) pattern; designed 18+ secure REST API endpoints with a unified response formatter and centralized exception handling.</li>
                  <li>Built a time-decay scoring engine and composite behavioral risk engine (focus, consistency, social, mental health) triggering real-time high-risk flags via a Pub/Sub EventDispatcher; configured a Celery-Redis async pipeline with multi-tenant, RBAC-secured data isolation.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">CampusConnect CS</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">MERN Stack, Razorpay</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Integrated a secure Razorpay payment gateway using React.js, Node.js, Express.js, and MongoDB; built APIs for order creation, payment verification, and webhook handling for a smooth online payment flow.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">Stock Market Price Prediction Model</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">Python, Machine Learning</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Developed a model predicting stock prices for TCS, Wipro, and Adani Ports using Logistic Regression, Random Forest, and LSTM, with feature engineering and model evaluation to improve prediction accuracy.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-base">Sentiment Analysis using NLP</h4>
                  <span className="text-xs text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded">Python, NLP, ML</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-400 pl-2">
                  <li>Built a sentiment analysis model using NLP and ML techniques (text vectorization and classification) achieving high accuracy and efficiency.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-text mb-4 select-none flex items-center gap-2">
              <GraduationCap size={14} /> Education
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white">B.Tech, Computer Science & Engineering</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Apeejay Stya University — Gurugram, Haryana</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 font-semibold">2022 – 2026</span>
                  <p className="text-xs text-purple-300 font-bold mt-0.5">SGPA: 4.11 / 4.3</p>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white">12th (CBSE)</h4>
                  <p className="text-xs text-gray-400 mt-0.5">R.J.L Public School — Palwal, Haryana</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 font-semibold">2021 – 2022</span>
                  <p className="text-xs text-purple-300 font-bold mt-0.5">Score: 91%</p>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white">10th (CBSE)</h4>
                  <p className="text-xs text-gray-400 mt-0.5">R.J.L Public School — Palwal, Haryana</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 font-semibold">2019 – 2020</span>
                  <p className="text-xs text-purple-300 font-bold mt-0.5">Score: 94%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-text mb-3 select-none flex items-center gap-2">
              <Award size={14} /> Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2.5 bg-white/5 border border-white/5 rounded-lg">
                <Award size={14} className="text-purple-300 flex-shrink-0" />
                <span>Certificate of Completion — Marketing Maharaja (R&D Internship)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/5 border border-white/5 rounded-lg">
                <Award size={14} className="text-purple-300 flex-shrink-0" />
                <span>Certificate of Completion — Aquad Software Solutions Pvt. Ltd. (Web Development)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/5 border border-white/5 rounded-lg">
                <Award size={14} className="text-purple-300 flex-shrink-0" />
                <span>Certificate of Excellence & Letter of Recommendation — NIT Delhi (NLP Internship)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/5 border border-white/5 rounded-lg">
                <Award size={14} className="text-purple-300 flex-shrink-0" />
                <span>Certificate of Training — PynetLabs (Data Science & AI)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/5 border border-white/5 rounded-lg">
                <Award size={14} className="text-purple-300 flex-shrink-0" />
                <span>Certificate of Completion — IBM (Generative AI: Prompt Engineering Basics)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/5 border border-white/5 rounded-lg">
                <Award size={14} className="text-purple-300 flex-shrink-0" />
                <span>Oracle Course Completion Certificate — SQL</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white/5 border border-white/5 rounded-lg">
                <Award size={14} className="text-purple-300 flex-shrink-0" />
                <span>Certificate of Completion — Codsoft (Web Developer Internship)</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Actions inside Modal */}
        <div className="mt-6 border-t border-white/5 pt-4 flex justify-end gap-3 select-none">
          <button 
            onClick={() => window.print()}
            className="px-6 py-2 rounded-xl text-xs font-semibold border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300"
          >
            Print Resume
          </button>
          <a 
            href={resumePdf}
            download="Dipanshi_Sharma_CV.pdf"
            className="px-6 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 flex items-center gap-1.5"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
