import {ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="text-3xl font-bold mb-4">
              <span className="text-orange-500">Raj</span>anarender
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-8 max-w-2xl">
              Passionate about creating innovative solutions and contributing to meaningful projects.
              Always ready to learn, grow, and make a positive impact in the tech industry.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Resume
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
                  © 2025 Rajanarender Portfolio. All rights reserved.
                </p>
                <button
                  onClick={scrollToTop}
                  className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
                >
                  <ArrowUp size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;