import React from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between pb-10 border-b border-gray-800">
          <div className="mb-10 md:mb-0 md:w-1/3">
            <a
              href="#hero"
              className="text-2xl font-bold text-blue-400 flex items-center mb-4"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Portfolio
            </a>
            <p className="text-gray-400 mb-8 max-w-md">
              Creating beautiful, functional digital experiences that blend design and development to solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Rahul-Nakka-23" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/nakka-rahul/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:rahulnakka55@gmail.com" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="mb-10 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  <span>About Me</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                >
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('experience');
                  }}
                >
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-white">Let's Connect</h3>
            <p className="text-gray-400 mb-4">
              Interested in working together or have a question? Feel free to reach out.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <span>Get In Touch</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Rahul Nakka. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;