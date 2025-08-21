import React, { useEffect, useRef } from 'react';
import { User, Code, Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import myImage from './1000025847.jpg';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const cards = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education',
      description: 'I hold a degree in Electronics and Communication Engineering  and continuously expand my knowledge through online courses and self-directed learning.',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Developer',
      description: 'I enjoy building things that live on the internet, from websites to applications, with a focus on responsive design and accessibility.',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Experience',
      description: 'No formal industry experience yet — actively building hands-on skills through self-driven projects and continuous learning.',
    },

  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded transition-all duration-1000 delay-200" style={{ transform: isInView ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <p className={`text-lg text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm a passionate technophile dedicated to creating seamless digital experiences. With expertise in both frontend and backend technologies, I build applications that are not only functional but also intuitive and visually appealing. Since I'm an ECE student I do possess core skills as well.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 transition-all ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={`relative transition-all duration-1000 delay-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-xl">
              <img
                src={myImage}
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full z-[-1]"></div>
          </div>

          <div className={`transition-all duration-1000 delay-900 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a dedicated full-stack developer with a passion for creating exceptional digital experiences. My journey in web development started in my frist year of B-Tech, and since then, I've worked on numerous projects.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I specialize in building responsive, accessible, and performant web applications using modern technologies. My approach combines technical expertise with a keen eye for design, ensuring that every project I work on is both functionally robust and visually appealing.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">Problem Solver</span>
              <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">Leardership</span>
              <span className="px-3 py-1 text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full">Creative Thinker</span>
              <span className="px-3 py-1 text-sm bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full">Team collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;