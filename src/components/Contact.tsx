import React, { useState } from 'react';
import { User, Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('loading');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.warn("Web3Forms Access Key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY in your .env file.");
      setStatus('error');
      setErrorMessage("Contact form is not configured. Please set the VITE_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Message from ${formState.name} via Portfolio`,
          from_name: 'Portfolio Contact Form'
        })
      });

      const data = await response.json();
      if (response.status === 200 && data.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error("Web3Forms submission error:", data);
        setStatus('error');
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus('error');
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-20">
      <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden select-none">
        
        {/* Glow decoration */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Get In Touch - <span className="bg-gradient-to-r from-purple-text to-pink-500 bg-clip-text text-transparent">Ask Me Anything!</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm md:text-base leading-relaxed">
              Ready to collaborate, hire, or just have a technical conversation? Drop a message below and I will get back to you shortly.
            </p>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full mb-4 animate-bounce">
                <CheckCircle size={44} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-sm text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-2xl text-xs md:text-sm animate-fade-in">
                  <AlertCircle size={18} className="flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
              {/* Name Input */}
              <div className="relative group">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-purple-300 transition-colors duration-200">
                  <User size={18} />
                </span>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  disabled={status === 'loading'}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-input text-white text-sm placeholder:text-gray-500"
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-purple-300 transition-colors duration-200">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  disabled={status === 'loading'}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-input text-white text-sm placeholder:text-gray-500"
                />
              </div>

              {/* Message Input */}
              <div className="relative group">
                <span className="absolute left-4 top-5 text-gray-500 group-focus-within:text-purple-300 transition-colors duration-200">
                  <MessageSquare size={18} />
                </span>
                <textarea
                  required
                  rows={5}
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  disabled={status === 'loading'}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-input text-white text-sm placeholder:text-gray-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/40 shadow-lg shadow-purple-600/20 transition-all duration-300 hover:scale-[1.01]"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
