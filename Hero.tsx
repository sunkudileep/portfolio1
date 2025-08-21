import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      textElement.classList.add('animate-fadeIn');
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 ${theme === 'dark'
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
            }`}
        ></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-medium mb-4 text-blue-600 dark:text-blue-400 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Hello, I'm
          </p>
          <h1
            ref={textRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <span className="inline-block">Rahul Nakka</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-300 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Aspiring Software Engineer | Full Stack Developer
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            I create exceptional digital experiences that combine beautiful design with flawless functionality.
          </p>

          {/* Main Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 opacity-0 animate-fadeInUp" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
          </div>

          {/* Scroll to About Button - Positioned below CTAs and centered */}
          <div className="mb-10 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <button
              onClick={scrollToAbout}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 animate-bounce inline-flex items-center justify-center"
              aria-label="Scroll down to About section"
            >
              <ArrowDown size={20} />
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-16 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
            <a href="https://github.com/Rahul-Nakka-23" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/nakka-rahul/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:rahulnakka55@gmail.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>

          {/* Original absolutely positioned div for scroll button is now removed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;