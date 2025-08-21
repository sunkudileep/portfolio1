import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1, once: true });
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skillsData: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 92, category: 'frontend' },

    // Backend
    { name: 'Node.js', level: 50, category: 'backend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'Django', level: 40, category: 'backend' },
    { name: 'MongoDB', level: 70, category: 'backend' },

    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Github', level: 90, category: 'tools' },
    { name: 'AWS', level: 70, category: 'tools' },
    //core
    { name: 'MATLAB', level: 70, category: 'core' },
    { name: 'Verilog', level: 70, category: 'core' },
    { name: 'Aurdino', level: 60, category: 'core' },
    { name: 'Raspberry Pi', level: 50, category: 'core' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & DevOps' },
    { id: 'core', name: 'Core Skills' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded transition-all duration-1000 delay-200" style={{ transform: isInView ? 'scaleX(1)' : 'scaleX(0)' }}></div>
          <p className={`text-lg text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I have experience with a wide range of technologies across the full stack development spectrum. My skill set is constantly evolving as I continue to learn and adapt to new technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md transition-all duration-500 transform hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-gray-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index % 6) * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isInView ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;